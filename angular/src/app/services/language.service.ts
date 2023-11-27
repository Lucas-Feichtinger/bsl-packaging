import { Injectable, inject } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Injectable({
   providedIn: 'root',
})
export class LanguageService {
   private translateSer = inject(TranslateService)
   private currentLanguage = 'de' // Default language

   setLanguage(language: string) {
      this.currentLanguage = language
      console.log(language)
      this.translateSer.use(language)
   }

   getLanguage() {
      return this.currentLanguage
   }
}
