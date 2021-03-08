import { Component, Input } from '@angular/core';
import { IAnswer, PostingService } from '../posting.service';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent {
  @Input() answerData: IAnswer;

  constructor(public postingService: PostingService) {

  }


}
