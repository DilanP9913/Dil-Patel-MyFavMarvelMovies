import { TestBed } from '@angular/core/testing';

import { MarvelMoviesService } from './marvel-movies.service';

describe('MarvelMoviesService', () => {
  let service: MarvelMoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarvelMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
