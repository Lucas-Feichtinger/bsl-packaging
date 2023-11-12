import { Component, Input, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

@Component({
   standalone: true,
   imports: [CommonModule, RouterModule],
   selector: 'app-navbar-item',
   templateUrl: './navbar-item.component.html',
   styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent {
   public route = inject(ActivatedRoute)

   @Input() link = ''
   @Input() iconClass = ''
   @Input() text = ''
}
