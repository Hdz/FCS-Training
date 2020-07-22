import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttaquesComponent } from './attaques.component';

describe('AttaquesComponent', () => {
  let component: AttaquesComponent;
  let fixture: ComponentFixture<AttaquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttaquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttaquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
