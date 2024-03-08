import { Component, HostListener } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'course-control',
  templateUrl: './course-control.component.html',
  styleUrl: './course-control.component.scss'
})
export class CourseControlComponent {

  public items: MenuItem[] = this.initMenu();
  searchVisible: boolean = false;
  searchText: string = "";

  private initMenu() {
    return [
      { label: 'หน้าแรก' },
    ];
  }

  public setMenu(menu: MenuItem[]) {
    this.items = menu;
  }

  @HostListener('document:keydown', ['$event'])
  handleMetaKey(event: KeyboardEvent): void {
    if (event.metaKey && event.code === 'KeyK') {
      this.searchVisible = !this.searchVisible;
    }
  }
}
