define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  './widgets/thirdparty/libs/proj4.js',
  "esri/geometry/Extent",
  "esri/SpatialReference",
  'esri/geometry/GeographicTransformation',
  'esri/geometry/projection',
  'jimu/loaderplugins/order-loader!./widgets/BuscadorICV/libs/jquery-1-11-1.min.js',
  'jimu/loaderplugins/order-loader!./widgets/BuscadorICV/libs/jquery-ui.min.js',
],

function(declare, BaseWidget, proj4, Extent, SpatialReference, GeographicTransformation, projection) {

  return declare([BaseWidget], {

    baseClass: 'jimu-widget-buscadoricv', //para el css
    
    startup: function() {
    }
  });

});
    
    
    
