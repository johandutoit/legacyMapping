
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <title>OpenLayers Basic Single WMS Example</title>
    <link rel="stylesheet" href="OpenLayers/theme/default/style.css" type="text/css">
    <link rel="stylesheet" href="style.css" type="text/css">
    <script src="OpenLayers/OpenLayers.js"></script>
    <script type="text/javascript">
        var map = null;
        var wmslayer = null;
        
        var server = '<%=Request("server")%>';
        var layer  = '<%=Request("layer")%>';
        
        
        function init(){
            map = new OpenLayers.Map( 'map', {
                    controls: [
                        new OpenLayers.Control.Navigation(),
                        new OpenLayers.Control.PanZoomBar(),
                        new OpenLayers.Control.LayerSwitcher(),
                        new OpenLayers.Control.OverviewMap(),
                    ]
                } );
                
            wmslayer = new OpenLayers.Layer.WMS( "OpenLayers WMS",
                    "http://vmap0.tiles.osgeo.org/wms/vmap0",
                    {layers: 'basic'} );
                    
            map.addLayer(wmslayer);
            
            if (server != "") {
                wmslayer = new OpenLayers.Layer.WMS( layer, server, {
                    layers: layer, 
                    transparent: true,
                    version: '1.3.0',
                    crs: 'EPSG:4326'
//                    time: '2011-09-10T12:00:00.000Z'
                } );
                        
                map.addLayer(wmslayer);
            }
            
            
            map.zoomToMaxExtent();
        }
        
        function LoadFrame(server, layer, date) {
             
              var layer = new OpenLayers.Layer.WMS( layer, server, {
                  layers: layer, 
                  transparent: true,
                  version: '1.3.0',
                  crs: 'EPSG:4326',
                  time: date
              } );
                        
              map.addLayer(layer);
              
              layer.events.register("loadend", layer, function() {
                  parent.LoadNextFrame();
                  
              map.removeLayer(wmslayer);                  
              wmslayer = layer;
                    
            });              

        }
        
    </script>
    
    <style type="text/css">
            html, body, #map {
                margin: 0;
                width: 100%;
                height: 100%;
            }

            #text {
                position: absolute;
                bottom: 1em;
                left: 1em;
                width: 512px;
                z-index: 20000;
                background-color: white;
                padding: 0 0.5em 0.5em 0.5em;
            }
        </style>    
  </head>
    <body onload="init()">
        <div id="map"></div>

    </body>
    
  </html>
