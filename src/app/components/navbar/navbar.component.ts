import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

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
export class NavbarComponent {
   public route = inject(ActivatedRoute)
}
