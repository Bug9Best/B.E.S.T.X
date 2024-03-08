import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ForumService } from '../../../service/forum/forum.service';
import { TabViewService } from '../../../shared/component/layout/tabview.service';

@Component({
  selector: 'forum-list',
  templateUrl: './forum-list.component.html',
  styleUrl: './forum-list.component.scss'
})
export class ForumListComponent {

  isExtra: boolean = false;
  listForum: any[] = [];
  listExtra: any[] = [];

  constructor(
    private router: Router,
    private forumService: ForumService,
    private tabViewService: TabViewService,
  ) {
  }

  ngOnInit(): void {
    this.getForum();
  }

  load() {

  }

  getForum() {
    this.forumService
      .getPost()
      .subscribe((res: any) => {
        if (res.length > 5) {
          this.listExtra = res;
          this.listForum = this.listExtra.slice(0, 5);
          console.log(this.listForum);
          this.isExtra = true;
        }
        else {
          this.listForum = res;
        }
      });
  }

  seeMoreForum() {
    this.isExtra = false;
  }
}
