import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.scss']
})
export class PostStatsComponent implements OnInit {
  @Input() score: number;
  @Input() comments: number;
  @Input() views: number;

  constructor() { }

  ngOnInit() {
  }

}
