import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DislikedPostsComponent } from './disliked-posts.component';

describe('DislikedPostsComponent', () => {
  let component: DislikedPostsComponent;
  let fixture: ComponentFixture<DislikedPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DislikedPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DislikedPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
