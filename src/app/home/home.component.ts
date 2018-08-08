import { Component, OnInit } from '@angular/core';
import {BackendService} from '../service/backend.service';
import {IPost} from '../interface/IPost';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  posts: IPost[];

  constructor(private backendService: BackendService) { }

  ngOnInit() {
    this.backendService.getHeroes().subscribe(posts => this.posts = posts);
  }
}
