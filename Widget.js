define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  './widgets/thirdparty-wab/libs/clipboard.min.js' // load it
],

function(declare, BaseWidget, ClipboardJS) { // name it

  return declare([BaseWidget], {

    startup: function() {
      new ClipboardJS('.btn'); // use it
    }
  });
});
