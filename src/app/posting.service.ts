import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  postList: IPost[];

  constructor() {
    let post: IPost = {
      nickname: "wie",
      status: "hallo ich bin wie",
      answers: [
        { nickname: "wie", status: "hallo ich bin wie" },
        { nickname: "was", status: "hallo ich bin was" },
        { nickname: "warum", status: "hallo ich bin warum" }
      ]
    };
    for (const answer of post.answers) {
      console.log(answer);
    }
    this.postList = [post];
  }


}
export interface IPost {
  nickname: string;
  status: string;
  answers: IAnswer[];
}
export interface IAnswer {
  nickname: string;
  status: string;
}


