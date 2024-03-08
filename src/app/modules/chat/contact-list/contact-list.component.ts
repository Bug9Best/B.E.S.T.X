import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import contact from '../../../../assets/data/contact.json';

@Component({
  selector: 'chat-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {

  stateSearch: boolean = false;
  searchValue: string = "";

  selectedContact: any;

  @Input()
  headerLabel: string = "การสนทนา";

  @Input()
  placeholderLabel: string = "ค้นหาผู้ติดต่อ";

  listContact: any[] = [];

  getListContact() {
    this.listContact = contact
  }

  onSearch() {
    this.stateSearch = true;
  }

  onEscapeSearch() {
    this.stateSearch = false;
  }

  @Output()
  onSelectedContact: EventEmitter<any> = new EventEmitter<any>();
  onSelectContact(contact: any) {
    this.selectedContact = contact;
    this.onSelectedContact.emit(contact);
  }

}
