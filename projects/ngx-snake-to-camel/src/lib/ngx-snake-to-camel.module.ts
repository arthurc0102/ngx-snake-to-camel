import { NgModule, ModuleWithProviders } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

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
          useClass: NgxSnakeToCamelModule,
          multi: true,
        },
      ],
    };
  }
}
