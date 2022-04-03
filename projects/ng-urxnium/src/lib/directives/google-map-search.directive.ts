import { AfterViewInit, Directive, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '../interfaces/address';

declare var google: any;

@Directive({
  selector: '[googleMapsSearch]'
})
export class GoogleMapSearchDirective implements AfterViewInit {

  @Input() country: string;

  @Output() selectAddress: EventEmitter<Address>;

  constructor(private elementRef: ElementRef) {
    this.selectAddress = new EventEmitter<any>();
  }

  ngAfterViewInit(): void {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(
      this.elementRef.nativeElement,
      {
        componentRestrictions: { country: this.country ? this.country : 'MX' },
        types: ['geocode', 'establishment']
      }
    );

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.selectAddress.emit(new Address(place));
    });
  }

}
