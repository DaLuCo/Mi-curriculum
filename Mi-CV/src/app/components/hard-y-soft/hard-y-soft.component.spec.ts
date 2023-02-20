import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYSoftComponent } from './hard-y-soft.component';

describe('HardYSoftComponent', () => {
  let component: HardYSoftComponent;
  let fixture: ComponentFixture<HardYSoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYSoftComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardYSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
