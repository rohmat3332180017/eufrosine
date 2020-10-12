import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { HomePage } from '../home/home.page';
import { Geolocation } from '@ionic-native/geolocation/ngx';

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
  kategori: any = 'all';

  lat: any = 0;
  long: any = 0;
  latMin: any = 0;
  latMax: any = 0;
  longMin: any = 0;
  longMax: any = 0;
  distance_tollerance = 2;

  geoLocationError: string;

  constructor(private router: Router, private geolocation: Geolocation) {
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

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximuxAge: 3600
  };

  //Geo Function
  getLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.long = resp.coords.longitude;
      this.latMin = resp.coords.latitude-this.distance_tollerance;
      this.latMax = resp.coords.latitude+this.distance_tollerance;
      this.longMin = resp.coords.longitude-this.distance_tollerance;
      this.longMax = resp.coords.longitude+this.distance_tollerance;
      console.log('Lat :'+this.lat+', Long: '+this.long+', LatMin: '+this.latMin+', LatMax: '+this.latMax+', LongMin: '+this.longMin+', LongMax: '+this.longMax);
    }).catch((error) => {
      console.log('Error getting Location', error);
      switch (error.code) {
        case 2:
          this.geoLocationError = 'Tak Terhubung ke Jaringan Internet';
          break;
      
        default:
          this.geoLocationError = 'Kesalahan Tidak Diketahui';
          break;
      }
      
    });
  }

  fIsKategori(val) {
    if (this.kategori != val) {
      return false;
    }
    else {
      return true;
    }
  }

  isTerbaru: boolean = false;
  fIsTerbaru() {
    return this.isTerbaru;
  }
  terbaru() {
    this.isTerbaru = !this.isTerbaru;
  }

  isTerdekat: boolean = false;
  fIsTerdekat() {
    return this.isTerdekat;
  }
  terdekat() {
    this.getLocation();
    this.isTerdekat = !this.isTerdekat;
    //this.kategori = 'terdekat';
    if(this.isTerdekat){
      document.getElementById("geoLocationError").style.display = "block";
    }
    else{
      document.getElementById("geoLocationError").style.display = "none";
    }
  }

  isTerpopuler: boolean = false;
  fIsTerpopuler() {
    return this.isTerpopuler;
  }
  terpopuler() {
    this.isTerpopuler = !this.isTerpopuler;
  }

  isDaring: boolean = false;
  fIsDaring() {
    return this.isDaring;
  }
  daring() {
    this.isDaring = !this.isDaring;
  }

  isLuring: boolean = false;
  fIsLuring() {
    return this.isLuring;
  }
  luring() {
    this.isLuring = !this.isLuring;
  }

  isInArea(latitude, longitude){
    if(this.isTerdekat == true){
      if((latitude>this.latMin) && (latitude<this.latMax) && (longitude>this.longMin) && (longitude<this.longMax)){
        return true;
        //Tampilkan sesuai lokasi terdekat
      }
      else{
        return false;
        //Tampilkan tanpa filter lokasi
      }
    }
    else{
      return true;
      // Tampilkan semua
    }
  }
  // End of Function
}
