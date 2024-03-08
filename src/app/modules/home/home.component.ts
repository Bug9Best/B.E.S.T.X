import { Component } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private tabViewService: TabViewService,
  ) { 
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'home') {
        this.load();
      }
    });
  }

  load() {
    console.log('load home component');
  }
}
