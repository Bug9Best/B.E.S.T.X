import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumControlComponent } from './forum-control.component';

describe('ForumControlComponent', () => {
  let component: ForumControlComponent;
  let fixture: ComponentFixture<ForumControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
