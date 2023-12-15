import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsRoomtypeComponent } from './search-results-roomtype.component';

describe('SearchResultsRoomtypeComponent', () => {
  let component: SearchResultsRoomtypeComponent;
  let fixture: ComponentFixture<SearchResultsRoomtypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchResultsRoomtypeComponent]
    });
    fixture = TestBed.createComponent(SearchResultsRoomtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
