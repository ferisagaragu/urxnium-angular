export const GoogleMapsInjectJs = () => {
  if (document.getElementById('urx-inputmask-js')) {
    return;
  }

  const script = document.createElement('script');

  script.id = 'urx-google-maps-js';
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?libraries=places,maps&key=AIzaSyCGfbafYQgjSAXzZ7ikqOwo7GBtmWZ0hjU';

}
