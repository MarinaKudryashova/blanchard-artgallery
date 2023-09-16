document.addEventListener('DOMContentLoaded', function(){
// иницилизация yandex карты
let center = [55.75846806898367,37.60108849999989];
function init() {
    let map = new ymaps.Map('contacts__map', {
        center: center,
        zoom: 16,
    },
    {
      zoomControlPosition: {right: 25, top: 300,},
      geolocationControlPosition: {right: 25, top: 250,},
    });

    let placemark = new ymaps.Placemark(center, {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/mapicon.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10],
    });

    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.behaviors.disable(['scrollZoom']);
    map.geoObjects.add(placemark);
}

ymaps.ready(init);
});
