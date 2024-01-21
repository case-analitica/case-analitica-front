import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { Device } from 'src/model/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  private readonly API = `${environment.urlApi}/device`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&page=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(devices => console.log(devices))
      );

  }

  public getOne(id: number) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  public update(device: Device) {
    return this.httpClient.patch(`${this.API}`, device);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  public save(device: any) {
    return this.httpClient.post(`${this.API}`, device);
  }

}
