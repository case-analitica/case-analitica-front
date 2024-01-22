import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { Instrument } from 'src/model/instrument/instrument.model';


@Injectable({
  providedIn: 'root'
})
export class InstrumentService {

  private readonly API = `${environment.urlApi}/instrument`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&pageIndex=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(instruments => console.log(instruments))
      );

  }

  public getOne(id: number) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  public update(data: Instrument) {
    return this.httpClient.patch(`${this.API}`, data);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  public save(instrument: any) {
    return this.httpClient.post(`${this.API}`, instrument);
  }

}
