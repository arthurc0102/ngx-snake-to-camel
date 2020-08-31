import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgxSnakeToCamelInterceptor } from './interceptors/ngx-snake-to-camel.interceptor';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class NgxSnakeToCamelModule {
  constructor() {}

  static forRoot(): ModuleWithProviders<NgxSnakeToCamelModule> {
    return {
      ngModule: NgxSnakeToCamelModule,
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: NgxSnakeToCamelInterceptor,
          multi: true,
        },
      ],
    };
  }
}
