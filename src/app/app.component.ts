import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPwaTest';

  //boolean property for update -- default false
  update: boolean = false;
  quote: any;


  //constructor that creates instance of SwUpdate
  constructor(updates: SwUpdate, private data: DataService) {
    //if updated is available we will subscribe via event.
    updates.available.subscribe(event => {
      
      //if there is an update property gets changed to true.
      // this.update = true;
      updates.activateUpdate().then(() => {
       document.location.reload() 
      })
    })
  }

  ngOnInit() {
    this.data.getTheQuote().subscribe(res => {
      this.quote = res;
    })
  }
}
