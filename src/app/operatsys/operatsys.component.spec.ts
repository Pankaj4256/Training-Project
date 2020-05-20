import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatsysComponent } from './operatsys.component';

describe('OperatsysComponent', () => {
  let component: OperatsysComponent;
  let fixture: ComponentFixture<OperatsysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperatsysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatsysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
