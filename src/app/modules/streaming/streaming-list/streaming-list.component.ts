import { Component, Input } from '@angular/core';
import contact from '../../../../assets/data/contact.json';

@Component({
  selector: 'streaming-list',
  templateUrl: './streaming-list.component.html',
  styleUrl: './streaming-list.component.scss'
})
export class StreamingListComponent {

  searchValue: string = "";
  listStreaming: any[] = contact;
  selectedStreaming: any;

  @Input() headerLabel: string = "สตรีมมิ่ง";
  @Input() placeholderLabel: string = "ค้นหาสตรีมมิ่ง";
  @Input() labelButton: string = "สร้างหรือเข้าร่วมสตรีมมิ่งด้วยรหัส";


  onSearch() {

  }

  onSelectContact(contact: any) {
    this.selectedStreaming = contact;
  }
}
