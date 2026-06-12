import {
  AfterViewInit,
  Component,
  PLATFORM_ID,
  Inject,
  OnInit,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { HlDirective } from '../hl.directive';
import { HomeService } from '../home.service';

declare var jQuery: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  public todoArray: any[] = [];
  public tagin: string = '';
  public tag: string = 'Active Pharma';
  public tl: boolean = true;
  public tla: any[] = [
    {
      name: 'Active Pharma Ingredients abcd',
      link: '/active-pharma-ingredients',
    },
    {
      name: 'Pharmaceutical Intermediates',
      link: '/pharmaceutical-intermediates',
    },
  ];
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
    public home: HomeService,
  ) {}
  ngOnInit(): void {
    this.home.getTodoLists().subscribe((data) => {
      this.todoArray = data as any[];
      console.log(this.todoArray);
      this.home.postTodoList(this.todoArray);
    });
    this.meta.addTags([
      {
        name: 'description',
        content: 'This is the home page of our Angular application.',
      },
      { name: 'keywords', content: 'angular, home, page, example' },
      { name: 'author', content: 'Your Name' },
    ]);
    this.title.setTitle('Home - My Angular App');
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
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
}
