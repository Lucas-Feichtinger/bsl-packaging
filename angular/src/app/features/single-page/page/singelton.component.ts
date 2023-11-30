import {
   AfterViewInit,
   Component,
   afterRender,
   inject,
   signal,
} from '@angular/core'
import { trigger, state, style, animate, transition } from '@angular/animations'

import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { CatalogComponent } from '../components/catalog/catalog.component'
import { DropshippingComponent } from '../components/dropshipping/dropshipping.component'
import { IntersectionObserverDirective } from '../../../directives/intersection-observer.directive'
import { NavbarComponent } from '../../../components/navbar/navbar.component'
import { ContactComponent } from '../components'
import { ProductsComponent } from '../components/products/products.component'
import { TranslateModule } from '@ngx-translate/core'
import { ScrollService } from 'src/app/services/scroll.service'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      CatalogComponent,
      DropshippingComponent,
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
   animations: [
      trigger('fillBackground', [
         state(
            'initial',
            style({
               backgroundPosition: 'right',
            })
         ),
         state(
            'final',
            style({
               backgroundPosition: 'left',
            })
         ),
         transition(
            'initial => final',
            animate('1s cubic-bezier(0.42, 0, 0.58, 1)')
         ),
      ]),
   ],
})
export class SingeltonComponent implements AfterViewInit {
   public route = inject(ActivatedRoute)
   private scrollService = inject(ScrollService)

   private $scrollSubscription = this.scrollService.sectionToScroll$
      .pipe(takeUntilDestroyed())
      .subscribe((section) => {
         // Perform scrolling logic based on the received section identifier
         const sectionElement = document.getElementById(section)

         if (sectionElement) {
            sectionElement.scrollIntoView({
               behavior: 'smooth',
               block: 'start',
            })
         }
      })

   scrollToSection(): void {
      this.scrollService.scrollTo('contactSection')
   }

   public didLoad = signal('initial') // Ensure it's a string value indicating the initial state

   // ... rest of your component code

   ngAfterViewInit() {
      // Optionally, change the state after a delay
      setTimeout(() => {
         this.didLoad.set('final')
      }, 800) // Adjust the time as needed
   }
}
