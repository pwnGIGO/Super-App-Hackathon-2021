import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  rutaLocal = "assets/archivos_JSON/";
  rutaRemota = ""; //POR DEFINIR

  
  obtenerJSONlocal(json: string) {
    return this.http.get(this.rutaLocal + json);
  }

  obtenerJSONremoto(url: string) {
    return this.http.get(this.rutaRemota + url);
  }

  login(datosUsuario: any){
    const path = 'https://api-g1.herokuapp.com/auth/v1/login';

    return this.http.post<any>(path, datosUsuario);
  }

  vinculaTarjeta(datos: any){
    const path = 'https://api-g1.herokuapp.com/auth/v1/sincroniza/tarjetametro';
    console.log("VA a guardar");
    console.log(datos);
    return this.http.post<any>(path, datos);
  }
}
