import { NgModule } from '@angular/core';
import { GoogleMapDirective } from '../directives/google-map.directive';
import { GoogleMapsService } from '../services/google-maps.service';
import { HttpClientModule } from '@angular/common/http';
import { GoogleMapSearchDirective } from '../directives/google-map-search.directive';
import { InputGoogleMapDirective } from '../directives/input-google-map.directive';
import { InputGoogleMapSearchDirective } from '../directives/input-google-map-search.directive';
@NgModule({
  providers: [GoogleMapsService],
  declarations: [
    GoogleMapDirective,
    InputGoogleMapDirective,
    GoogleMapSearchDirective,
    InputGoogleMapSearchDirective
  ],
  imports: [HttpClientModule],
  exports: [
    GoogleMapDirective,
    InputGoogleMapDirective,
    GoogleMapSearchDirective,
    InputGoogleMapSearchDirective
  ]
})
export class UrxLocationModule {
  constructor() { }
}
