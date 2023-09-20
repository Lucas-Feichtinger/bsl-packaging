import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ScrollAnimationDirective,
      // Directives
   ],
   selector: 'app-product-one',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss'],
})
export class ProductOneComponent {}
