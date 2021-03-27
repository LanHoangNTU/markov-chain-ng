import { StudentService } from './student/student.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StudentComponent } from './student/student.component';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PreDetailComponent } from './student/pre-detail/pre-detail.component';
import { ClassLawComponent } from './class-law/class-law/class-law.component';
import { StudentDropzoneComponent } from './student/student-dropzone/student-dropzone.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PreDetailComponent,
    ClassLawComponent,
    StudentDropzoneComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    NgxDropzoneModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
