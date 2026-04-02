<script type="text/javascript">

        function setOpacity(val){
            mapLayers.forEach(function (layer) {
                layer.setOpacity(val);
            });
        }

        var attr = {
            attribution: 'Copyright <a target="_blank" rel="nofollow" href="https://www.ioitechnologies.com/">ioi Technologies</a>',
            maxZoom: 19,
            minZoom: 12,
        };
        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attr);
        var gmap = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
            subdomains:['mt0','mt1','mt2','mt3'],
                ...attr
        });
        var gmap_s_r = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}', {
            subdomains:['mt0','mt1','mt2','mt3'],
                ...attr
        });
        var baseLayers = {
            // "Mapbox": mapbox,
            "OpenStreetMap": osm,
            "Google Maps": gmap,
            "Google Maps Satellite View": gmap_s_r
        };
        var mapLayers = [];



                mapLayers.push(
            L.tileLayer('https://maps-cdn.bahriaplus.com/global/dha/lhr/phase2/{z}/{x}/{y}.png', {
                
                minZoom: 12,
                maxZoom: 19,
                opacity: 1.0,
                tms: false,
                bounds: new L.LatLngBounds(
                    new L.LatLng(31.48533255, 74.41353321),
                    new L.LatLng(31.46787411475, 74.388942718506)
                ),
            })
        );
        
        var overlays = {
                        'Sector Q': mapLayers[0],
                    };

        var bounds = new L.LatLngBounds(
            new L.LatLng(31.48533255, 74.41353321),
            new L.LatLng(31.46787411475, 74.388942718506));
        var map = L.map('map', {layers: [
                gmap_s_r,
                ...mapLayers
            ],
            // attributionControl: false
        });

        L.control.layers(baseLayers, overlays, {
            collapsed: true,
            position: 'topleft'
        }).addTo(map);

        map.attributionControl.setPrefix("")
                map.fitBounds(bounds);
        
        var cluster_markers = L.markerClusterGroup({
            disableClusteringAtZoom: 17
        });
        var hot_markers = [];
                map.addLayer(cluster_markers);
        hot_markers.forEach(function (marker) {
            map.addLayer(marker);
        });


    </script>