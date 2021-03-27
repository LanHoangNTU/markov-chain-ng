import { StudentService } from './../student.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dropzone',
  templateUrl: './student-dropzone.component.html',
  styleUrls: ['./student-dropzone.component.scss']
})
export class StudentDropzoneComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private service: StudentService) { }

  ngOnInit(): void {
  }
  title = 'dropzone';
  file: File;

  onSelect(event) {
    console.log(event);
    this.file = event.addedFiles[0];
  }

  onRemove(event) {
    console.log(event);
    this.file = null;
  }

  confirm() {
    const formData = new FormData();
    formData.append("file", this.file);
    this.service.import(formData)
        .subscribe( (res) => {
          console.log(res);
          if (res.status == 200) {
            alert("Bạn đã tải file lên server thành công");
            this.activeModal.close('uploaded');
          } else {
            alert("Status: " + res.status + "\nMessage: " + res.message);
          }
          
    });
  }

  close(reason: String = null) {
    this.activeModal.close(reason);
  }
}
