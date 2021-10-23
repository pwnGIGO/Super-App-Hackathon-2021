import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { Map, tileLayer, marker, circle, icon, geoJson } from 'leaflet';
import { AlertController, NavController } from '@ionic/angular';
import { HttpService } from '../../servicios/http.service';

declare var L: any;

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})

export class MapaComponent implements OnInit {
   /*********************
   * Variables globales *
   **********************/
   map;
   marker: any;
   icon: any;
   geojsonlayer: any;
   circleMarker: any;
   url_icono = 'assets/icon/Marcador ';

   @ViewChild("map")
   public mapElement: ElementRef;

   @Input()
   public appId: any;

   @Input()
   public appCode: any;

   @Input()
   public lat: any;

   @Input()
   public lng: any;

   gas;

   public constructor(
     private alertCtrl: AlertController,
     private navCtrl: NavController,
     private http: HttpService
     ) { }

   public ngOnInit() { }
   public ngAfterViewInit() {

     this.map = L.map(this.mapElement.nativeElement, {
       center: [19.3623615, -99.0750402],
       zoom: 14,
       layers: [L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")],
       zoomControl: true
     });
     

     setTimeout(() => {
       this.map.invalidateSize();
     }, 1000);

     // Leyenda.
     var leyenda = L.control({position: 'bottomright'});
     /*leyenda.onAdd = function (map) {
       var div = L.DomUtil.create('div', 'info leyenda');    

       div.innerHTML +=
       '<img alt="legend" src="./assets/icon/leyenda.png" width="150" height="101" />';

       return div;
     };
     leyenda.addTo(this.map);
     */
     this.cargaIconos();
   }

   cargaIconos(){
     fetch("https://api.datos.gob.mx/v1/precio.gasolina.publico")
     .then((res) => res.json())
     .then((data) => {
       data.results.forEach((value) => {
         // recorre todos los cuestionarios
         try {
           L.marker([value.latitude, value.longitude]).addTo(this.map).bindPopup('Gasolina').openPopup(); 
         } catch (error) {
           //console.log("Hubo un error al cargar los marcadores")
         }
       });
     });
   }
 }