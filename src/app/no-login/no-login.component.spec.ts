import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLoginComponent } from './no-login.component';

describe('NoLoginComponent', () => {
  let component: NoLoginComponent;
  let fixture: ComponentFixture<NoLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
