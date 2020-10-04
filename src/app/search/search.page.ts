import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { HomePage } from '../home/home.page';

let homePageItem = new HomePage(null);

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
  { path: 'detail', loadChildren: './pages/detail/detail.module#DetailModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],

})
export class SearchPage {

  /* VARIABLES */
  searchIndex: string = 'false';
  events = homePageItem.events;
  addEvents = homePageItem.addEvents;
  filteredEvents: any;
  querySearch = "";

  constructor(private router: Router) {
  }

  /* FUNCTION */
  goToAccount() {
    this.router.navigate(['account']);
  }

  fn_search() {
    this.searchIndex = 'true';
    this.querySearch;
  }

  isExist(query: string, i: any) {
    if (homePageItem.addEvents[i].name.toLowerCase().indexOf(this.querySearch) >= 0) {
      //console.log(query+" is PRESENT");
      //console.log(this.querySearch);
      document.getElementById("notFound").style.display = "none";
      return true;
    }
    else {
      //console.log(query+" is NOT PRESENT");
      //console.log(this.querySearch);
      document.getElementById("notFound").style.display = "inline-block";
      return false;
    }
  }

  openDetailsWithQueryParams(id: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.addEvents[id - 1])
      }
    }
    this.router.navigate(['detail'], navigationExtras);
  }
}
