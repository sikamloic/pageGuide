import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillesComponent } from './vanilles.component';

describe('VanillesComponent', () => {
  let component: VanillesComponent;
  let fixture: ComponentFixture<VanillesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanillesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
