import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'childToParent';

  superMessage='';
  show(data:string){
    this.superMessage=data;
  }
}
