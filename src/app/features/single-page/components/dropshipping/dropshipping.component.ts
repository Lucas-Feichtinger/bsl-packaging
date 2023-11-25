import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { TranslateModule } from '@ngx-translate/core'

@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, TranslateModule],
   selector: 'app-dropshipping',
   templateUrl: './dropshipping.component.html',
   styleUrls: ['./dropshipping.component.scss'],
})
export class DropshippingComponent {}
