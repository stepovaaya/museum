
ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            center: [55.76033534577601,37.61479241699063],
            zoom: 14,
            controls: ['geolocationControl', 'zoomControl']
        },{
          geolocationControlFloat: 'none',
          geolocationControlPosition: {
            bottom: '310px',
            right: '18px'
          },
          zoomControlSize: 'medium',
          zoomControlPosition: {
            bottom: '370px',
            right: '18px'
          }
        });

        var myPlacemark = new ymaps.Placemark([55.75896732335444,37.614334655064994], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map-point.svg',
          iconImageSize: [20, 20],
          iconImageOffset: [-5, -37]
      });

      myMap.geoObjects.add(myPlacemark);
      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('trafficControl');
      myMap.controls.remove('typeSelector');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');

    }
