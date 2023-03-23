import { Component, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TmplAstBoundText } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { content } from '../helper-files/ContenDb';
import { MarvelMoviesService } from '../marvel-movies.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  
  selectedContent: any;
  inputId: number;

  content: Content[] = [];

  // public inputvalue?: Optional;
  constructor(private marvelMoviesService: MarvelMoviesService, private messages: MessageService) {}
    ngOnInit(): void {
      this.marvelMoviesService.getContentArray().subscribe((data: any[]) => {
        this.content = data;
      });
        this.marvelMoviesService.getContentById(2).subscribe((data: any) => {
          this.selectedContent = data;  
 });
  }
  onButtonClick(): void {
    if (typeof this.inputId === 'number' && this.inputId >= 0 && this.inputId < content.length) {
      this.messages.add('Content array loaded!');
      this.marvelMoviesService.getContentById(this.inputId).subscribe((data: any) => {
        
        this.selectedContent = data;
      });
    } else {
      this.messages.add('Error: Invalid input or ID out of range.');
    }
  }
}
  // clickEvent(inputvalue: any): any {

  //   for(let i = 0;  i < this.content.length; i++) {
  //    console.log(this.content[i].type);

  //     if(this.content[i].type == inputvalue){
  //    let abj =  <HTMLInputElement>document.getElementById('aut');
  //      abj.innerHTML = 'we found the item with other';
  //     }
     
  //   }
  //   let abj =  <HTMLInputElement>document.getElementById('aut');
  //   if(!abj.innerHTML){
  //            abj.innerHTML = 'we can not find the other';

  //   }
  // }}
  