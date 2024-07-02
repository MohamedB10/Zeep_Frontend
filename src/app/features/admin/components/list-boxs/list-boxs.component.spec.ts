import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoxsComponent } from './list-boxs.component';

describe('ListBoxsComponent', () => {
  let component: ListBoxsComponent;
  let fixture: ComponentFixture<ListBoxsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoxsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBoxsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
