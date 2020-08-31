import { TestBed } from '@angular/core/testing';

import { SnakeToCamelInterceptor } from './snake-to-camel.interceptor';

describe('SnakeToCamelInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [SnakeToCamelInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: SnakeToCamelInterceptor = TestBed.inject(
      SnakeToCamelInterceptor,
    );
    expect(interceptor).toBeTruthy();
  });
});
