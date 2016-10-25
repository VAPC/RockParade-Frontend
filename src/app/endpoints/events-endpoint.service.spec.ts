/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { EventsEndpointService } from './events-endpoint.service';
import {XHRBackend, HttpModule} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('Service: EventsEndpoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule ],
      providers: [EventsEndpointService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should ...', inject([EventsEndpointService], (service: EventsEndpointService) => {
    expect(service).toBeTruthy();
  }));
});
