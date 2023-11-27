import { Component, EventEmitter, Input, Output, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollService } from 'src/app/services/scroll.service'

@Component({
   standalone: true,
   imports: [CommonModule, RouterModule],
   selector: 'app-navbar-item',
   templateUrl: './navbar-item.component.html',
   styleUrls: ['./navbar-item.component.scss'],
})
export class NavbarItemComponent {
   public route = inject(ActivatedRoute)
   private scrollService = inject(ScrollService)

   @Input() link = ''
   @Input() iconClass = ''
   @Input() text = ''
   @Output() itemClick = new EventEmitter()

   constructor() {}

   scrollToSection(section: string): void {
      this.scrollService.scrollTo(section)
      this.itemClick.emit(this.text)
   }
}
