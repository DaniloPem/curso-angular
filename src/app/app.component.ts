import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';

 transferencia: any;

  tranferir($event) {
    console.log($event);
    this.transferencia = $event;

  }
}
