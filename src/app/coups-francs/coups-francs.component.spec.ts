import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupsFrancsComponent } from './coups-francs.component';

describe('CoupsFrancsComponent', () => {
  let component: CoupsFrancsComponent;
  let fixture: ComponentFixture<CoupsFrancsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupsFrancsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupsFrancsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
