import { Meta } from '@angular/platform-browser';
export interface ApiResponse {

  code: number;
  status: string;
  message: string;
  meta: Meta;
  data: any[];
}
