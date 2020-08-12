import { Injectable } from '@angular/core';
import { Nzedb } from '../interface/nzedb';

@Injectable({
  providedIn: 'root',
})
export class RssService {
  constructor() { }

  getRSSByCat(): Nzedb {
    return {} as Nzedb;
  }
}
