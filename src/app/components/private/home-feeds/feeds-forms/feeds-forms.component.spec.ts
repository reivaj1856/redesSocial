import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedsFormsComponent } from './feeds-forms.component';

describe('FeedsFormsComponent', () => {
  let component: FeedsFormsComponent;
  let fixture: ComponentFixture<FeedsFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedsFormsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedsFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
