import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
   providedIn: 'root',
})
export class ScrollService {
   private sectionToScroll = new Subject<string>()

   sectionToScroll$ = this.sectionToScroll.asObservable()

   scrollTo(section: string): void {
      this.sectionToScroll.next(section)
   }
}
