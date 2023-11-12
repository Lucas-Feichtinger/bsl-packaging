// language-switcher.component.ts
import { Component } from '@angular/core'
import { LanguageService } from '../../services/language.service'
import { FormsModule } from '@angular/forms'

@Component({
   selector: 'app-language-switcher',
   templateUrl: './language-switcher.component.html',
   styleUrls: ['./language-switcher.component.scss'],
   standalone: true,
   imports: [FormsModule],
})
export class LanguageSwitcherComponent {
   selectedLanguage: string

   constructor(private languageService: LanguageService) {
      this.selectedLanguage = this.languageService.getLanguage() // Get the current language
   }

   changeLanguage() {
      this.languageService.setLanguage(this.selectedLanguage) // Change the active language
   }
}
