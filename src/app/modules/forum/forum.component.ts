import { Component } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';

@Component({
  selector: 'forum',
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.scss'
})
export class ForumComponent {

  constructor(
    private tabViewService: TabViewService,
  ) { 
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'forum') {
        this.load();
      }
    });
  }

  load() {
    console.log('load forum component');
  }
}
