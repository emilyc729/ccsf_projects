import { Injectable } from '@angular/core';
import { Event } from './event';
import { Events } from './list-events';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private messageService: MessageService) { }

  getEvents(): Observable<Event[]> {
    this.messageService.add('EventService: event fetched');
    return of(Events);
  }

  getEvent(id: number): Observable<Event> {
    this.messageService.add(`EventService: event id=${id} fetched`);
    return of(Events.find(event => event.id === id));
  }
}
