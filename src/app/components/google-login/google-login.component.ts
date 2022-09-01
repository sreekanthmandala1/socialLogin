import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {
  user!: SocialUser;
  authorized!: boolean;
  useremail!: string;
  constructor(private authService: SocialAuthService,private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
    })
  }

  signInWithGoogle(socialPlatform:string){
    debugger;
    let socialPlatformProvider:any;
    if(socialPlatform == 'google'){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    this.authService.signIn(socialPlatformProvider).then((userData)=>{
      if(userData != null){
        this.authorized = true;
        this.user = userData;
        this.useremail = userData.email;
        let key = userData.name;
        var provider = userData.provider;
        localStorage.setItem('Blog',key);
        localStorage.setItem('provider',provider);
        this.router.navigate(['profile'])
      }
    })
  }

  refreshToken():void{
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut():void{
    this.authService.signOut();
  }
}
