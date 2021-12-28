import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenegalaiseTwistComponent } from './senegalaise-twist.component';

describe('SenegalaiseTwistComponent', () => {
  let component: SenegalaiseTwistComponent;
  let fixture: ComponentFixture<SenegalaiseTwistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenegalaiseTwistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SenegalaiseTwistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
