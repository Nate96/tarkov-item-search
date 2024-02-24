import { Singleton } from "../core/singleton.ts";
import { DomHandler } from "../services/dom-handler.ts";
import { Route, routes } from "./routes.ts"

export class Router extends Singleton {
  routesMap!: Map<string, Route>;
  domHandler = DomHandler.getInstance<DomHandler>();

  protected constructor() {
    super();
console.log('Router constructor')
    this.buildRoutesMap();

    window.addEventListener('popstate', (evt: PopStateEvent) => {
      console.log(evt)
    })

    window.addEventListener('hashchange', (evt: HashChangeEvent) => {
      console.log(evt)
    })

    window.addEventListener('beforeunload', (evt: BeforeUnloadEvent) => {
      console.log(evt)
    })

    // This event is fired when the page is fully loaded
    // load all components based on route
    window.addEventListener('load', (evt: Event) => {
      this.loadComponents((evt.target as Window)?.location?.pathname ?? '');
    })
  }

  buildRoutesMap(): void {
    const routesKeyValues: [string, Route][] = routes?.map(route => [route.path, route]) ?? [];
    this.routesMap = new Map<string, Route>(routesKeyValues);
  }

  loadComponents(currentPathName: string): void {
    // load all components based on route
    // go for O(1) access with exact match on map keys
    let route = this.routesMap.get(currentPathName);
    // otherwise, go for O(n) access with regex match on map keys
    if (!route) {
      for (const [path, _] of this.routesMap) {
        if (new RegExp(path).test(currentPathName)) {
          route = this.routesMap.get(path);
          console.log(`Found route ${path} for ${currentPathName}`);
          break;
        }
      }
    } else {
      console.log(`Found route ${currentPathName}`);
    
    }

    if (route) {
      // load component
      const component = this.redirect(route);
      if (component) {
        this.domHandler.renderOutlet(component);
      } else {
        console.log(`No component found for route ${currentPathName}`)
      }
    }
  }

  redirect(route: Route): Type<any> {
    if (route?.redirectTo) {
      return this.redirect(this.routesMap.get(route.redirectTo) ?? {} as Route);
    }

    return route?.component ?? {} as Type<any>;
  }
}