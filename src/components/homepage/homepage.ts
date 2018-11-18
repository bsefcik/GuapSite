import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppStateService} from '../../services/app-state.service';

@Component({
  selector: 'gs-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class GsHomePage {
  public showEntrance = true;
  constructor(appStateService: AppStateService) {}

  clickPlayButton() {
    this.showEntrance = false;
  }
}
