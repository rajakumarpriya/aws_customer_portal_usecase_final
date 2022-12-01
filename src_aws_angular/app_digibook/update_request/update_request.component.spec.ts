import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRequestComponent } from './update_request.component';

describe('CompBookComponent', () => {
  let component:UpdateRequestComponent;
  let fixture: ComponentFixture<UpdateRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
