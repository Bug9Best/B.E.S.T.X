import { Component, ViewChild } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';
import { Router } from '@angular/router';
import { TabView } from 'primeng/tabview';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    private router: Router,
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

  @ViewChild('tabView') tabView : TabView;
  goCourse() {
    console.log(this.tabView)
    this.router.navigate(['/course']);
    this.tabViewService.setCurrentComponent('course');
  }
}
