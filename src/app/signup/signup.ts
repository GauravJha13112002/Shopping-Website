import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterLink,FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

   SignupData={
    name:"",
    email:"",
    password:""
  }

  constructor(private router:Router){}
  

  onSign(){
    if(this.SignupData.name && this.SignupData.email && this.SignupData.password){
      localStorage.setItem('saveData', JSON.stringify(this.SignupData));
      alert("Signup Succesfull");
      this.router.navigate(['/login']);
    }
    else{
      alert("Please fill all the details first")
    }
  }

}