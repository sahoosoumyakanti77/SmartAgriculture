import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Crop } from './crop';

@Injectable({
  providedIn: 'root'
})
export class CropService {
  static getCropById(id: number): Crop {
    throw new Error('Method not implemented.');
  }
  static updateCrop(existingCrop: Crop) {
    throw new Error('Method not implemented.');
  }

  private createsCropUrl="http://localhost:8087/regis";
  private viewCrops="http://localhost:8087/viewAllCrop";
  constructor(private httpClient: HttpClient) { }
  createCrop(cropData:Crop):Observable<any>
  {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.createsCropUrl}`,cropData ,{ headers });
  }

  getCropList(): Observable<Crop[]>
  {
    return this.httpClient.get<Crop[]>(`${this.viewCrops}`);
  }
}
