import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';
import {BackendService} from '../service/backend.service';


@Component({
  selector: 'app-manage-profile',
  templateUrl: './manage-profile.component.html',
  styleUrls: ['./manage-profile.component.scss']
})
export class ManageProfileComponent implements OnInit {

  constructor(private backed: BackendService) {}

  ngOnInit() {
  }

  getProfile() {
    this.backed.getSelfProfile().subscribe((data) => {
      console.log(data);
    });
  }
}
