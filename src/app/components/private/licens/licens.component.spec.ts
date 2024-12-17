import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensComponent } from './licens.component';

describe('LicensComponent', () => {
  let component: LicensComponent;
  let fixture: ComponentFixture<LicensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LicensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LicensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
