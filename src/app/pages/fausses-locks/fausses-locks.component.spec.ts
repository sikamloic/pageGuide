import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaussesLocksComponent } from './fausses-locks.component';

describe('FaussesLocksComponent', () => {
  let component: FaussesLocksComponent;
  let fixture: ComponentFixture<FaussesLocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaussesLocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaussesLocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
