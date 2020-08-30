import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSnakeToCamelComponent } from './ngx-snake-to-camel.component';

describe('NgxSnakeToCamelComponent', () => {
  let component: NgxSnakeToCamelComponent;
  let fixture: ComponentFixture<NgxSnakeToCamelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxSnakeToCamelComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSnakeToCamelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
