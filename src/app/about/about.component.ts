import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  public todoArray: any[] = [];
  constructor(
    private meta: Meta,
    private title: Title,
    public home: HomeService,
  ) {}

  ngOnInit(): void {
    this.todoArray = this.home.getTodoListData();
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
