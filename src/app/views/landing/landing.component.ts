import { Component, OnInit } from '@angular/core';
import Mapboxgl from 'mapbox-gl';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls:['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    Mapboxgl.accessToken = environment.mapBoxKey;
    const map = new Mapboxgl.Map({
      container: 'map_mapbox', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-73.77153350120048, 3.9864402037157625], // starting posit  ion [lng, lat]
      zoom: 15, // starting zoom
      projection: 'globe' // display the map as a 3D globe
    });
    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });
    const marker1 = new Mapboxgl.Marker()
      .setLngLat([-73.77153350120048, 3.9864402037157625])
      .addTo(map);
  }
}
