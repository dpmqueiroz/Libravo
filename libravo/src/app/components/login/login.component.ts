import { CLIENT_ID } from './../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  googleOneTapFunction(){
    function handleCredentialResponse(response: any) {
      console.log("Encoded JWT ID token: " + response.credential);
    }
    window.onload = function () {

      //@ts-ignore
      google.accounts.id.initialize({
        client_id: CLIENT_ID,
        callback: handleCredentialResponse,
      });
      //@ts-ignore
      google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        { theme: "outline", size: "large" }  // customization attributes
      );
      //@ts-ignore
      google.accounts.id.prompt(); // also display the One Tap dialog
    }
  }

  constructor() {
   }


  ngOnInit(): void {
    this.googleOneTapFunction();
  }



}
