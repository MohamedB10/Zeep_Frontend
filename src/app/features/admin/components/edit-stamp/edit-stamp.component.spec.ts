import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStampComponent } from './edit-stamp.component';

describe('EditStampComponent', () => {
  let component: EditStampComponent;
  let fixture: ComponentFixture<EditStampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditStampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditStampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
