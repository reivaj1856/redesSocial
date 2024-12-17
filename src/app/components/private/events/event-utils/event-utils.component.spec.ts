import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUtilsComponent } from './event-utils.component';

describe('EventUtilsComponent', () => {
  let component: EventUtilsComponent;
  let fixture: ComponentFixture<EventUtilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventUtilsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
