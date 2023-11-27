import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      // Directives
   ],
   selector: 'app-footer',
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {}
