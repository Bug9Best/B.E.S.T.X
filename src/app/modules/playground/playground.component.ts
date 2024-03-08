import { Component } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';

@Component({
  selector: 'playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {

  constructor(
    private tabViewService: TabViewService,
  ) { 
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'playground') {
        this.load();
      }
    });
  }

  load() {
    console.log('load playground component');
  }

}
