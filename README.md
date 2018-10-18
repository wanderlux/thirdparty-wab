# thirdparty-wab

WAB widget example to use third-party JS libraries

Made this quick Web AppBuilder for ArcGIS widget to show how to add third-party libraries to them so widgets can be standalone since I couldn't understand ArcGIS documentation and could not find much help online.

## The library itself

Inside the widget folder create a new folder `libs` and copy the libraries you need

## Loading it

Open `Widget.js` and add `'./widgets/thirdparty-wab/libs/mylibrary.js'`. In this case I used:

```
  './widgets/thirdparty-wab/libs/clipboard.min.js'
```

## Using it

Don't forget to include it in the function in the correct order `function (..., Mylibrary)`  if you need to reference it in your widget JS code:


```
function(declare, BaseWidget, ClipboardJS)
```


And that's it.
