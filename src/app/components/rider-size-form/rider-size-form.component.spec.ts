import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderSizeFormComponent } from './rider-size-form.component';

describe('RiderSizeFormComponent', () => {
  let component: RiderSizeFormComponent;
  let fixture: ComponentFixture<RiderSizeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderSizeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderSizeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
