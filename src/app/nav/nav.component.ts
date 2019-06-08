import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  imgUrl="../../assets/formalab.png";
  isConncet:boolean;
  isSubscribe:boolean;
  isLogout:boolean;
  constructor(private router:Router) { }

  ngOnInit() {
    let url=this.router.url;
    
    if (url==='/connecter') {
      this.isSubscribe=true;
      this.isConncet=false;
      this.isLogout=false;
      
    } else if (url==='/inscription') {
      this.isSubscribe = false;
      this.isConncet = true;
      this.isLogout = false;
      
    }else if(url==='/'){
      this.isSubscribe=true;
      this.isConncet=true;
      this.isLogout=false;
    }else{
      this.isSubscribe=false;
      this.isConncet=false;
      this.isLogout=true;
    }
  }
  deconnecter(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);

  }

}
