import { StudentPrediction } from './student-prediction.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class StudentService {
  coreUrl: String = "http://localhost:8081/api/";

  constructor(private http: HttpClient) { }

  getData() {
    let params = { params: new HttpParams({
      fromObject: {classId: "6", loopTime: "5"}
    })};
    return this.http.get<StudentPrediction>(`${this.coreUrl}predict`, params);
  }

  import(formData: FormData) {
    return this.http.post<{
      status: Number,
      message: String
    }>(`${this.coreUrl}students-import`, formData);
  }
}
