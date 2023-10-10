import { Component, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'
import { IntersectionObserverDirective } from '../../../../directives/intersection-observer.directive'
import { LaserLineComponent } from '../../../../components/laser-line'
import { AnimationBuilder, animate, style } from '@angular/animations'

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
   selector: 'app-product-one',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss'],
})
export class ProductOneComponent {
   private animationBuilder = inject(AnimationBuilder)

   public animationIn = this.animationBuilder.build([
      style({ opacity: 0, transform: 'translateX(-20%)' }),
      animate('300ms', style({ opacity: 1, transform: 'translateX(0%)' })),
   ])

   public animationOut = this.animationBuilder.build([
      style({ opacity: 1, transform: 'translateX(0%)' }),
      animate('300ms', style({ opacity: 0, transform: 'translateX(-20%)' })),
   ])
}
