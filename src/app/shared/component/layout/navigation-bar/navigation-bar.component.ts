import { Component, EventEmitter, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Menu } from '../../../../config/menu';
import { TabPanel } from 'primeng/tabview';
import { HomeComponent } from '../../../../modules/home/home.component';
import { CourseComponent } from '../../../../modules/course/course.component';
import { ForumComponent } from '../../../../modules/forum/forum.component';
import { ChatComponent } from '../../../../modules/chat/chat.component';
import { PlaygroundComponent } from '../../../../modules/playground/playground.component';
import { StreamingComponent } from '../../../../modules/streaming/streaming.component';
import { NotFoundComponent } from '../../not-found/not-found.component';
import { TabViewService } from '../tabview.service';
import { CalendarComponent } from '../../../../modules/calendar/calendar.component';
import { ProfileComponent } from '../../../../modules/profile/profile.component';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent implements OnInit {

  listMenus: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  constructor(
    private router: Router,
    private tabViewService: TabViewService,
  ) {
    this.tabViewService.currentComponent
      .subscribe((componentName: string) => {
        this.router.navigate(['/', componentName]);
        this.activeItem = this.listMenus?.find((menu: any) => menu.component === componentName);
      });
  }

  ngOnInit(): void {
    this.listMenus = Menu
    this.router.navigate(['/home']);
    this.activeItem = this.listMenus[0];
  }

  onChaneTab(menu: any) {
    this.tabViewService.setCurrentComponent(menu.component);
  }
}
