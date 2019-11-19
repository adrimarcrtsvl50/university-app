import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryEditComponent } from './laboratory-edit.component';

describe('LaboratoryEditComponent', () => {
  let component: LaboratoryEditComponent;
  let fixture: ComponentFixture<LaboratoryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
