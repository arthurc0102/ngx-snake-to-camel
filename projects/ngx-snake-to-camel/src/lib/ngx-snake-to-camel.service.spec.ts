import { TestBed } from '@angular/core/testing';

import { NgxSnakeToCamelService } from './ngx-snake-to-camel.service';

describe('NgxSnakeToCamelService', () => {
  let service: NgxSnakeToCamelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSnakeToCamelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
