import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormsModule, ReactiveFormsModule,} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  adminLogin!:FormGroup
  constructor(private form:FormBuilder,private api:AdminServiceService,private router:Router){

  }
  ngOnInit(): void {
    this.adminLogin=this.form.group({
      email: [''],
      password: ['']
    })
  }
 
  login(){
this.api.adminLogin(this.adminLogin.value).subscribe((res:any)=>{
  console.log('res', res)
  this.router.navigate(['/home'])
})
  }
}
