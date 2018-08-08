import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {IPost} from '../interface/IPost';
import {mockLatestPosts, mockSinglePost} from '../mock/Post';
import {API} from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getHeroes(): Observable<IPost[]> {
    return of(mockLatestPosts);
  }

  getPost(id: string): Observable<IPost> {
    return of(mockSinglePost);
  }

  getSelfProfile(): Observable<any> {
    const apiName = 'main';
    const path = '/profile';

    return of(API.get(apiName, path, {}));
  }
}
