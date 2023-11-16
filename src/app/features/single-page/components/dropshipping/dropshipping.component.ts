import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      // Directives
   ],
   selector: 'app-dropshipping',
   templateUrl: './dropshipping.component.html',
   styleUrls: ['./dropshipping.component.scss'],
})
export class DropshippingComponent {}
