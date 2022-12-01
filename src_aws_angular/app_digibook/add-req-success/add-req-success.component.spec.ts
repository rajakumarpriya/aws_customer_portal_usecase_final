import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReqSuccessComponent } from './add-req-success.component';

describe('AddReqSuccessComponent', () => {
  let component: AddReqSuccessComponent;
  let fixture: ComponentFixture<AddReqSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReqSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddReqSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
