import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMessageComponent } from './content-message.component';

describe('ContentMessageComponent', () => {
  let component: ContentMessageComponent;
  let fixture: ComponentFixture<ContentMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContentMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
