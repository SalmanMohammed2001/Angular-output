import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  value=''

  @Output() childData:EventEmitter<string> = new EventEmitter<string>();

  trigger(){
    this.childData.emit(this.value);
  }

}
