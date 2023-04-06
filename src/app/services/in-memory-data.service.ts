import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService{

  constructor() { }

  createDb() {
    const content : Content[] = [
      {
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
    ];
    return {content};
  }
  etContentById(content: Content[]): number {
    const maxId = content.length > 0 ? Math.max(...content.map(content => content.id || 0)) : 0;
    return maxId + 1;
  }
}
