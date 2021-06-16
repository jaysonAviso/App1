import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseApi = 'http://localhost:5000/api/'
  validationErrors: string[] = [];
  constructor(private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  get404Error() {
    this.http.get(this.baseApi + 'buggy/not-found').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  get400Error() {
    this.http.get(this.baseApi + 'buggy/bad-request').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  get401Error() {
    this.http.get(this.baseApi + 'buggy/auth').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  get500Error() {
    this.http.get(this.baseApi + 'buggy/server-error').subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }
  get400ValidationError() {
    this.http.post(this.baseApi + 'account/register', {}).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
      this.validationErrors = err;
    })
  }

}
