import {Component} from '@angular/core';

@Component({
  selector: 'gs-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class GsHeader {
  public showNavModal = false;

  public toggleNavModal(): void {
    this.showNavModal = !this.showNavModal;
  }
}
