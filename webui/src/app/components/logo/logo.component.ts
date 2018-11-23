import { Component, Input } from '@angular/core';
@Component({
	selector: 's-logo',
	templateUrl: './logo.component.html'
})

export class LogoComponent{
  @Input() fontColor = "#69999A";
  @Input() public iconColor: string = "#E3002B";
}
