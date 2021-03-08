import { Component, ElementRef, ViewChild } from '@angular/core';
import { IPost, PostingService } from '../posting.service';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent {
  @ViewChild("newnickname", { static: false }) newnickname: ElementRef<HTMLInputElement>;
  @ViewChild("newstatus", { static: false }) newstatus: ElementRef<HTMLInputElement>;

  constructor(public postingService: PostingService, public elementRef: ElementRef) { }

  posten() {
    let post:IPost = {
      nickname: this.newnickname.nativeElement.value,
      status: this.newstatus.nativeElement.value,
      answers:[],
    }
    this.postingService.postList.push(post);
    console.log(this.postingService.postList);
    this.clear();
  }

  clear() {
    this.newnickname.nativeElement.value = "";
    this.newstatus.nativeElement.value = "";
  }

}
