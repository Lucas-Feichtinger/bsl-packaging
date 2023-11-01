import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
// Initialization for ES Users
import { Collapse, initTE } from 'tw-elements'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      // Directives
   ],
   selector: 'app-navbar',
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
   public route = inject(ActivatedRoute)

   ngOnInit() {
      initTE({ Collapse })
   }
}
