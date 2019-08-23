import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { SearchService } from './search.service';
import { Subscription } from 'rxjs';

import { DeputiesInfo, Filter } from '../../model';

import * as mock from '../../../mocks/deputies';
import { HttpRequest } from '@angular/common/http';

describe('SearchService', () => {
  let httpTestingController: HttpTestingController;
  let searchService: SearchService;
  let subscription$: Subscription;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SearchService]
    });

    searchService = TestBed.get(SearchService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();

    if (subscription$) {
      subscription$.unsubscribe();
    }
  });

  describe('getDeputies()', () => {
    it('should create a request without params when no one is provided', (done: DoneFn) => {
      subscription$ = searchService.getDeputies().subscribe(() => done());

      httpTestingController.expectOne((req: HttpRequest<any>) => {
        expect(req.params.keys().length).toBe(0);
        return true;
      }).flush(mock.deputiesInfoList);
    });

    it('should create a request with name as params', (done: DoneFn) => {
      const filter: Filter = { name: mock.name };
      subscription$ = searchService.getDeputies(filter).subscribe(() => done());

      httpTestingController.expectOne((req: HttpRequest<any>) => {
        expect(req.params.has('name')).toBe(true);
        expect(req.params.get('name')).toBe(mock.name);
        return true;
      }).flush(mock.deputiesInfoList);
    });


    it('should get a list of deputies with length of 2', () => {
      const filter: Filter = { name: mock.name };

      subscription$ = searchService.getDeputies(filter).subscribe((deputiesInfo: DeputiesInfo[]) => {
        expect(deputiesInfo.length).toBe(2);
      });

      const httpRequest = httpTestingController.expectOne(`${searchService.API_URL}?name=${mock.name}`);
      expect(httpRequest.request.method).toBe('GET');

      httpRequest.flush(mock.deputiesInfoList);
    });

    it('should get a list of deputies with all properties of Deputies Info', () => {
      const filter: Filter = { name: mock.name };

      subscription$ = searchService.getDeputies(filter).subscribe((deputiesInfo: DeputiesInfo[]) => {
        deputiesInfo.forEach((deputieInfo: DeputiesInfo) => {
          expect(deputieInfo.email).toBeDefined();
          expect(deputieInfo.id).toBeDefined();
          expect(deputieInfo.idLegislatura).toBeDefined();
          expect(deputieInfo.nome).toBeDefined();
          expect(deputieInfo.siglaPartido).toBeDefined();
          expect(deputieInfo.siglaUf).toBeDefined();
          expect(deputieInfo.uri).toBeDefined();
          expect(deputieInfo.uriPartido).toBeDefined();
          expect(deputieInfo.urlFoto).toBeDefined();
        });
      });

      // We should append the query params(?name=...) because when .expectOne is used httpTestingController
      // append any parameters found
      const httpRequest = httpTestingController.expectOne(`${searchService.API_URL}?name=${mock.name}`);
      expect(httpRequest.request.method).toBe('GET');

      httpRequest.flush(mock.deputiesInfoList);
    });

    it('should return an empty DeputiesInfo array when system throws an exception', () => {
      const filter: Filter = { name: mock.name };
      const errorMessage = new ErrorEvent('NetworkError', {
        message: mock.errorMessage,
      });

      subscription$ = searchService.getDeputies(filter).subscribe((deputiesInfo: DeputiesInfo[]) => {
        expect(deputiesInfo.length).toBe(0);
      });

      const httpRequest = httpTestingController.expectOne(`${searchService.API_URL}?name=${mock.name}`);

      httpRequest.error(errorMessage);
    });

    it('should return an empty DeputiesInfo array if no result is returned', () => {
      const filter: Filter = { name: mock.name };

      subscription$ = searchService.getDeputies(filter).subscribe((deputiesInfo: DeputiesInfo[]) => {
        expect(deputiesInfo.length).toBe(0);
      });

      const httpRequest = httpTestingController.expectOne(`${searchService.API_URL}?name=${mock.name}`);

      httpRequest.flush({});
    });
  });
});
