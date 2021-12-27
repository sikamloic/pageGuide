import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LemonadeBraidsComponent } from './lemonade-braids.component';

describe('LemonadeBraidsComponent', () => {
  let component: LemonadeBraidsComponent;
  let fixture: ComponentFixture<LemonadeBraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LemonadeBraidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LemonadeBraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
