import { AfterContentInit, Directive, Input } from '@angular/core';
import { TabPanel } from 'primeng/tabview';

@Directive({
  selector: 'p-tabPanel[tagTabPanel]'
})
export class TabViewDirective implements AfterContentInit {

  @Input('tagTabPanel')
  tag: string = 'default';

  constructor(
    private el: TabPanel
  ) {

  }

  ngAfterContentInit(): void {
    (this.el as any).tag = this.tag;
  }

}
