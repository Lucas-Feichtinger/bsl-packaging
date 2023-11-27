import { Route } from '@angular/router'
import { LayoutComponent } from './components/layout/layout.component'

export const appRoutes: Route[] = [
   {
      path: '',
      component: LayoutComponent,
      children: [
         {
            path: '',
            loadComponent: () =>
               import('./features/single-page').then(
                  (m) => m.SingeltonComponent
               ),
         },
      ],
   },
]
