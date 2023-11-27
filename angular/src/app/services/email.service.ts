import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms'

@Injectable({
   providedIn: 'root',
})
export class EmailService {
   private readonly emailEndpoint = 'YOUR_EMAIL_ENDPOINT'

   constructor(private http: HttpClient) {}

   sendEmail(formData: FormGroup) {
      const emailData = {
         name: formData.get('name')?.value,
         firm: formData.get('firm')?.value,
         product: formData.get('product')?.value,
         amount: formData.get('amount')?.value,
         road: formData.get('road')?.value,
         plz: formData.get('plz')?.value,
         city: formData.get('city')?.value,
         email: formData.get('email')?.value,
         message: formData.get('message')?.value,
      }

      return this.http.post(this.emailEndpoint, emailData)
   }
}
