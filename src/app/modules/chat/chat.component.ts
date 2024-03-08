import { Component, ViewChild } from '@angular/core';
import { TabViewService } from '../../shared/component/layout/tabview.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContentMessageComponent } from './content-message/content-message.component';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  contact: any;

  constructor(
    private tabViewService: TabViewService,
  ) {
    this.tabViewService.currentComponent.subscribe(component => {
      if (component == 'chat') {
        this.load();
      }
    });
  }

  @ViewChild(ContactListComponent)
  contactListComponent?: ContactListComponent;
  load() {
    this.contactListComponent?.getListContact();
  }

  @ViewChild(ContentMessageComponent)
  contentMessageComponent?: ContentMessageComponent;
  setContact(contact: any) {
    this.contentMessageComponent?.setContact(contact);
  }
}
