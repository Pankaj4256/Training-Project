import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsefacultyComponent } from './csefaculty.component';

describe('CsefacultyComponent', () => {
  let component: CsefacultyComponent;
  let fixture: ComponentFixture<CsefacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsefacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsefacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
