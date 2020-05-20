import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparchComponent } from './comparch.component';

describe('ComparchComponent', () => {
  let component: ComparchComponent;
  let fixture: ComponentFixture<ComparchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
