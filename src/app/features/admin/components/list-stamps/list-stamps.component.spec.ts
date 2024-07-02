import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStampsComponent } from './list-stamps.component';

describe('ListStampsComponent', () => {
  let component: ListStampsComponent;
  let fixture: ComponentFixture<ListStampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStampsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
