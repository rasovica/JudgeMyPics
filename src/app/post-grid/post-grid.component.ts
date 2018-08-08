import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../interface/IPost';

@Component({
  selector: 'app-post-grid',
  templateUrl: './post-grid.component.html',
  styleUrls: ['./post-grid.component.scss']
})
export class PostGridComponent implements OnInit {
  @Input() posts: IPost[];

  constructor() { }

  ngOnInit() {
  }

}
