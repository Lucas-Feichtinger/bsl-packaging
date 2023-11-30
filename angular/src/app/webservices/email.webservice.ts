import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { EmailIFace } from '../interfaces'

@Injectable({
   providedIn: 'root',
})
export class MailService {
   private apiUrl = environment.apiUrl

   constructor(private http: HttpClient) {}

   sendMail(body: EmailIFace): Observable<any> {
      console.log(body)
      console.log(`${this.apiUrl}/api/sendEmail`)
      const resp = this.http.post(`${this.apiUrl}/api/sendEmail`, body)
      resp.subscribe((resp) => {
         console.log(resp)
      })
      return resp
   }
}
