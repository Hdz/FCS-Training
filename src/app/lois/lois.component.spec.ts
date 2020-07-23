import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisComponent } from './lois.component';

describe('LoisComponent', () => {
  let component: LoisComponent;
  let fixture: ComponentFixture<LoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
