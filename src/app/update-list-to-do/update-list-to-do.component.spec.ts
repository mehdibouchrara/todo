import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateListToDoComponent } from './update-list-to-do.component';

describe('UpdateListToDoComponent', () => {
  let component: UpdateListToDoComponent;
  let fixture: ComponentFixture<UpdateListToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateListToDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateListToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
