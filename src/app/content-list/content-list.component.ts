import { Component, OnInit } from '@angular/core';
import {Content} from '../helper-files/content-interface';
@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myanime:Content[];

  constructor() {
    this.myanime = [{
      id: 0,
      title: 'Fullmetal Alchemist (TV)',
      description: "Swords and Robots",
      creator: "ODA",
      imgURL: "https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNi00ZDYzLTlhMTQtMjkzZTA2MWQ4NjA0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      type: "action",
      tags: ['action', "brotherhood", "robots"]
    },{
      id: 1,
      title: 'Demon Slayer: Kimetsu no Yaiba',
      description: "Swords",
      creator: "Zankyō Sanka",
      imgURL: "https://m.media-amazon.com/images/M/MV5BMGY3Mzg3M2UtNzYxNi00ZDYzLTlhMTQtMjkzZTA2MWQ4NjA0XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
      type: "action",
      tags: ["action", "drama", "sisterlove"]
    },{
      id: 2,
      title: 'My Hero Academia',
      description: "Heros VS Villans",
      creator: "ODA",
      imgURL: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/SPESite_Key%20Art.png?itok=DVC7Qgz0",
      type: "Yōsuke Kuroda",
      tags: ["action", "animations", "fight"]
    }
    ]
  }

  ngOnInit(): void {
  }

}
