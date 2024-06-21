import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomStampComponent } from './custom-stamp.component';

describe('CustomStampComponent', () => {
  let component: CustomStampComponent;
  let fixture: ComponentFixture<CustomStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomStampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
