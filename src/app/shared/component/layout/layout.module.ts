import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimeNGModule } from '../../primeng.module';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CourseModule } from '../../../modules/course/course.module';
import { ChatModule } from '../../../modules/chat/chat.module';
import { ForumModule } from '../../../modules/forum/forum.module';
import { HomeModule } from '../../../modules/home/home.module';
import { PlaygroundModule } from '../../../modules/playground/playground.module';
import { StreamingModule } from '../../../modules/streaming/streaming.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [
    TopBarComponent,
    NavigationBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    SharedModule,
    HomeModule,
    CourseModule,
    ForumModule,
    ChatModule,
    PlaygroundModule,
    StreamingModule,
  ],
  exports: [
    TopBarComponent,
    NavigationBarComponent,
    FooterComponent,
  ]
})
export class LayoutModule { }
