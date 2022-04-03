import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { GoogleMapsService } from '../services/google-maps.service';
import { Address } from '../interfaces/address';

declare var google: any;

@Directive({
  selector: '[googleMap]'
})
export class GoogleMapDirective implements AfterViewInit, OnChanges {

  @Input() lat: number;
  @Input() lng: number;
  @Input() zoom: number;
  @Input() viewMode: boolean;
  @Input() markerIcon: string;
  @Input() disableDefaultUI: boolean;
  @Input() zoomControl: boolean;
  @Input() mapTypeControl: boolean;
  @Input() scaleControl: boolean;
  @Input() streetViewControl: boolean;
  @Input() rotateControl: boolean;
  @Input() fullscreenControl: boolean;
  @Input() mapId: string;

  @Output() selectAddress: EventEmitter<Address>;

  private marker: any;
  private map: any;

  constructor(
    private elementRef: ElementRef,
    private googleMapsService: GoogleMapsService
  ) {
    this.selectAddress = new EventEmitter<any>();
  }

  ngAfterViewInit() {
    const element = this.elementRef.nativeElement;

    this.map = new google.maps.Map(element, {
      center: {
        lat: this.lat ? this.lat : 34.1330949,
        lng: this.lng ? this.lng : -117.9143879
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
        lat: this.lat ? this.lat : 34.1330949,
        lng: this.lng ? this.lng : -117.9143879
      },
      map: this.map,
      draggable: !this.viewMode,
      icon: this.markerIcon ? this.markerIcon :
        'https://firebasestorage.googleapis.com/v0/b' +
        '/my-project-1569793268776.appspot.com/o/' +
        'assets%2Fsvg%2Fmap-marker.svg?alt=media&' +
        'token=49d2f913-295b-464e-876e-713ccb9b8508'
    });

    if (!this.viewMode) {
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
    }

    element.style.width = '100%';
    element.style.height = '100%';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!(changes['lat']?.firstChange && changes['lng'])) {
      this.marker?.setPosition({ lat: changes['lat'].currentValue, lng: changes['lng'].currentValue });
      this.map?.setCenter({ lat: changes['lat'].currentValue, lng: changes['lng'].currentValue });
    }
  }

  private findAddressByLatLng(lat: number, lng: number): void {
    this.googleMapsService.findAddressByLatLng(lat, lng).subscribe(
      resp => {
        this.selectAddress.emit(
          new Address(
            {
              ...resp.results[0],
              lat,
              lng
            },
            true
          )
        );
      }, _ => { }
    );
  }

}
