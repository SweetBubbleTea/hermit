import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingsComponent } from './postings.component';

describe('PostingsComponent', () => {
  let component: PostingsComponent;
  let fixture: ComponentFixture<PostingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostingsComponent]
    });
    fixture = TestBed.createComponent(PostingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
