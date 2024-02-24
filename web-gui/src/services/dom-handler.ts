import { Component } from "../app/base/base.component.ts";
import { Singleton } from "../core/singleton.ts";

export class DomHandler extends Singleton {
  outlet: HTMLElement;
  componentPrefix = 'app-';

  protected constructor() {
    super();

    this.outlet = document.querySelector('.outlet') as HTMLElement;
  }

  async renderOutlet(componentType: Type<any>) {
    const component = this.createComponent(componentType);

    // initialize the component
    const {htmlString, cssFileUrl} = await component.init();

    // inject css file
    if (cssFileUrl) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = cssFileUrl;

      document.head.appendChild(link);
    }

    // setup component div
    if (htmlString) {
      this.outlet.innerHTML = '';
      const div = document.createElement('div');
      const className = this.getComponentName(component);
      div.classList.add(className);
      div.innerHTML = htmlString;
      this.outlet.appendChild(div);

      // render the component
      await component.render();
    }
  }

  private getComponentName = (component: Component): string => {
    // get component name
    const componentName = component.constructor.name;

    // Split the class name based on uppercase letters
    var tokens = componentName.split(/(?=[A-Z])/);
    
    // Remove the last token (suffix)
    tokens.pop();
    
    // Join the tokens back together
    return this.componentPrefix + tokens.join('-').toLowerCase();
  }

  createComponent(component: Type<any>): Component {
    // need to get the args for the constructor

    // then get all of the dependencies from the service registry
    

    return new component();
  }
}