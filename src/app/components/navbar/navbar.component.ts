import { Component, OnInit, inject } from '@angular/core'
import { ActivatedRoute, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'
// Initialization for ES Users
import { Collapse, initTE } from 'tw-elements'
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component'
import { TranslateModule } from '@ngx-translate/core'
import { NavbarItemComponent } from './navbar-item/navbar-item.component'

@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      LanguageSwitcherComponent,
      TranslateModule,
      NavbarItemComponent,
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
   public navbarState = false

   toggleNavbar() {
      this.navbarState = !this.navbarState
   }
}
