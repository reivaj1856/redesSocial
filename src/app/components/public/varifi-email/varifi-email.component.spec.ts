import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarifiEmailComponent } from './varifi-email.component';

describe('VarifiEmailComponent', () => {
  let component: VarifiEmailComponent;
  let fixture: ComponentFixture<VarifiEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VarifiEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VarifiEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
