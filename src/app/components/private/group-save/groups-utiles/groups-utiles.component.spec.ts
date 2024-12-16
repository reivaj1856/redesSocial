import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsUtilesComponent } from './groups-utiles.component';

describe('GroupsUtilesComponent', () => {
  let component: GroupsUtilesComponent;
  let fixture: ComponentFixture<GroupsUtilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsUtilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsUtilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
