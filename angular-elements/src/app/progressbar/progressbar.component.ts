import {
  Component,
  OnChanges,
  Input,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnChanges {
  @Input() complete = 0;
  @ViewChild('progressBarInner', {static: false}) progressBarInner: ElementRef;

  constructor() { }

  ngOnChanges() {
    if (this.progressBarInner) {
      this.progressBarInner.nativeElement.style.width = `${this.complete}%`;
    }
  }

}
