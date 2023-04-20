import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MessageService } from '../message.service';
import { Content } from '../helper-files/content-interface';


@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  constructor(private contentService: ContentService, private messageService: MessageService, private route: ActivatedRoute) { }
  content: Content = null;
  const id = this.route.snapshot.paramMap.get('id');
  this.contentService.getContent(id).subscribe(content => {
    this.content = content;}
    this.messageService.add(`Content retrieved: id=${this.content.id}, title=${this.content.title}`);

}
