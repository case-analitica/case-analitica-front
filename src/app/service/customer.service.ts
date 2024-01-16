import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from 'src/model/address/address.model';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { Customer } from 'src/model/customer/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API = `${environment.urlApi}/customer`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&pageIndex=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap((customers: any) => console.log(customers))
      );

  }

  public getOne(id: number) {
    return this.httpClient.get(`${this.API}/${id}`);
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`);
  }

  public save(address: Address) {
    return this.httpClient.post(`${this.API}`, address);
  }

  public update(address: Address) {
    return this.httpClient.patch(`${this.API}`, address);
  }

}
