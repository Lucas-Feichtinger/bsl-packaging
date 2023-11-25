import { Component, OnInit, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollAnimationDirective } from '../../../../directives/scroll-animation.directive'
import { IntersectionObserverDirective } from '../../../../directives/intersection-observer.directive'
import { LaserLineComponent } from '../../../../components/laser-line'
import { FormGroup, ReactiveFormsModule, FormBuilder } from '@angular/forms'
import { initTE } from 'tw-elements'
import { EmailService } from 'src/app/services/email.service'
import { TranslateModule } from '@ngx-translate/core'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ScrollAnimationDirective,
      IntersectionObserverDirective,
      LaserLineComponent,
      ReactiveFormsModule,
      TranslateModule,
   ],
   selector: 'app-contact',
   templateUrl: './contact.component.html',
   styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
   public FormData!: FormGroup
   public showProductSection: boolean = false
   private emailService = inject(EmailService)
   private readonly formBuilder = inject(FormBuilder)

   ngOnInit(): void {
      this.buildForm()
      initTE({})
   }

   private buildForm(): void {
      this.FormData = this.formBuilder.group({
         name: this.formBuilder.control(null),
         firm: this.formBuilder.control(null),
         product: this.formBuilder.control(null),
         amount: this.formBuilder.control(null),
         road: this.formBuilder.control(null),
         plz: this.formBuilder.control(null),
         city: this.formBuilder.control(null),
         email: this.formBuilder.control(null),
         message: this.formBuilder.control(null),
      })
   }

   sendEmail() {
      if (this.FormData.valid) {
         this.emailService.sendEmail(this.FormData).subscribe(
            () => {
               // Email sent successfully, you can handle the success here
               console.log('Email sent!')
               // Optionally, you can reset the form after sending the email
               this.FormData.reset()
            },
            (error) => {
               // Handle error if the email fails to send
               console.error('Error sending email:', error)
            }
         )
      }
   }
}
