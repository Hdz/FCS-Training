import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepaPhysiqueComponent } from './prepa-physique.component';

describe('PrepaPhysiqueComponent', () => {
  let component: PrepaPhysiqueComponent;
  let fixture: ComponentFixture<PrepaPhysiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepaPhysiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepaPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
