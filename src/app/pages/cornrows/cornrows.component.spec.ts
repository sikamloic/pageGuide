import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornrowsComponent } from './cornrows.component';

describe('CornrowsComponent', () => {
  let component: CornrowsComponent;
  let fixture: ComponentFixture<CornrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornrowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
