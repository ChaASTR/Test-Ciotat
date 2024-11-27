var wms_layers = [];

var lyr_Cartesgologiques_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://geoservices.brgm.fr/geologie",
    attributions: ' ',
                              params: {
                                "LAYERS": "GEOLOGIE",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cartes géologiques",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Cartesgologiques_0, 0]);

lyr_Cartesgologiques_0.setVisible(true);
var layersList = [lyr_Cartesgologiques_0];
