import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingContentComponent } from './streaming-content.component';

describe('StreamingContentComponent', () => {
  let component: StreamingContentComponent;
  let fixture: ComponentFixture<StreamingContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
