import { AfterViewInit, Directive, ElementRef, Input, SimpleChanges } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';
import { Address } from '../interfaces/address';
import { NgControl } from '@angular/forms';

declare var google: any;

@Directive({
  selector: '[inputGoogleMap]'
})
export class InputGoogleMapDirective implements AfterViewInit {

  @Input() zoom: number;
  @Input() markerIcon: string;
  @Input() disableDefaultUI: boolean;
  @Input() zoomControl: boolean;
  @Input() mapTypeControl: boolean;
  @Input() scaleControl: boolean;
  @Input() streetViewControl: boolean;
  @Input() rotateControl: boolean;
  @Input() fullscreenControl: boolean;
  @Input() mapId: string;

  private marker: any;
  private map: any;

  constructor(
    private elementRef: ElementRef,
    private googleMapsService: GoogleMapsService,
    private formControl: NgControl
  ) { }

  ngAfterViewInit() {
    const input = this.elementRef.nativeElement;
    const element = document.createElement('div');
    const value = this.formControl.control.value;
    input.before(element);
    input.style.display = 'none';
    element.style.width = '100%';
    element.style.height = '100%';

    this.map = new google.maps.Map(element, {
      center: {
        lat: value.lat ? value.lat : 34.1330949,
        lng: value.lng ? value.lng : -117.9143879
      },
      zoom: this.zoom ? this.zoom : 18,
      draggableCursor: 'default',
      zoomControl: this.zoomControl ? this.zoomControl : false,
      mapTypeControl: this.mapTypeControl ? this.mapTypeControl : false,
      scaleControl: this.scaleControl ? this.scaleControl : false,
      streetViewControl: this.streetViewControl ? this.streetViewControl : false,
      rotateControl: this.rotateControl ? this.rotateControl : false,
      fullscreenControl: this.fullscreenControl ? this.fullscreenControl : false,
      disableDefaultUI: this.disableDefaultUI ? this.disableDefaultUI : false,
      mapId: this.mapId ? this.mapId : ''
    });

    this.marker = new google.maps.Marker({
      position: {
        lat: value.lat ? value.lat : 34.1330949,
        lng: value.lng ? value.lng : -117.9143879
      },
      map: this.map,
      draggable: true,
      icon: this.markerIcon ? this.markerIcon :
        'https://firebasestorage.googleapis.com/v0/b' +
        '/my-project-1569793268776.appspot.com/o/' +
        'assets%2Fsvg%2Fmap-marker.svg?alt=media&' +
        'token=49d2f913-295b-464e-876e-713ccb9b8508'
    });

    this.findAddressByLatLng(
      value.lat ? value.lat : 34.1330949,
      value.lng ? value.lng : -117.9143879,
      true
    );

    google.maps.event.addListener(this.map, 'click',(event) => {
      this.marker.setPosition(event.latLng);
      this.findAddressByLatLng(
        event.latLng.lat(),
        event.latLng.lng()
      );
    });

    google.maps.event.addListener(this.marker, 'dragend', (event) => {
      this.findAddressByLatLng(
        event.latLng.lat(),
        event.latLng.lng()
      );
    });

    this.formControl.control.valueChanges.subscribe(resp => {
      const latLng = new google.maps.LatLng(resp.lat, resp.lng);
      this.marker.setPosition(latLng);
      this.findAddressByLatLng(resp.lat, resp.lng, true);
    });
  }

  private findAddressByLatLng(lat: number, lng: number, noEmit?: boolean): void {
    this.googleMapsService.findAddressByLatLng(lat, lng).subscribe(
      resp => {
        this.formControl.control.setValue(
          new Address(
            {
              ...resp.results[0],
              lat,
              lng
            },
            true
          ),
          { emitEvent: !noEmit }
        );
      }, _ => { }
    );
  }

}
