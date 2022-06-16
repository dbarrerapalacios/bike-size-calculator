import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeSizeComponent } from './bike-size.component';

describe('BikeSizeComponent', () => {
  let component: BikeSizeComponent;
  let fixture: ComponentFixture<BikeSizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeSizeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
