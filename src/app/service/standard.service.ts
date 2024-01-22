import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { Standard } from 'src/model/standard/standard.model';

@Injectable({
  providedIn: 'root'
})
export class StandardService {

  private readonly API = `${environment.urlApi}/standard`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&page=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(standards => console.log(standards))
      );

  }

  public getOne(id: number) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  public update(standard: Standard) {
    return this.httpClient.patch(`${this.API}`, standard);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  public save(standard: any) {
    return this.httpClient.post(`${this.API}`, standard);
  }

}
