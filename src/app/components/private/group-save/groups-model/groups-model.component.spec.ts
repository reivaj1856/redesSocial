import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsModelComponent } from './groups-model.component';

describe('GroupsModelComponent', () => {
  let component: GroupsModelComponent;
  let fixture: ComponentFixture<GroupsModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GroupsModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroupsModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
