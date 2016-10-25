import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {IEvents} from '../models/IEvents';

@Injectable()
export class EventsEndpointService {
  private API_PATH: string = 'http://rockparade.creora.ru/api/events';

  constructor(private http: Http) { }

  loadEvents(params?: {limit: number, offset: number}): Observable<IEvents> {
    return this.http.get(`${this.API_PATH}${params ? `/${params.limit}/${params.offset}` : ''}`)
        .map(res => res.json());
  }

}
