import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassLawComponent } from './class-law.component';

describe('ClassLawComponent', () => {
  let component: ClassLawComponent;
  let fixture: ComponentFixture<ClassLawComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassLawComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
