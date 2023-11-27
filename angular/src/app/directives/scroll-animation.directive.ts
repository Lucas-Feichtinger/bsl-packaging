import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core'

@Directive({
   standalone: true,
   selector: '[appScrollAnimation]',
})
export class ScrollAnimationDirective {
   private delay = ''
   private animationDuration = 1 // Specify your animation duration here (in seconds)

   @HostListener('window:scroll', [])
   scroll(): void {
      const rect = this.el.nativeElement.getBoundingClientRect()
      const scroll = this.calculateScrollPercentage(rect)
      this.delay = `-${scroll.toFixed(2)}s`
   }

   @HostBinding('style.animationDelay')
   get animationDelay(): string {
      return this.delay
   }

   constructor(private el: ElementRef<HTMLElement>) {}

   private calculateScrollPercentage(rect: DOMRect): number {
      const windowHeight = window.innerHeight
      const elementCenter = rect.top + rect.height / 2
      const scrollPercentage = this.mapRange(
         windowHeight / 1.3,
         windowHeight,
         0,
         1,
         elementCenter
      )
      return Math.min(1, Math.max(0, scrollPercentage)) // Ensure the value is between 0 and 1
   }

   private mapRange(
      a1: number,
      a2: number,
      b1: number,
      b2: number,
      value: number
   ): number {
      return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1)
   }
}
