import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
import { } from '@types/googlemaps';

/**
 * Generated class for the GooglemapsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'googlemaps',
  templateUrl: 'googlemaps.html'
})
export class GooglemapsComponent {

  text: string;
  map:any;

  @ViewChild('map') mapElement;

  constructor(private plat:Platform) {

  }

  ngOnInit()
  {
    this.plat.ready().then(()=>{
      this.loadMap();

    });
  }

  loadMap()
  {
    let coords = new google.maps.LatLng(33.6067166, -7.6555274);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions)

    let marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: coords
    })

  }


}
