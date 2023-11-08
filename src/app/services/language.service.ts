import { Injectable } from '@angular/core'

@Injectable({
   providedIn: 'root',
})
export class LanguageService {
   private currentLanguage = 'de' // Default language

   setLanguage(language: string) {
      this.currentLanguage = language
   }

   getLanguage() {
      return this.currentLanguage
   }
}
