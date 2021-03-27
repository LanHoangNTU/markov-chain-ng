import { StudentDropzoneComponent } from './student-dropzone/student-dropzone.component';
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
  filteredData: DataPredicton[];
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
      this.filter();
      console.log(this.headers);
    });
  }

  filter(filter: String = null) {
    if (!filter) {
      this.filteredData = Object.assign([], this.data);
    }
    else {
      const name = this.normalize(filter);
      
      this.filteredData = Object.assign([], this.data)
          .filter(item => this.normalize(item.name)
            .toLowerCase()
            .includes(name.toLowerCase())
          );
    }
  }

  normalize(str: String) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  getMoreData(student: DataPredicton) {
    const modalRef = this.modal.open(PreDetailComponent, {size: 'lg', backdrop: 'static'});
    modalRef.componentInstance.student = student;
    modalRef.componentInstance.headers = this.headers.slice();
  }

  import() {
    const modalRef = this.modal.open(StudentDropzoneComponent, {size: 'lg', backdrop: 'static'});
    modalRef.closed.subscribe(reason => {
      if (reason === 'uploaded') {
        this.getData();
      }
    })
  }
}
