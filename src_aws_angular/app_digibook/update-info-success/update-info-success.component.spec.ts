import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInfoSuccessComponent } from './update-info-success.component';

describe('UpdateInfoSuccessComponent', () => {
  let component: UpdateInfoSuccessComponent;
  let fixture: ComponentFixture<UpdateInfoSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInfoSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateInfoSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
