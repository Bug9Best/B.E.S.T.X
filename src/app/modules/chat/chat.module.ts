import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';
import { PrimeNGModule } from '../../shared/primeng.module';
import { ChatComponent } from './chat.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContentMessageComponent } from './content-message/content-message.component';
import { ContactListSearchComponent } from './contact-list-search/contact-list-search.component';
import { PickerComponent } from '@ctrl/ngx-emoji-mart';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  },
];

@NgModule({
  declarations: [
    ChatComponent,
    ContactListComponent,
    ContactListSearchComponent,
    ContentMessageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PrimeNGModule,
    SharedModule,
    PickerComponent,
    RouterModule.forChild(routes),
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }
