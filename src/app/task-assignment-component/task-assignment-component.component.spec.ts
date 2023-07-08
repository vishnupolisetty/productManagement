import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAssignmentComponentComponent } from './task-assignment-component.component';

describe('TaskAssignmentComponentComponent', () => {
  let component: TaskAssignmentComponentComponent;
  let fixture: ComponentFixture<TaskAssignmentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskAssignmentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskAssignmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
