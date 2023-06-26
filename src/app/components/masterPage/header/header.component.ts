import { Component, NgModule, ViewChild } from '@angular/core';
import { GetUserModel } from 'src/app/Models/Users/GetUserModel';
import { TokenService } from 'src/app/services/Tokens/token.service';
import { faAngleUp, faAngleDown, faBars, faXmark} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})



export class HeaderComponent {
  loggedIn : boolean = this.tokenService.getToken() != null;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faBars = faBars;
  faXmark = faXmark;

  @ViewChild(MatSidenav)
  sidenav!:MatSidenav

  user : GetUserModel | null = null;
  isMenuOpen: boolean = false;
  constructor(
   private tokenService:TokenService,
   private router : Router,
  ){
   this.getUserLogged()
  }

  toggleMenuMobile() {
    this.isMenuOpen = !this.isMenuOpen;
    this.router.navigateByUrl('/menu-moblie')
  }

  navigateTo(route: string) {
    this.router.navigateByUrl(route);
  }
  ngOnInit(): void {
    this.getUserLogged()
  }

  signOff(){
    this.loggedIn = false;
    localStorage.removeItem('UserSesion')
    localStorage.removeItem('Token')
  }
  getUserLogged(){
    if(this.loggedIn){
      const userJSON = localStorage.getItem('UserSesion');
      if (userJSON) {
         this.user = JSON.parse(userJSON);
         console.log("Usuario en sesion: ", this.user)
      }
    }
  }
}
