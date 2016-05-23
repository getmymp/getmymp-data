import React from 'react';

var SingleRidingMap = React.createClass({

  componentDidMount: function(){
    var riding = this.props.mp.riding_id
    mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpYW5iYW5jcm9mdCIsImEiOiJsVGVnMXFzIn0.7ldhVh3Ppsgv4lCYs65UdA';
     var map = new mapboxgl.Map({
         container: 'map',
         style: 'mapbox://styles/brianbancroft/cio5y4bf10001afnmjjdelbzf',
         zoom: 1,
         center: [-91.23046,45.460130637]
     });

     map.on('load', function () {
         var data =
         map.addSource('urban-areas', {
             'type': 'geojson',
             //'data': {"type":"Polygon","coordinates":[[[-91.23046875,45.460130637921],[-79.8046875,49.837982453085],[-69.08203125,43.452918893555],[-88.2421875,32.694865977875],[-91.23046875,45.460130637921]]]}
             //compare: {"type":"Polygon","coordinates":[[[-91.23046875,45.460130637921],[-79.8046875,49.837982453085],[-69.08203125,43.452918893555],[-88.2421875,32.694865977875],[-91.23046875,45.460130637921]]]}
             'data': 'http://localhost:3000/riding/' + riding
             //'data': 'https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_urban_areas.geojson'
         });

         map.addLayer({
             'id': 'urban-areas-fill',
             'type': 'fill',
             'source': 'urban-areas',
             'layout': {},
             'paint': {
                 'fill-color': '#f08',
                 'fill-opacity': 0.4
             }
         // This is the important part of this example: the addLayer
         // method takes 2 arguments: the layer as an object, and a string
         // representing another layer's name. if the other layer
         // exists in the stylesheet already, the new layer will be positioned
         // right before that layer in the stack, making it possible to put
         // 'overlays' anywhere in the layer stack.
         }, 'water');
     });

   
  },
 
  render: function() {
    return (
      
        <div id='map' className="single-map"></div>
      
    )
  }
});



export default SingleRidingMap;