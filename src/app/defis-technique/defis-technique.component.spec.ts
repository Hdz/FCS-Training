import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefisTechniqueComponent } from './defis-technique.component';

describe('DefisTechniqueComponent', () => {
  let component: DefisTechniqueComponent;
  let fixture: ComponentFixture<DefisTechniqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefisTechniqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefisTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
