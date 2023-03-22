import { Component, NgModule, OnInit, Optional } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CreateContentComponent } from '../create-content/create-content.component';
import { TmplAstBoundText } from '@angular/compiler';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  
  public content: Content[];
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
    type: "drama",
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
    type: "drama",
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
  clickEvent(): any {
  
    for(let i = 0;  i < this.content.length; i++) {
     console.log(this.content[i].type);
     let abj =  <HTMLInputElement>document.getElementById('aut');   
     console.log(abj.value);
     if(this.content[i].type === abj.value){
       let out= <HTMLInputElement>document.getElementById('msg');
        out.innerHTML = 'we found the item with other';
      }
    }
  }
  
  filteredContents: Content[] = [];
  filterText: string='';
  errorMessage: string='';

  onContentCreated(content: Content) {
    this.addContent(content)
      .then(() => {
        console.log(`Successfully added ${content.title}.`);
        this.errorMessage = '';
      })
      .catch(() => {
        console.error(`Failed to add ${content.title}.`);
        this.errorMessage = 'Failed to add content.';
      });
  }

  addContent(content: Content): Promise<void> {
    return new Promise((resolve, reject) => {
      const requiredFields = ['id', 'title', 'description', 'creator'];
      const missingFields = requiredFields.filter(type => !content[type]);
      if (missingFields.length > 0) {
        reject();
        this.errorMessage = `Please fill in the required fields: ${missingFields.join(', ')}.`;
        return;
      }
      const existingContent = this.content.find(c => c.id === content.id);
      if (existingContent) {
        reject();
        this.errorMessage = `Content with ID ${content.id} already exists.`;
        return;
      }
      const clonedContent = { ...content };
      this.content.push(clonedContent);
      this.filterContents();
      resolve();
    });
  }

  filterContents() {
    this.filteredContents = this.content.filter(content => {
      const filterText = this.filterText ? this.filterText.toLowerCase() : '';
      const contentTitle = content.title.toLowerCase();
      const contentDescription = content.description.toLowerCase();
      return contentTitle.includes(filterText) || contentDescription.includes(filterText);
    });
  }
  
}