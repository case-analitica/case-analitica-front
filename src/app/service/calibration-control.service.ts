import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { CalibrationControl } from 'src/model/calibration/calibration-control.model';

@Injectable({
  providedIn: 'root'
})
export class CalibrationControlService {

  private readonly API = `${environment.urlApi}/calibration-control`;

  constructor(private httpClient: HttpClient) {

  }

  public getAll(filterName: string, filterValue: string, pageIndex: number, sort: string, direction: string, pageSize: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}?filterName=${filterName}&filterValue=${filterValue}&page=${pageIndex}&sort=${sort}&direction=${direction}&pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(calibrations => console.log(calibrations))
      );
  }

  public getOne(id: number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}/${id}`)
      .pipe(
        first(),
        tap(calibration => console.log(calibration))
      );
  }

  public update(calibrationControl: CalibrationControl) {
    return this.httpClient.patch(`${this.API}`, calibrationControl)
      .pipe(
        first(),
        tap(calibrationControl => console.log(calibrationControl))
      );;
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
      .pipe(
        first(),
        tap(calibrationControl => console.log(calibrationControl))
      );
  }

  public save(calibrationControl: CalibrationControl) {
    return this.httpClient.post(`${this.API}`, calibrationControl)
      .pipe(
        first(),
        tap(calibrationControl => console.log(calibrationControl))
      );
  }

}
