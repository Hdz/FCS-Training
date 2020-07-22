import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresaisonComponent } from './presaison.component';

describe('PresaisonComponent', () => {
  let component: PresaisonComponent;
  let fixture: ComponentFixture<PresaisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresaisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresaisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
