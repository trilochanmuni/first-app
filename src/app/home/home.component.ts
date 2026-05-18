import { AfterViewInit, Component } from '@angular/core';
declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    (function ($) {
      $(document).ready(function () {
        console.log('jQuery is working!');
        $('.header-carousel').owlCarousel({
          nav: true,
          navText: [
            "<i class='lni-chevron-left'></i>",
            "<i class='lni-chevron-right'></i>",
          ],
          items: 1,
          loop: true,
          center: true,
          margin: 0,
          lazyLoad: true,
          dots: false,
        });
      });
    })(jQuery);
  }
}
