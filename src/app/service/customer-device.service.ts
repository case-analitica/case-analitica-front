import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { CustomerDevice } from 'src/model/customer-device/customer-device.model';
import { Device } from 'src/model/device/device.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerDeviceService {

  private readonly API = `${environment.urlApi}/customer-device`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&pageIndex=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(devices => console.log(devices))
      );

  }

  public getOne(id: number) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  public update(id: number, data: CustomerDevice) {
    return this.httpClient.patch(`${this.API}/${id}`, data);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  public save(device: any) {
    return this.httpClient.post(`${this.API}`, device);
  }

}
