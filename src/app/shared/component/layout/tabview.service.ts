import { Injectable, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TabViewService {

  private componentSource = new BehaviorSubject('default');
  currentComponent = this.componentSource.asObservable();

  constructor() { }

  setCurrentComponent(component: string) {
    this.componentSource.next(component)
  }
}