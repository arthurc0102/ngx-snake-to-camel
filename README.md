# NgxSnakeToCamel

This is a interceptor for angular to convert http response body from snake to camel case and convert http request body from camel to snake case.

## Install

```
npm install ngx-snake-to-camel
```

## Use

```typescript
import { NgModule } from '@angular/core';

import { NgxSnakeToCamelModule } from 'ngx-snake-to-camel';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    NgxSnakeToCamelModule.forRoot(), // Add this
    ...
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
