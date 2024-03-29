import { Component, Input } from '@angular/core';
import { PostingService } from 'src/app/services/posting.service';

@Component({
  selector: 'app-post-type',
  templateUrl: './post-type.component.html',
  styleUrls: ['./post-type.component.css']
})
export class PostTypeComponent {

  postingService: PostingService;

  constructor() {
    this.postingService = new PostingService();
  }
}
