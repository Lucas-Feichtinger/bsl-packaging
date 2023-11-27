// language-switcher.component.ts
import { Component, effect, inject, signal } from '@angular/core'
import { LanguageService } from '../../services/language.service'
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

@Component({
   selector: 'app-language-switcher',
   templateUrl: './language-switcher.component.html',
   styleUrls: ['./language-switcher.component.scss'],
   standalone: true,
   imports: [FormsModule, CommonModule],
})
export class LanguageSwitcherComponent {
   private languageService = inject(LanguageService)

   selectedLanguage = 'de'
   checkbox = signal(false)

   constructor() {
      this.selectedLanguage = this.languageService.getLanguage() // Get the current language

      effect(() => {
         if (this.checkbox()) {
            this.selectedLanguage = 'en'
         } else {
            this.selectedLanguage = 'de'
         }
         this.languageService.setLanguage(this.selectedLanguage) // Change the active language
      })
   }
}
