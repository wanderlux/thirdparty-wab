define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  './widgets/thirdparty-wab/libs/clipboard.min.js'
],

function(declare, BaseWidget, ClipboardJS) {

  return declare([BaseWidget], {

    baseClass: 'jimu-thirdparty-wab', //para el css

    startup: function() {
      new ClipboardJS('.btn');
    }
  });
});
