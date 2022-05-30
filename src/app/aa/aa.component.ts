import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/user';
import { HttpErrorResponse } from '@angular/common/http';
// import swal, { SweetAlert } from "./core"; 
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any; 
function hello() {
  
}
@Component({
  selector: 'app-aa',
  templateUrl: './aa.component.html',
  styleUrls: ['./aa.component.css']
})

export class AaComponent implements OnInit {
  public user: User;
  public id:any;

  public name:any;
  public email:any;
  public contact:any;
  public cardholder:any;
  constructor(private router: Router, private toastr: ToastrService,private authService: AuthService) { }

  ngOnInit(): void {
    hello()
    AOS.init()
    
    if(this.authService.msg=="profile updated successfully!!")
    {
      this.toastr.success('successfully updated profile!!', '', {
        timeOut: 2000,
        closeButton: true
      });
    }
    this.check()
    // this.getOneuser()
  }
  check() {
    
            this.router.navigate(['/aa'])
       
  }

  getOneuser()
  {
    // this.id = localStorage.getItem('userid')

    // this.authService.Oneuser(this.id).subscribe(

    //   data => {
    //     console.log(data);
    //     this.user=data['user']
    //     this.name = this.user['name']
    //     this.email = this.user['email']
    //     this.cardholder = this.user['cardholder']
    //   },
    //   (error) => {

    //     if (error instanceof HttpErrorResponse) {


        swal(' Payment Successfull! Your order will be Delivered soon 😊')
            this.router.navigate(['/userhome'])

  //       }
  //       console.log(error);
  //     }
  //   )
  }
}
