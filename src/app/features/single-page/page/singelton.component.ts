import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ProductOneComponent } from '../components/product-1/product.component'
import { ProductTwoComponent } from '../components/product-2/product.component'
import { IntersectionObserverDirective } from '../../../directives/intersection-observer.directive'
import { NavbarComponent } from '../../../components/navbar/navbar.component'
import { ContactComponent } from '../components'
import { ProductsComponent } from '../components/products/products.component'
import { TranslateModule } from '@ngx-translate/core'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ProductOneComponent,
      ProductTwoComponent,
      IntersectionObserverDirective,
      NavbarComponent,
      ContactComponent,
      ProductsComponent,
      TranslateModule,
      // Directives
   ],
   selector: 'app-singelton',
   templateUrl: './singelton.component.html',
   styleUrls: ['./singelton.component.scss'],
})
export class SingeltonComponent {
   public route = inject(ActivatedRoute)
}