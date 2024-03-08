import { Component, ViewChild } from '@angular/core';
import { PrimeNGModule } from '../../shared/primeng.module';
import { LayoutModule } from '../../shared/component/layout/layout.module';
import { HomeModule } from '../home/home.module';
import { ChatComponent } from '../chat/chat.component';
import { CourseComponent } from '../course/course.component';
import { ForumComponent } from '../forum/forum.component';
import { HomeComponent } from '../home/home.component';
import { PlaygroundComponent } from '../playground/playground.component';
import { StreamingComponent } from '../streaming/streaming.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-layout',
  standalone: true,
  imports: [
    PrimeNGModule,
    LayoutModule,
    HomeModule
  ],
  templateUrl: './app-layout.component.html',
  styleUrl: './app-layout.component.scss'
})
export class AppLayoutComponent {

  component: any;
  constructor(
    private router: Router,
  ) { }

  tabChange(component: any) {
    this.component = component;
    switch (component) {
      case 'home':
        return;
      case 'course':
        return;
      case 'forum':
        return ForumComponent;
      case 'chat':
        return ChatComponent;
      case 'playground':
        return PlaygroundComponent;
      case 'streaming':
        return StreamingComponent;
      default:
        return "";
    }
  }
}
