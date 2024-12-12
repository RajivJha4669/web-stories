/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WebstoriesComponent } from './webstories.component';

describe('WebstoriesComponent', () => {
  let component: WebstoriesComponent;
  let fixture: ComponentFixture<WebstoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebstoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebstoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
