import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./remote-entry/entry.module').then((m) => m.RemoteEntryModule),
  },

  {
    path: 'auth',
    loadChildren: () =>
      import('@shubh-apps/auth').then((m) => m.AuthModule),
  },
];
