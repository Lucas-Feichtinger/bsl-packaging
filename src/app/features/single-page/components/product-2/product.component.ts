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
   selector: 'app-product-two',
   templateUrl: './product.component.html',
   styleUrls: ['./product.component.scss'],
})
export class ProductTwoComponent {}
