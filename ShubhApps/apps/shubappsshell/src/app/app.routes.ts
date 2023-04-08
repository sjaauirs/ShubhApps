import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'portfolio',
    loadChildren: () =>
      import('portfolio/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'customer-portal',
    loadChildren: () =>
      import('customer-portal/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
