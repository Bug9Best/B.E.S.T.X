import { Component, EventEmitter, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';
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

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  listMenus: any[] = Menu;

  constructor(
    private tabViewService: TabViewService,
  ) {
    this.tabViewService.currentComponent.subscribe((componentName: string) => {
      this.getComponent(componentName);
    });
  }

  getComponent(componentName: string): any {
    switch (componentName) {
      case 'home':
        return HomeComponent;
      case 'profile':
        return ProfileComponent;
      case 'course':
        return CourseComponent;
      case 'calendar':
        return CalendarComponent;
      case 'forum':
        return ForumComponent;
      case 'chat':
        return ChatComponent;
      case 'playground':
        return PlaygroundComponent;
      case 'streaming':
        return StreamingComponent;
      default:
        return NotFoundComponent;
    }
  }

  @ViewChildren(TabPanel) tabPanels?: QueryList<TabPanel>;
  tabChange(index: any) {
    if (!this.tabPanels) return;
    let tabPanel = this.tabPanels.get(index) as any;
    let tag = tabPanel.tag;
    this.tabViewService.setCurrentComponent(tag);
  }
}
