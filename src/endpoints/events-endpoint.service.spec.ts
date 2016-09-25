/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EventsEndpointService } from './events-endpoint.service';

describe('Service: EventsEndpoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsEndpointService]
    });
  });

  it('should ...', inject([EventsEndpointService], (service: EventsEndpointService) => {
    expect(service).toBeTruthy();
  }));
});
