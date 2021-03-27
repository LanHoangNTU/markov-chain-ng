import { SUBJECT_NAMES } from './../../constants';
import { StudentPrediction, DataPredicton } from './../student-prediction.model';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pre-detail',
  templateUrl: './pre-detail.component.html',
  styleUrls: ['./pre-detail.component.scss']
})
export class PreDetailComponent implements OnInit {
  student?: DataPredicton;
  headers?: String[];
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.headers.shift();
  }

  close() {
    this.activeModal.close();
  }

  getHeaderFromKey(key: any) {
    return SUBJECT_NAMES[key];
  }

}
