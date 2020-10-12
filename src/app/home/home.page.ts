import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Router, NavigationExtras } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';


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
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  kategori: string = 'all';
  buttonValue: any;

  //EVENTS DATA
  events: any;
  segmentsKategori: { bg: string; name: string; }[];
  data: any;
  addEvents: any;
  addEventIndex = 0;
  rand1 = 0;
  rand2 = 1;
  rand3 = 2;
  static goHomePage: any;

  constructor(private router: Router) {
    this.addEvents = [
      { 'code' : '1', 'name' : 'IndoBuildTech Expo', 'img' : '../../assets/img/event-1.jpg', 'date' : 'Minggu, 20 Desember 2020', 'location' : 'Jatiuwung, Tangerang', 'lat' : '106.0883', 'long' : '-6.447', 'desc' : 'Transforming into Digital Cities Through Infrastructure & Community Advancement', 'visitors' : '569', 'attend_person' : '138', 'upload_date' : '18', 'kategori' : 'seminar' ,'comments' : 'mudblood90 : A map of the parking availability on-line would have been helpful. Rest areas and map of restrooms.', 'venue' : 'Gedung Griya Ganesha', 'rate' : '4', 'interset' : '70', 'viewers' : '569', 'host' : '../../assets/img/host-1.jpg' },
      { 'code' : '2', 'name' : 'Indonesia International Book Fair (IIBF)', 'img' : '../../assets/img/event-2.jpg', 'date' : 'Rabu, 18 November 2020', 'location' : 'Langkapura, Bandar Lampung', 'lat' : '105.0697', 'long' : '-5.681', 'desc' : 'International Book Fair (IIBF) is an annual book exhibition organized by Indonesian Publishers Association (Ikatan Penerbit Indonesia/Ikapi).', 'visitors' : '793', 'attend_person' : '318', 'upload_date' : '17', 'kategori' : 'festival' ,'comments' : 'portkey138 : Nice experience', 'venue' : 'Aula BLK Bandar Lampung', 'rate' : '4', 'interset' : '107', 'viewers' : '793', 'host' : '../../assets/img/host-2.jpg' },
      { 'code' : '3', 'name' : 'AVCJ Private Equity and Venture Forum Indonesia', 'img' : '../../assets/img/event-3.jpg', 'date' : 'Kamis, 17 Desember 2020', 'location' : 'Sipatana , Gorontalo', 'lat' : '123.3573', 'long' : '0.94', 'desc' : 'AVCJ Private Equity and Venture Forum Indonesia is a forerunner for the private markets industry and a place where the most influential.', 'visitors' : '230', 'attend_person' : '109', 'upload_date' : '6', 'kategori' : 'lainnya' ,'comments' : 'travels36 : I was at the Customer Experience Magement Summit, when i came there they told me i am not registered, so i have to turn back', 'venue' : 'Sanggar Tuna Rungu Gorontalo', 'rate' : '4', 'interset' : '61', 'viewers' : '230', 'host' : '../../assets/img/host-3.jpg' },
      { 'code' : '4', 'name' : 'Indonesian Hospital Expo', 'img' : '../../assets/img/event-4.jpg', 'date' : 'Jumat, 27 November 2020', 'location' : 'Sipatana , Gorontalo', 'lat' : '123.3573', 'long' : '0.94', 'desc' : 'The Indonesia Hospital Expo is an International Hospital, Medical, Pharmaceutical, Clinical, Laboratories Equipment and Medicine Exhibition.', 'visitors' : '831', 'attend_person' : '149', 'upload_date' : '2', 'kategori' : 'seminar' ,'comments' : 'morgana133 : A map of the parking availability on-line would have been helpful. Rest areas and map of restrooms.', 'venue' : 'Sanggar Tuna Rungu Gorontalo', 'rate' : '4', 'interset' : '84', 'viewers' : '831', 'host' : '../../assets/img/host-4.jpg' },
      { 'code' : '5', 'name' : 'Indo Leather & Footwear (ILF)', 'img' : '../../assets/img/event-5.jpg', 'date' : 'Minggu, 29 November 2020', 'location' : 'Langkapura, Bandar Lampung', 'lat' : '105.0697', 'long' : '-5.681', 'desc' : 'Indo Leather & Footwear will showcase quality product on laser machine and a high competitiveness technology in leather and footwear industry.', 'visitors' : '811', 'attend_person' : '333', 'upload_date' : '31', 'kategori' : 'seminar' ,'comments' : 'imperio180 : Well organised, but many duplications of info. some speakers only intereted in selling their products', 'venue' : 'Aula BLK Bandar Lampung', 'rate' : '4', 'interset' : '50', 'viewers' : '811', 'host' : '../../assets/img/host-5.jpg' },
      { 'code' : '6', 'name' : 'Food Ingredients Asia (Fi Asia)', 'img' : '../../assets/img/event-6.jpg', 'date' : 'Rabu, 02 Desember 2020', 'location' : 'Pontianak Utara, Pontianak', 'lat' : '109.5018', 'long' : '0.08', 'desc' : 'This event showcases products like platforms for the food industry to get together and explore the possible areas of developments in the future. It also enables the delegates and participants to enter into profitable trade relationships that are mutually beneficial etc.', 'visitors' : '209', 'attend_person' : '250', 'upload_date' : '18', 'kategori' : 'sosial' ,'comments' : 'fwooper100 : A map of the parking availability on-line would have been helpful. Rest areas and map of restrooms.', 'venue' : 'Gedung Serbaguna Harmoni', 'rate' : '5', 'interset' : '63', 'viewers' : '209', 'host' : '../../assets/img/host-6.jpg' },
      { 'code' : '7', 'name' : 'Biennial International Conference on Acoustics and Vibration', 'img' : '../../assets/img/event-7.jpg', 'date' : 'Selasa, 08 Desember 2020', 'location' : 'Pondok Gede, Bekasi', 'lat' : '106.3153', 'long' : '-6.461', 'desc' : 'The theme of the Conference is “Sound of Indonesia” and will be held Online. We expect a broad program of sessions on variety of acoustics and vibration topics, and its application.', 'visitors' : '420', 'attend_person' : '83', 'upload_date' : '14', 'kategori' : 'sosial' ,'comments' : 'leviosa163 : Use eChipped Id tags that could be used to exchange contact info and a way for writers to meet others in the trade.', 'venue' : 'Gedung Serbaguna Roda Kencana Pondok Gede', 'rate' : '4', 'interset' : '114', 'viewers' : '420', 'host' : '../../assets/img/host-7.jpg' },
      { 'code' : '8', 'name' : 'SIAL InterFOOD', 'img' : '../../assets/img/event-8.jpg', 'date' : 'Senin, 30 November 2020', 'location' : 'Telanaipura, Jambi', 'lat' : '103.5162', 'long' : '-1.548', 'desc' : 'SIAL InterFOOD is the dedicated B2B platform For the Indonesian and Asian Food & Beverage Industry. This event showcases products like coffee, tea and cocoa, fresh and processed fruits.', 'visitors' : '810', 'attend_person' : '162', 'upload_date' : '25', 'kategori' : 'konser' ,'comments' : 'zonko140 : It was a wonderful time!', 'venue' : 'Gedung Lembaga Adat Jambi', 'rate' : '5', 'interset' : '49', 'viewers' : '810', 'host' : '../../assets/img/host-8.jpg' },
      { 'code' : '9', 'name' : 'International Conference on Entrepreneurship studies, Business, Economy, and Management Science (ESBEM)', 'img' : '../../assets/img/event-9.jpg', 'date' : 'Senin, 30 November 2020', 'location' : 'Jatiuwung, Tangerang', 'lat' : '106.0883', 'long' : '-6.447', 'desc' : 'International Conference on Entrepreneurship studies, Business, Economy, and Management Science, we invite all researchers, lecturers, students, practitioners and academicians to gather.', 'visitors' : '448', 'attend_person' : '244', 'upload_date' : '9', 'kategori' : 'lainnya' ,'comments' : 'spinnet28 : Well organised, but many duplications of info. some speakers only intereted in selling their products', 'venue' : 'Gedung Griya Ganesha', 'rate' : '5', 'interset' : '20', 'viewers' : '448', 'host' : '../../assets/img/host-9.jpg' },
      { 'code' : '10', 'name' : 'ALB Indonesia In-House Legal Summit', 'img' : '../../assets/img/event-10.jpg', 'date' : 'Sabtu, 28 November 2020', 'location' : 'Pondok Gede, Bekasi', 'lat' : '106.3153', 'long' : '-6.461', 'desc' : 'The International Conference of the Asian Association for Lexicography is themed as Lexicography and Language Documentation that will be highlighting language documentation in lexicographical contexts. ', 'visitors' : '718', 'attend_person' : '181', 'upload_date' : '23', 'kategori' : 'sosial' ,'comments' : 'krum211 : I WAS IMPRESSED WITH ALL OF YOUR AMENITIES AND AWESOME PEOPLE IN THE EVENT!', 'venue' : 'Gedung Serbaguna Roda Kencana Pondok Gede', 'rate' : '4', 'interset' : '91', 'viewers' : '718', 'host' : '../../assets/img/host-10.jpg' },
      { 'code' : '11', 'name' : 'Lab Indonesia (LabIndo)', 'img' : '../../assets/img/event-11.jpg', 'date' : 'Selasa, 15 Desember 2020', 'location' : 'Gondokusuman, Yogyakarta', 'lat' : '110.0127', 'long' : '-7.284', 'desc' : 'Lab Indonesia showcases the latest instrumentation, technologies, products and services in all major areas of analytical sciences and laboratory services.', 'visitors' : '621', 'attend_person' : '145', 'upload_date' : '13', 'kategori' : 'konser' ,'comments' : 'alicia32 : Use eChipped Id tags that could be used to exchange contact info and a way for writers to meet others in the trade.', 'venue' : 'Balai Utari Gedung Mandala Bhakti Wanitatama', 'rate' : '4', 'interset' : '68', 'viewers' : '621', 'host' : '../../assets/img/host-11.jpg' },
      { 'code' : '12', 'name' : 'Franchise and License Expo Indonesia (FLEI)', 'img' : '../../assets/img/event-12.jpg', 'date' : 'Rabu, 18 November 2020', 'location' : 'Cibuluh, Bogor', 'lat' : '106.4427', 'long' : '-6.249', 'desc' : 'Franchise and License Expo Indonesia aims to create and develop a good quality and professional business model and creating a beneficial business ecosystem.', 'visitors' : '451', 'attend_person' : '66', 'upload_date' : '28', 'kategori' : 'sosial' ,'comments' : 'circe148 : Use eChipped Id tags that could be used to exchange contact info and a way for writers to meet others in the trade.', 'venue' : 'The Agathon Function Centre', 'rate' : '5', 'interset' : '28', 'viewers' : '451', 'host' : '../../assets/img/host-12.jpg' },
      { 'code' : '13', 'name' : 'Indonesia International Trade Show for Automotive Industry (INAPA)', 'img' : '../../assets/img/event-13.jpg', 'date' : 'Selasa, 17 November 2020', 'location' : 'Cempaka Putih, Jakarta', 'lat' : '106.5638', 'long' : '-6.687', 'desc' : 'Indonesia International Trade Show for Automotive Industry is the only dedicated International trade exhibition to focus on Automotive Parts, Components, Accessories and Equipment Products in Indonesia.', 'visitors' : '916', 'attend_person' : '378', 'upload_date' : '8', 'kategori' : 'seminar' ,'comments' : 'firebolt52 : I recommend less panel discussions and more workshops.The experience was over all an awesome experience.Will it be possible to get the slideshow from the speakers please.', 'venue' : 'Cempaka Putih Raya C22', 'rate' : '5', 'interset' : '29', 'viewers' : '916', 'host' : '../../assets/img/host-13.jpg' },
      { 'code' : '14', 'name' : 'Virtual Digital Transformation Indonesia', 'img' : '../../assets/img/event-14.jpg', 'date' : 'Jumat, 04 Desember 2020', 'location' : 'Pontianak Utara, Pontianak', 'lat' : '109.5018', 'long' : '0.08', 'desc' : 'Digital Transformation Asia brings the latest digital trends. Digital Transformation Asia empowers industry leaders and experts to prepare for the challenges ahead.', 'visitors' : '339', 'attend_person' : '213', 'upload_date' : '5', 'kategori' : 'seminar' ,'comments' : 'phyllida31 : Well organised, but many duplications of info. some speakers only intereted in selling their products', 'venue' : 'Gedung Serbaguna Harmoni', 'rate' : '4', 'interset' : '65', 'viewers' : '339', 'host' : '../../assets/img/host-14.jpg' },
      { 'code' : '15', 'name' : 'Jambi International Jewellery Fair (JIJF)', 'img' : '../../assets/img/event-15.jpg', 'date' : 'Jumat, 04 Desember 2020', 'location' : 'Telanaipura, Jambi', 'lat' : '103.5162', 'long' : '-1.548', 'desc' : 'Jambi International Jewellery Fair (JIJF)Digital Transformation Asia brings the latest digital trends. Digital Transformation Asia empowers industry leaders and experts to prepare for the challenges ahead.', 'visitors' : '203', 'attend_person' : '39', 'upload_date' : '14', 'kategori' : 'konser' ,'comments' : 'ministry130 : I WAS IMPRESSED WITH ALL OF YOUR AMENITIES AND AWESOME PEOPLE IN THE EVENT!', 'venue' : 'Gedung Lembaga Adat Jambi', 'rate' : '4', 'interset' : '41', 'viewers' : '203', 'host' : '../../assets/img/host-15.jpg' },
      { 'code' : '16', 'name' : 'International Conference on Mechanical Engineering Research and Application (ICOMERA)', 'img' : '../../assets/img/event-16.jpg', 'date' : 'Minggu, 13 Desember 2020', 'location' : 'Cempaka Putih, Jakarta', 'lat' : '106.5638', 'long' : '-6.687', 'desc' : 'International Conference on Mechanical Engineering Research and Application is a global event focuses on advance Mechanical Engineering Research and Application.', 'visitors' : '251', 'attend_person' : '156', 'upload_date' : '24', 'kategori' : 'seminar' ,'comments' : 'quirrell193 : Don`t go without your oxygen breathing apparatus.', 'venue' : 'Cempaka Putih Raya C22', 'rate' : '5', 'interset' : '112', 'viewers' : '251', 'host' : '../../assets/img/host-16.jpg' },
      { 'code' : '17', 'name' : 'Indonesian Wealth Management Forum', 'img' : '../../assets/img/event-17.jpg', 'date' : 'Sabtu, 19 Desember 2020', 'location' : 'Pontianak Utara, Pontianak', 'lat' : '109.5018', 'long' : '0.08', 'desc' : 'The event is specifically for CEOs, senior management, product/fund gatekeepers and business heads across advisory, compliance, technology and other key areas', 'visitors' : '749', 'attend_person' : '326', 'upload_date' : '24', 'kategori' : 'sosial' ,'comments' : 'twigger59 : I WAS IMPRESSED WITH ALL OF YOUR AMENITIES AND AWESOME PEOPLE IN THE EVENT!', 'venue' : 'Gedung Serbaguna Harmoni', 'rate' : '4', 'interset' : '112', 'viewers' : '749', 'host' : '../../assets/img/host-17.jpg' },
      { 'code' : '18', 'name' : 'International Indonesia Seafood & Meat Conference and Expo (IISM Expo)', 'img' : '../../assets/img/event-18.jpg', 'date' : 'Minggu, 27 Desember 2020', 'location' : 'Magelang Utara, Magelang', 'lat' : '110.8108', 'long' : '-7.087', 'desc' : 'International Indonesia Seafood & Meat Expo (IISM)’s 8th edition in 2020 will being wider high-tech cold chain systems for Indonesia’s fast-expanding food production industry. ', 'visitors' : '315', 'attend_person' : '383', 'upload_date' : '31', 'kategori' : 'sosial' ,'comments' : 'mcboon82 : A map of the parking availability on-line would have been helpful. Rest areas and map of restrooms.', 'venue' : 'Gedung Pertemuan Mandala', 'rate' : '4', 'interset' : '63', 'viewers' : '315', 'host' : '../../assets/img/host-18.jpg' },
      { 'code' : '19', 'name' : 'JIFHEX Indonesia (Jogja International Food & Hospitality Expo)', 'img' : '../../assets/img/event-19.jpg', 'date' : 'Kamis, 31 Desember 2020', 'location' : 'Ciputat, Tangerang Selatan', 'lat' : '106.7202', 'long' : '-6.838', 'desc' : 'The International Exhibition of Food and Beverage products, Technology, Ingedients, Additives, Raw Material, Services, Equipment and Supplies.', 'visitors' : '214', 'attend_person' : '54', 'upload_date' : '6', 'kategori' : 'seminar' ,'comments' : 'auror113 : Awesome!', 'venue' : 'GSG Villa Mutiara', 'rate' : '4', 'interset' : '75', 'viewers' : '214', 'host' : '../../assets/img/host-19.jpg' },
      { 'code' : '20', 'name' : 'International Conference of the Asian Association for Lexicography (ASIALEX)', 'img' : '../../assets/img/event-20.jpg', 'date' : 'Kamis, 10 Desember 2020', 'location' : 'Ciputat, Tangerang Selatan', 'lat' : '106.7202', 'long' : '-6.838', 'desc' : 'The International Conference of the Asian Association for Lexicography is themed as Lexicography and Language Documentation that will be highlighting language documentation in lexicographical contexts.', 'visitors' : '570', 'attend_person' : '130', 'upload_date' : '18', 'kategori' : 'konser' ,'comments' : 'prongs98 : Awesome!', 'venue' : 'GSG Villa Mutiara', 'rate' : '5', 'interset' : '31', 'viewers' : '570', 'host' : '../../assets/img/host-20.jpg' }
    ]
    this.events = [this.addEvents[this.rand1],this.addEvents[this.rand2],this.addEvents[this.rand3]];
    this.segmentsKategori = [
      {
        "bg": "../../assets/img/gradientBg1.jpg",
        "name": "konser"
      },
      {
        "bg": "../../assets/img/gradientBg2.jpg",
        "name": "festival"
      },
      {
        "bg": "../../assets/img/gradientBg3.jpg",
        "name": "sosial"
      },
      {
        "bg": "../../assets/img/gradientBg2.jpg",
        "name": "seminar"
      },
      {
        "bg": "../../assets/img/gradientBg1.jpg",
        "name": "lainnya"
      }
    ]
  }

  /* =================================== INFINITE SCROLL =======================================*/
  loadData(infiniteScroll) {
    //console.log('Begin async operation');
    document.getElementById('dataEnded').innerHTML = "";

    setTimeout(() => {

      if (this.addEventIndex >= this.addEvents.length) {
        //console.log('Ended');
        infiniteScroll.disabled = true;
        document.getElementById('dataEnded').innerHTML = "Yah maaf, Aku Gak nemu Event lagi :(";
      }
      else {
        for (let i = 0; i < 1; i++) {
          this.events.push(this.addEvents[this.addEventIndex]);
        }
        this.addEventIndex++;
      }

      //console.log('Async operation has ended in '+this.addEvents.length);
      infiniteScroll.target.complete();

    }, 1500);
  }//EN OF INFINITE SCROLL

  goHomePage() {
    this.kategori = "all";
  }
  goToKategori(val) {
    this.kategori = val;
  }
  openDetailsWithQueryParams(id: any) {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.addEvents[id - 1])
        }
      }
      this.router.navigate(['detail'], navigationExtras);
  }

  isAll: boolean = true;
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
    this.isTerdekat = !this.isTerdekat;
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
  goToSearch() {
    this.router.navigate(['search']);
  }
  goToAccount() {
    this.router.navigate(['account']);
  }
}//DON WRITE FUNCTION AFTER THIS

const slideOpts = {
  grabCursor: true,
  cubeEffect: {
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  },
  on: {
    beforeInit: function () {
      const swiper = this;
      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      const overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };

      this.params = Object.assign(this.params, overwriteParams);
      this.originalParams = Object.assign(this.originalParams, overwriteParams);
    },
    setTranslate: function () {
      const swiper = this;
      const {
        $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
      } = swiper;
      const params = swiper.params.cubeEffect;
      const isHorizontal = swiper.isHorizontal();
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let wrapperRotate = 0;
      let $cubeShadowEl;
      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
            $wrapperEl.append($cubeShadowEl);
          }
          $cubeShadowEl.css({ height: `${swiperWidth}px` });
        } else {
          $cubeShadowEl = $el.find('.swiper-cube-shadow');
          if ($cubeShadowEl.length === 0) {
            $cubeShadowEl = swiper.$('<div class="swiper-cube-shadow"></div>');
            $el.append($cubeShadowEl);
          }
        }
      }

      for (let i = 0; i < slides.length; i += 1) {
        const $slideEl = slides.eq(i);
        let slideIndex = i;
        if (isVirtual) {
          slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
        }
        let slideAngle = slideIndex * 90;
        let round = Math.floor(slideAngle / 360);
        if (rtl) {
          slideAngle = -slideAngle;
          round = Math.floor(-slideAngle / 360);
        }
        const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
        let tx = 0;
        let ty = 0;
        let tz = 0;
        if (slideIndex % 4 === 0) {
          tx = -round * 4 * swiperSize;
          tz = 0;
        } else if ((slideIndex - 1) % 4 === 0) {
          tx = 0;
          tz = -round * 4 * swiperSize;
        } else if ((slideIndex - 2) % 4 === 0) {
          tx = swiperSize + (round * 4 * swiperSize);
          tz = swiperSize;
        } else if ((slideIndex - 3) % 4 === 0) {
          tx = -swiperSize;
          tz = (3 * swiperSize) + (swiperSize * 4 * round);
        }
        if (rtl) {
          tx = -tx;
        }

        if (!isHorizontal) {
          ty = tx;
          tx = 0;
        }

        const transform$$1 = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
        if (progress <= 1 && progress > -1) {
          wrapperRotate = (slideIndex * 90) + (progress * 90);
          if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
        }
        $slideEl.transform(transform$$1);
        if (params.slideShadows) {
          // Set shadows
          let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
          let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
          if (shadowBefore.length === 0) {
            shadowBefore = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
            $slideEl.append(shadowBefore);
          }
          if (shadowAfter.length === 0) {
            shadowAfter = swiper.$(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
            $slideEl.append(shadowAfter);
          }
          if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
          if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
        }
      }
      $wrapperEl.css({
        '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
        '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
        'transform-origin': `50% 50% -${swiperSize / 2}px`,
      });

      if (params.shadow) {
        if (isHorizontal) {
          $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
        } else {
          const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
          const multiplier = 1.5 - (
            (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
            + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
          );
          const scale1 = params.shadowScale;
          const scale2 = params.shadowScale / multiplier;
          const offset$$1 = params.shadowOffset;
          $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset$$1}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
        }
      }

      const zFactor = (swiper.browser.isSafari || swiper.browser.isUiWebView) ? (-swiperSize / 2) : 0;
      $wrapperEl
        .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
    },
    setTransition: function (duration) {
      const swiper = this;
      const { $el, slides } = swiper;
      slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
      if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
        $el.find('.swiper-cube-shadow').transition(duration);
      }
    },
  }
}