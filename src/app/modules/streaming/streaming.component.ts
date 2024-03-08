import { Component } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';

@Component({
  selector: 'streaming',
  templateUrl: './streaming.component.html',
  styleUrl: './streaming.component.scss'
})
export class StreamingComponent {

  constructor(
    private tabViewService: TabViewService,
  ) {
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'streaming') {
        this.load();
      }
    });
  }

  load() {
    console.log('load streaming component');
  }
}
