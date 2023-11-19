import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'
import { IntersectionObserverDirective } from '../../../../directives/intersection-observer.directive'
import { LaserLineComponent } from '../../../../components/laser-line'
import { TranslateModule } from '@ngx-translate/core'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ScrollAnimationDirective,
      IntersectionObserverDirective,
      LaserLineComponent,
      TranslateModule,
      // Directives
   ],
   selector: 'app-catalog',
   templateUrl: './catalog.component.html',
   styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent {
   openPdfInNewTab() {
      window.open('../../../../../assets/bsl_katalog_2023.pdf', '_blank')
   }
}
