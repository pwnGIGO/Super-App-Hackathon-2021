import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../servicios/http.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss'],
})
export class MenuPrincipalComponent implements OnInit {
  elementos;

  constructor(
    private http: HttpService
  ) { }

  ngOnInit() {
    this.http.obtenerJSONlocal('elementos-menu.json').subscribe(
      (res) => {
        this.elementos = res;
      }
    ); 
  }

}
