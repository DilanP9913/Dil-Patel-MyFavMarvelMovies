import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { content } from './helper-files/contenDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelMoviesService {
  private contentUrl = 'api/content';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private messages: MessageService, private http: HttpClient) { }
  private log(message: string) {
    console.log(`MarvelMoviesService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getContentArray(): Observable<any[]> {
    this.messages.add('Content array loaded!');
    return of(content);
  }

  getContentById(id: number): Observable<any> {
    const x = content.find(item => item.id === id);
    this.messages.add(`Content Item at id: ${x?.id}`);
    return of(x);
  }
  addContent({ title, description }: { title: string; description: string; }): Observable<Content> {
    const newContent: Content = {
      //id: null,
      title: title,
      description: description,
    };
    return this.http.post<Content>(this.contentUrl, newContent, this.httpOptions).pipe(
      tap((content: Content) => this.log(`added content with id ${content.id}`)),
      catchError(this.handleError<Content>('addContent'))
    );
  }

  updateContent(content: any): Observable<any> {
    const index = content.findIndex(content.id === content.id);
    content[index] = content;
    this.messages.add(`Content item with id ${content.id} updated!`);
    return of(content);
  }
}
