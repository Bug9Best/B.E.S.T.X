import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'forum-control',
  templateUrl: './forum-control.component.html',
  styleUrl: './forum-control.component.scss'
})
export class ForumControlComponent {

  public items: MenuItem[] = this.initMenu();
  searchVisible: boolean = false;
  searchText: string = "";

  private initMenu() {
    return [
      { label: 'หน้าแรก' },
    ];
  }

  @HostListener('document:keydown', ['$event'])
  handleMetaKey(event: KeyboardEvent): void {
    if (event.metaKey && event.code === 'KeyK') {
      this.searchVisible = !this.searchVisible;
    }
  }
}
