import { Injectable } from '@angular/core'
import { environment } from '../environments/environment'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

@Injectable({
   providedIn: 'root',
})
export class MailService {
   private apiUrl = environment.apiUrl

   constructor(private http: HttpClient) {}

   sendMail(body: any): Observable<any[]> {
      return this.http.post<any[]>(`${this.apiUrl}/mail`, body)
   }
}
