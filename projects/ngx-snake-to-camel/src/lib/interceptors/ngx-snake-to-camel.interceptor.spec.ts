import { TestBed } from '@angular/core/testing';

import { NgxSnakeToCamelInterceptor } from './ngx-snake-to-camel.interceptor';

describe('NgxSnakeToCamelInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [NgxSnakeToCamelInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: NgxSnakeToCamelInterceptor = TestBed.inject(
      NgxSnakeToCamelInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});
