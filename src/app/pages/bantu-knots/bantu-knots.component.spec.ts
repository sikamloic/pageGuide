import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BantuKnotsComponent } from './bantu-knots.component';

describe('BantuKnotsComponent', () => {
  let component: BantuKnotsComponent;
  let fixture: ComponentFixture<BantuKnotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BantuKnotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BantuKnotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
