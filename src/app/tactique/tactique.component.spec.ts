import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TactiqueComponent } from './tactique.component';

describe('TactiqueComponent', () => {
  let component: TactiqueComponent;
  let fixture: ComponentFixture<TactiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TactiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TactiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
