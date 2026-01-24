import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  email = ""
  password = ""


  constructor(private router: Router) { }

  onlogin() {
    const user = JSON.parse(localStorage.getItem('saveData') || '{}')
    if (this.email === user.email && this.password == user.password) {
      alert("Login Successfull")
      this.router.navigate(['/productlist'])
    }
    else {
      alert("Invalid Credentials");
      
    }


  }
}
