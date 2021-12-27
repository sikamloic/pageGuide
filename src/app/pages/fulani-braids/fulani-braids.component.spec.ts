import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulaniBraidsComponent } from './fulani-braids.component';

describe('FulaniBraidsComponent', () => {
  let component: FulaniBraidsComponent;
  let fixture: ComponentFixture<FulaniBraidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulaniBraidsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulaniBraidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
