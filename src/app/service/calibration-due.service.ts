import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';

@Injectable({
  providedIn: 'root'
})
export class CalibrationDueService {

  private readonly API = `${environment.urlApi}/calibration-due`;

  constructor(private httpClient: HttpClient) {

  }

  public getCalibrationDueInCurrentMonth() {
    return this.httpClient.get<ApiResponse[]>(`${this.API}/month`)
      .pipe(
        first(),
        tap(calibrations => console.log(calibrations))
      );
  }

  public getCalibrationDueInCurrentYear(pageSize:number) {
    return this.httpClient.get<ApiResponse[]>(`${this.API}/year?pageSize=${pageSize}`)
      .pipe(
        first(),
        tap(calibrations => console.log(calibrations))
      );
  }

}
