import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  rutaLocal = "assets/Archivos JSON/";
  rutaRemota = ""; //POR DEFINIR

  
  obtenerJSONlocal(json: string) {
    return this.http.get(this.rutaLocal + json);
  }

  obtenerJSONremoto(url: string) {
    return this.http.get(this.rutaRemota + url);
  }
}
