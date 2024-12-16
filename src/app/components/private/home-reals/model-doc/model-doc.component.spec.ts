import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelDocComponent } from './model-doc.component';

describe('ModelDocComponent', () => {
  let component: ModelDocComponent;
  let fixture: ComponentFixture<ModelDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelDocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
