import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { content } from './helper-files/contenDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MarvelMoviesService {

  constructor(private messages: MessageService) { }

  getContentArray(): Observable<any[]> {
    this.messages.add('Content array loaded!');
    return of(content);
  }

  getContentById(id: number): Observable<any> {
    const x = content.find(item => item.id === id);
    this.messages.add(`Content Item at id: ${x?.id}`);
    return of(x);
  }
}
