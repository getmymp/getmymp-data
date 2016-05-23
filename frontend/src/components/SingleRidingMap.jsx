import React from 'react';

var SingleRidingMap = React.createClass({

  componentDidMount: function(){
    var riding = this.props.mp.riding_id
        mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/brianbancroft/cio5y4bf10001afnmjjdelbzf',
        zoom: 2,
        center: [-91.23046875,45.460130637921]
    });

    map.on('style.load', function(){
      $.getJSON('http://localhost:3000/riding/' + riding, function(response){
        var boundingBox = getBoundingBox(response);
        var ridingBoundary = new mapboxgl.GeoJSONSource({ data: response } );

        map.addSource('riding', ridingBoundary);
        map.addLayer({
          'id': 'whig-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#f00',
            'fill-opacity': 0.4
          },
          filter: ['==', 'partyName', 'Liberal']
        });
        map.addLayer({
          'id': 'tory-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#00F',
            'fill-opacity': 0.4
          },
          filter: ['==', 'partyName', 'Conservative']
        });
        map.addLayer({
          'id': 'dipper-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#ffa500',
            'fill-opacity': 0.4
          },
          filter: ['==', 'partyName', 'NDP']
        });
        map.addLayer({
          'id': 'green-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#0F0',
            'fill-opacity': 0.4
          },
          filter: ['==', 'partyName', 'Green Party']
        });
        map.addLayer({
          'id': 'bloc-riding',
          'type': 'fill',
          'source': 'riding',
          'paint': {
            'fill-color': '#88F',
            'fill-opacity': 0.4
          },
          filter: ['==', 'partyName', 'Bloc Quebecois']
        });

        map.fitBounds([[boundingBox.xMin, boundingBox.yMin], [boundingBox.xMax, boundingBox.yMax]]);
      })



    });

    function getBoundingBox(data) {
      var bounds = {}, coords, point, latitude, longitude;
      for (var i = 0; i < data.geometry.coordinates.length; i++) {
        var polygons = data.geometry.coordinates[i];

        for (var j = 0; j < polygons.length; j++) {
          coords = polygons[j];

          for (var k = 0; k < coords.length; k++) {
            longitude = coords[k][0];
            latitude = coords[k][1];
            bounds.xMin = bounds.xMin < longitude ? bounds.xMin : longitude;
            bounds.xMax = bounds.xMax > longitude ? bounds.xMax : longitude;
            bounds.yMin = bounds.yMin < latitude ? bounds.yMin : latitude;
            bounds.yMax = bounds.yMax > latitude ? bounds.yMax : latitude;
          }
        }


      }

      return bounds;
    }


    // map.on('load', function () {
    //
    //     var data =
    //     map.addSource('ridings', {
    //         'type': 'geojson',
    //         'data': 'http://localhost:3000/riding/757'
    //     });
    //
    //     map.addLayer({
    //         'id': 'riding-areas',
    //         'type': 'fill',
    //         'source': 'ridings',
    //         'layout': {},
    //         'paint': {
    //             'fill-color': '#f08',
    //             'fill-opacity': 0.4
    //         }
    //     }, 'water');
    //
    // });
    map.scrollZoom.disable();
    map.dragPan.disable();

   
  },
 
  render: function() {
    return (
      
        <div id='map' className="single-map"></div>
      
    )
  }
});



export default SingleRidingMap;