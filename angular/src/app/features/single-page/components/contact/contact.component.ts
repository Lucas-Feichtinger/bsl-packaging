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
import { MailService } from 'src/app/webservices/email.webservice'
import { EmailIFace } from 'src/app/interfaces'

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
   public showProductSection = false
   private emailService = inject(EmailService)
   private readonly formBuilder = inject(FormBuilder)
   private readonly mailService = inject(MailService)

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
         const formValues: EmailIFace = {
            name: this.FormData.get('name')?.value,
            firm: this.FormData.get('firm')?.value,
            product: this.FormData.get('product')?.value,
            amount: this.FormData.get('amount')?.value,
            road: this.FormData.get('road')?.value,
            plz: this.FormData.get('plz')?.value,
            city: this.FormData.get('city')?.value,
            email: this.FormData.get('email')?.value,
            message: this.FormData.get('message')?.value,
         }

         this.mailService.sendMail(formValues)
      }
   }
}
