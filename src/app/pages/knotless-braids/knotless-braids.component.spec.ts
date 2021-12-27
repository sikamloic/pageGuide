import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnotlessBraidsComponent } from './knotless-braids.component';

describe('KnotlessBraidsComponent', () => {
  let component: KnotlessBraidsComponent;
  let fixture: ComponentFixture<KnotlessBraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnotlessBraidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnotlessBraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
