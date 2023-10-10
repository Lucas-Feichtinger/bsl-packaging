import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
   selector: 'app-laser-line',
   templateUrl: './laser-line.component.html',
   styleUrls: ['./laser-line.component.scss'],
   standalone: true,
   imports: [CommonModule],
})
export class LaserLineComponent {
   // margin: 'top, right, bottom, left'
   @Input() position = '33% 0px 0px 35%'

   @Input()
   content = `The point of using Lorem Ipsum is that it has a more-or-less normal
   distribution of letters, as opposed to using 'Content here, content
   here', making it look like readable English.`
}
