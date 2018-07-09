import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  path: string;

  getItems() {
    this.path = environment.catalogEndpoint+'api/v1/items';
    return this.http.get("/api/v1/items");
  }
}
