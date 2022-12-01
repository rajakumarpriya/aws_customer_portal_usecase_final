import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompBookComponent } from './comp-book.component';

describe('CompBookComponent', () => {
  let component: CompBookComponent;
  let fixture: ComponentFixture<CompBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
