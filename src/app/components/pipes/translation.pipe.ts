// translation.pipe.ts
import { Pipe, PipeTransform } from '@angular/core'
import { LanguageService } from '../../services/language.service'
import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core'

@Pipe({
   name: 'translate',
})
export class TranslationPipe implements PipeTransform {
   private http = inject(HttpClient)
   private languageService = inject(LanguageService)

   transform(key: string): string {
      const currentLanguage = this.languageService.getLanguage() // Get the current language
      // Load the translation for the current language and key from your translation files
      // You'll need to implement your translation loading logic here.
      // For simplicity, we'll return the key itself if a translation is not found.
      const translation = this.getTranslation(currentLanguage, key) || key
      return translation
   }

   private getTranslation(language: string, key: string): string {
      // Implement your logic to retrieve translations based on language and key.
      // This can involve loading translations from files or a service.
      // For simplicity, we'll use a hard-coded object for this example.
      const translations: { [key: string]: { [language: string]: string } } =
         this.http.get('../../locale/language.json')

      return translations[key] ? translations[key][language] : key
   }
}
