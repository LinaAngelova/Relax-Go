import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RElax-Go';
  
  


  evidenziato=false;
  onEvidenziazione(){
  
    this.evidenziato=!this.evidenziato;
  }
  
  }
  
