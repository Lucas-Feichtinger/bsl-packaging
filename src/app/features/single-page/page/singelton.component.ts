import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ProductOneComponent } from '../components/product-1/product.component'
import { ProductTwoComponent } from '../components/product-2/product.component'
import { IntersectionObserverDirective } from '../../../directives/IntersectionObserverDirective'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ProductOneComponent,
      ProductTwoComponent,
      IntersectionObserverDirective,
      // Directives
   ],
   selector: 'app-singelton',
   templateUrl: './singelton.component.html',
   styleUrls: ['./singelton.component.scss'],
})
export class SingeltonComponent {
   public route = inject(ActivatedRoute)
}
