import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrochetsBraidsComponent } from './crochets-braids.component';

describe('CrochetsBraidsComponent', () => {
  let component: CrochetsBraidsComponent;
  let fixture: ComponentFixture<CrochetsBraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrochetsBraidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrochetsBraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
