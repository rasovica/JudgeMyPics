import {IPost} from '../interface/IPost';

const mockLatestPosts: IPost[] = Array(20).fill({
  title: 'Mock Title that is hella long and is super long',
  description: 'Mock description',
  url: 'https://i.imgur.com/DgsficG.jpg',
  comments: [],
  views: 20,
  date: 1533392858,
  score: 10,
  id: 'MOCKID'
} as IPost);

const mockSinglePost: IPost = {
  title: 'Mock Title that is hella long and is super long',
  description: 'Mock description',
  url: 'https://i.imgur.com/DgsficG.jpg',
  comments: [],
  views: 20,
  date: 1533392858,
  score: 10,
  id: 'MOCKID'
};

export {mockLatestPosts, mockSinglePost};
