import { Component, OnInit, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'
import { IntersectionObserverDirective } from '../../../../directives/intersection-observer.directive'
import { LaserLineComponent } from '../../../../components/laser-line'
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms'
import { Carousel, Dropdown, initTE } from 'tw-elements'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ScrollAnimationDirective,
      IntersectionObserverDirective,
      LaserLineComponent,
      ReactiveFormsModule,
   ],
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
   FormData!: FormGroup

   private readonly formBuilder = inject(FormBuilder)

   ngOnInit(): void {
      this.buildForm()
      initTE({})
   }

   send(): void {
      const { name, email, message } = this.FormData.value
      // alert(`Name: ${name}, Email: ${email}, Message: ${message} `)
   }

   private buildForm(): void {
      this.FormData = this.formBuilder.group({
         name: this.formBuilder.control(null),
         email: this.formBuilder.control(null),
         message: this.formBuilder.control(null),
      })
   }
}
