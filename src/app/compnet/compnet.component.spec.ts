import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompnetComponent } from './compnet.component';

describe('CompnetComponent', () => {
  let component: CompnetComponent;
  let fixture: ComponentFixture<CompnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
