import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
   standalone: true,
   imports: [CommonModule, TranslateModule],
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
