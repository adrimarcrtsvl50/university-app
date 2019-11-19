import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoryAddComponent } from './laboratory-add.component';

describe('LaboratoryAddComponent', () => {
  let component: LaboratoryAddComponent;
  let fixture: ComponentFixture<LaboratoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboratoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
