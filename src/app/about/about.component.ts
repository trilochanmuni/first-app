import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(
    private meta: Meta,
    private title: Title,
  ) {}

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'description',
        content: 'This is the about page of our Angular application.',
      },
      { name: 'keywords', content: 'angular, about, page, example' },
      { name: 'author', content: 'Your About Name' },
    ]);
    this.title.setTitle('About - My Angular App');
  }
}
