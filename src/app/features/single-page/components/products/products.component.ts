import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'
import { IntersectionObserverDirective } from '../../../../directives/intersection-observer.directive'
import { LaserLineComponent } from '../../../../components/laser-line'
@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ScrollAnimationDirective,
      IntersectionObserverDirective,
      LaserLineComponent,
      // Directives
   ],
   selector: 'app-products',
   templateUrl: './products.component.html',
   styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {}
