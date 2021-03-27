import { StudentPrediction, DataPredicton } from './student-prediction.model';
import { PreDetailComponent } from './pre-detail/pre-detail.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from './student.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  data: DataPredicton[];
  headers: String[];
  students: StudentPrediction

  constructor(private service: StudentService, protected modal: NgbModal) { }

  ngOnInit(): void {
  }

  getData() {
    this.service.getData().subscribe(data => {
      this.headers = new Array();
      this.headers.push("Họ và tên");
      for (let key in data.headers) {
        this.headers.push(data.headers[key]);
      }
      this.data = data.data;
      console.log(this.headers);
    });
  }

  getMoreData(student: DataPredicton) {
    const modalRef = this.modal.open(PreDetailComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.headers = this.headers.slice();
  }
}
