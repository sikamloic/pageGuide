import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TressesAfricainesComponent } from './tresses-africaines.component';

describe('TressesAfricainesComponent', () => {
  let component: TressesAfricainesComponent;
  let fixture: ComponentFixture<TressesAfricainesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TressesAfricainesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TressesAfricainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
