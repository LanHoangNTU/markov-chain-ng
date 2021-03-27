import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDropzoneComponent } from './student-dropzone.component';

describe('StudentDropzoneComponent', () => {
  let component: StudentDropzoneComponent;
  let fixture: ComponentFixture<StudentDropzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDropzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDropzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
