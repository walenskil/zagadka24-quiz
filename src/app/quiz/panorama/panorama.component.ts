import { AfterViewInit, Component, ElementRef, OnInit, VERSION, ViewChild } from '@angular/core';
import { EquirectProjection, View360Options } from '@egjs/ngx-view360';

@Component({
  selector: 'app-panorama',
  templateUrl: './panorama.component.html',
  styleUrls: ['./panorama.component.scss']
})
export class PanoramaComponent {

   options: Partial<View360Options> = {
    projection: new EquirectProjection({
      src: "../../../assets/pigpen.jpg",
    })
  }
}
