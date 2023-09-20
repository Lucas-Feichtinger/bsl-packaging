import { Component, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { NavbarComponent } from '../navbar/navbar.component'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      NavbarComponent,
      // Directives
   ],
   selector: 'app-layout',
   templateUrl: './layout.component.html',
   styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
   public route = inject(ActivatedRoute)
}
