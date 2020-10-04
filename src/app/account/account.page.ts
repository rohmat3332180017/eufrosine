import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { Component, OnInit } from '@angular/core';


const routes: Routes = [
  { path: '', redirectTo : '/home', pathMatch:'full'},
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule'},
  { path: 'detail', loadChildren: './pages/detail/detail.module#DetailModule'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToSearch(){
    this.router.navigate(['search']);
  }

}
