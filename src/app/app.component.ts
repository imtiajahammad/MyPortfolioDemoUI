import { Component } from '@angular/core';

/*to make buttons work*/
import {Router} from '@angular/router';
/*to make buttons work*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyPortfolioDemoUI';

/*to make buttons work*/
  constructor(private router:Router){}

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

  /*to make buttons work*/
}

