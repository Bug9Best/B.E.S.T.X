import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'chat-content-message',
  templateUrl: './content-message.component.html',
  styleUrl: './content-message.component.scss'
})
export class ContentMessageComponent {

  contact: any;
  isOpened = false;
  message: string = "";
  items: MenuItem[] = [
    {
      items: [
        {
          label: 'ดูโปรไฟล์',
          icon: 'pi pi-user',
          command: () => {
          }
        },
        {
          separator: true,
        },
        {
          label: 'ลบการสนทนา',
          icon: 'pi pi-trash',
          command: () => {
          }
        },
        {
          label: 'รายงาน',
          icon: 'pi pi-info-circle',
          command: () => {
          }
        },
      ]
    },
  ];

  @ViewChild("container")
  container: ElementRef<HTMLElement> | undefined;

  constructor() {
  }

  setContact(contact: any) {
    this.contact = contact;
  }

  emojiSelected(event: any) {
    this.message += event.emoji.native;
  }

  toggled() {
    if (!this.container) return;
    this.isOpened = !this.isOpened;
  }

  detectKeys(event: any) {
    if (event.keyCode == 13) {
      event.preventDefault();
      this.messageSent();
    }
  }

  messageSent() {
    console.log(this.message);
  }
}
