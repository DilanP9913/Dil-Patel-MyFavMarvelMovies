import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  content: Content[];
  
  constructor() {
  this.content = [{
    id: 0,
    title: 'IronMan',
    description: "Armour Power",
    creator: "Stan lee",
    imgURL: "https://www.marvel.com/comics/issue/101529/iron_man_2022_1",
    type: "action | Sci-fi ",
    tags: ['action', "A.I", "robots"]
  },{
    id: 1,
    title: 'Dr. Strange',
    description: "Magic",
    creator: "Stan Lee",
    imgURL: "https://ultimate-marvel-cinematic-universe.fandom.com/wiki/Doctor_Strange",
    type: "Sci-fi | Drama",
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
    type: "Comedy | Drama",
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
}
    ngOnInit(): void {
  }
}