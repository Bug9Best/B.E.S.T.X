import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingControlComponent } from './streaming-control.component';

describe('StreamingControlComponent', () => {
  let component: StreamingControlComponent;
  let fixture: ComponentFixture<StreamingControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamingControlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
