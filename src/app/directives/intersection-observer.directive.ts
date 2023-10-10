import { AnimationFactory } from '@angular/animations'
import { Directive, ElementRef, Input, OnInit, inject } from '@angular/core'

@Directive({
   standalone: true,
   selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
   private el = inject(ElementRef)
   // Possible input 'Top, Right, Bottom, Left' margin
   @Input() rootMargin = '0px'

   @Input() AnimationIn: AnimationFactory | undefined = undefined
   @Input() AnimationOut: AnimationFactory | undefined = undefined

   private observer: IntersectionObserver | undefined

   ngOnInit() {
      // Intersection Observer configuration options
      const options = {
         root: null,
         rootMargin: this.rootMargin,
         threshold: 0.5, // Adjust this threshold as needed
      }

      // Create a new Intersection Observer
      this.observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // Play the fade-in animation
               const animationPlayer = this.AnimationIn?.create(
                  this.el.nativeElement
               )

               animationPlayer?.play()
            } else {
               // Play the fade-in animation
               const animationPlayer = this.AnimationOut?.create(
                  this.el.nativeElement
               )

               animationPlayer?.play()
            }
         })
      }, options)

      // Start observing the element
      this.observer.observe(this.el.nativeElement)
   }
}
