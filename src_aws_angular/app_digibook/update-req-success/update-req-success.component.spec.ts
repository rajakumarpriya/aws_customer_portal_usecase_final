import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateReqSuccessComponent } from './update-req-success.component';

describe('UpdateReqSuccessComponent', () => {
  let component: UpdateReqSuccessComponent;
  let fixture: ComponentFixture<UpdateReqSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateReqSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateReqSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
