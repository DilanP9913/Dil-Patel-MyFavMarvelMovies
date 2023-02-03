import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content = [{
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
      type: "Sci-fi",
      tags: ["Sci-Fi", "magic", "action"]
    },{
      id: 2,
      title: 'Spiderman',
      description: "Spider powersuit",
      creator: "Stan Lee",
      imgURL: "https://www.marvel.com/characters/spider-man-peter-parker",
      type: "Comedy",
      tags: ["action", "Sci-fi", "fight"]
    }
    ];
 showIDAndTitle(id: number, title:string){
   console.log('Content id: ${id}, title: ${title}');
 }
 constructor() {
 }
 ngOnInit() {
 }
}
