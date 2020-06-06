import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent
{
  @ViewChild('parentcontainer') parentcontainer: any;
  @ViewChild('subcontent') subContent: any;
@ViewChild('inputf') inputf: any;
  name = 'Angular 5';

  public changeMainContent()
  {
    console.log("changeMainContent");
    this.inputf.nativeElement.setAttribute("id", "redyellow");
  }

  public changeSubContent()
  {
    console.log("changeSubContent");
    this.subContent.nativeElement.setAttribute("style", "color:green");
  }
}
