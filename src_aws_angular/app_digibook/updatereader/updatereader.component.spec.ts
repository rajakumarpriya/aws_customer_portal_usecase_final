import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatereaderComponent } from './updatereader.component';

describe('UpdatereaderComponent', () => {
  let component: UpdatereaderComponent;
  let fixture: ComponentFixture<UpdatereaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatereaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatereaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
