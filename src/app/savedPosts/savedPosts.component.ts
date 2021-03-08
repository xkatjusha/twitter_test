import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { IAnswer, IPost, PostingService } from '../posting.service';

@Component({
  selector: 'app-savedPosts',
  templateUrl: './savedPosts.component.html',
  styleUrls: ['./savedPosts.component.css']
})
export class SavedPostsComponent {
  @ViewChild("newnicknameresponse", { static: false }) newnicknameresponse: ElementRef<HTMLInputElement>;
  @ViewChild("newstatusresponse", { static: false }) newstatusresponse: ElementRef<HTMLInputElement>;
  @Input() postData: IPost;
  commentary: boolean;
  showmlike: boolean;
  nickname: string;
  status: string;
  likenumber: number;
  showmore: boolean;

  constructor(public postingService: PostingService, public elementRef: ElementRef) {
    this.commentary = false;
    this.showmlike = false;
    this.likenumber = 10;
    this.showmore=false;
  }

  addlike() {
    this.showmlike = true;
    this.likenumber = this.likenumber + 1;
  }
  sublike() {
    this.showmlike = false;
    this.likenumber = this.likenumber - 1;
  }

  reply() {
    if (this.commentary == true) {
      this.commentary = false;
    }
    else {
      this.commentary = true;
    }
  }

  postenresponse() {
     let responsepost:IAnswer ={
        nickname: this.newnicknameresponse.nativeElement.value,
        status: this.newstatusresponse.nativeElement.value,
      }
       this.postData.answers.push(responsepost);
    this.clear();
  }

  clear() {
    this.newnicknameresponse.nativeElement.value = "";
    this.newstatusresponse.nativeElement.value = "";
  }

  more() {
    this.showmore = true;
  }

  less() {
    this.showmore = false;
  }

  toggle(){
    this.showmore=!this.showmore;
  }

}
