import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/model/api-model/api-response.model';
import { CalibrationProgram } from 'src/model/calibration/calibration-program.model';

@Injectable({
  providedIn: 'root'
})
export class CalibrationProgramService {

  private readonly API = `${environment.urlApi}/calibration-program`;

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

  public update(calibrationProgram: CalibrationProgram) {
    return this.httpClient.patch(`${this.API}`, calibrationProgram)
      .pipe(
        first(),
        tap(calibrationProgram => console.log(calibrationProgram))
      );;
  }

  public delete(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`)
      .pipe(
        first(),
        tap(calibrationProgram => console.log(calibrationProgram))
      );
  }

  public save(calibrationProgram: CalibrationProgram) {
    return this.httpClient.post(`${this.API}`, calibrationProgram)
      .pipe(
        first(),
        tap(calibrationProgram => console.log(calibrationProgram))
      );
  }

}
