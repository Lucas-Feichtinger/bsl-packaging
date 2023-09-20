import {
   AnimationBuilder,
   AnimationPlayer,
   style,
   animate,
} from '@angular/animations'
import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
   standalone: true,
   selector: '[appIntersectionObserver]',
})
export class IntersectionObserverDirective implements OnInit {
   @Input() intersectionClass = 'visible'
   private observer: IntersectionObserver | undefined
   private animationPlayer: AnimationPlayer | undefined

   constructor(
      private el: ElementRef,
      private animationBuilder: AnimationBuilder
   ) {}

   ngOnInit() {
      // Intersection Observer configuration options
      const options = {
         root: null,
         rootMargin: '-50px',
         threshold: 0.5, // Adjust this threshold as needed
      }

      // Create a new Intersection Observer
      this.observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               // Play the fade-in animation
               this.animationPlayer = this.animationBuilder
                  .build([
                     style({ opacity: 0 }),
                     animate('300ms', style({ opacity: 1 })), // Adjust animation duration as needed
                  ])
                  .create(this.el.nativeElement)
               this.animationPlayer.play()
            } else {
               // Play the fade-out animation
               this.animationPlayer = this.animationBuilder
                  .build([
                     style({ opacity: 1 }),
                     animate('300ms', style({ opacity: 0 })), // Adjust animation duration as needed
                  ])
                  .create(this.el.nativeElement)
               this.animationPlayer.play()
            }
         })
      }, options)

      // Start observing the element
      this.observer.observe(this.el.nativeElement)
   }
}
