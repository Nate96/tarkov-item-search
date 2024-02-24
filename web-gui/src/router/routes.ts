import { SuppressorsComponent } from "../app/suppressors/suppressors.component.ts";

export interface Route {
  path: string;
  component?: Type<any>;
  exact?: boolean;
  redirectTo?: string;
}

export const routes = [
  {
    path: '/',
    exact: true,
    redirectTo: '/suppressors',
  },
  {
    path: '/suppressors',
    component: SuppressorsComponent,
    exact: true,
  },
];