import { Component, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { TmplAstBoundText } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  content: Content[];
  public inputvalue?: Optional;
  constructor() {
  this.content = [{
    id: 0,
    title: 'IronMan',
    description: "Armour Power",
    creator: "Stan lee",
    imgURL: "https://www.marvel.com/comics/issue/101529/iron_man_2022_1",
    type: "action",
    tags: ['action', "A.I", "robots"]
  },{
    id: 1,
    title: 'Dr. Strange',
    description: "Magic",
    creator: "Stan Lee",
    imgURL: "https://ultimate-marvel-cinematic-universe.fandom.com/wiki/Doctor_Strange",
    type: "Sci-fi | drama",
    tags: ["Sci-Fi", "magic", "action"]
  },{
    id: 2,
    title: 'Spiderman',
    description: "Spider powersuit",
    creator: "Stan Lee",
    imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
    //type: "Comedy",
    tags: ["action", "Sci-fi", "fight"]
  }
  ,{
    id: 3,
    title: 'Spiderman',
    description: "Spider powersuit",
    creator: "Stan Lee",
    imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
    //type: "Comedy",
    tags: ["action", "Sci-fi", "fight"]
  }
  ,{
    id: 4,
    title: 'Spiderman',
    description: "Spider powersuit",
    creator: "Stan Lee",
    imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
    type: "Comedy",
    tags: ["action", "Sci-fi", "fight"]
  }
  ,{
    id: 5,
    title: 'Spiderman',
    description: "Spider powersuit",
    creator: "Stan Lee",
    imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
    type: "Comedy | drama",
    tags: ["action", "Sci-fi", "fight"]
  }
  ,{
    id: 6,
    title: 'Spiderman',
    description: "Spider powersuit",
    creator: "Stan Lee",
    imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
    type: "Comedy",
    tags: ["action", "Sci-fi", "fight"]
  }
]
this.inputvalue ="";
}
    ngOnInit(): void {
  }
  clickEvent(inputvalue: any): any {

    for(let i = 0;  i < this.content.length; i++) {
     console.log(this.content[i].type);

      if(this.content[i].type == inputvalue){
     let abj =  <HTMLInputElement>document.getElementById('aut');
       abj.innerHTML = 'we found the item with other';
      }
     
    }
    let abj =  <HTMLInputElement>document.getElementById('aut');
    if(!abj.innerHTML){
             abj.innerHTML = 'we can not find the other';

    }
  }
}