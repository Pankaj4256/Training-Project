import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookspdfComponent } from './bookspdf.component';

describe('BookspdfComponent', () => {
  let component: BookspdfComponent;
  let fixture: ComponentFixture<BookspdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookspdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookspdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
