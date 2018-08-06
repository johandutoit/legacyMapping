/* Copyright (c) 2006-2008 MetaCarta, Inc., published under the Clear BSD
 * license.  See http://svn.openlayers.org/trunk/openlayers/license.txt for the
 * full text of the license. */


/**
 * @requires OpenLayers/Layer/Markers.js
 * @requires OpenLayers/Request/XMLHttpRequest.js
 */

/**
 * Class: OpenLayers.Layer.GeoRSSJDT
 * Add GeoRSS Point features to your map. 
 * 
 * Inherits from:
 *  - <OpenLayers.Layer.Vector>
 *  - <OpenLayers.Layer>
 */
OpenLayers.Layer.GeoRSSJDT = OpenLayers.Class(OpenLayers.Layer.Vector, {

    /** 
     * Property: location 
     * {String} store url of text file 
     */
    location: null,

    /** 
     * Property: features 
     * {Array(<OpenLayers.Feature>)} 
     */
    features: null,
    
    /**
     * APIProperty: formatOptions
     * {Object} Hash of options which should be passed to the format when it is
     * created. Must be passed in the constructor.
     */
    formatOptions: null, 

    /** 
     * Property: selectedFeature 
     * {<OpenLayers.Feature>} 
     */
    selectedFeature: null,

    /** 
     * APIProperty: icon 
     * {<OpenLayers.Icon>}. This determines the Icon to be used on the map
     * for this GeoRSS layer.
     */
    icon: null,

    /**
     * APIProperty: popupSize
     * {<OpenLayers.Size>} This determines the size of GeoRSS popups. If 
     * not provided, defaults to 250px by 120px. 
     */
    popupSize: null, 
    
    /** 
     * APIProperty: useFeedTitle 
     * {Boolean} Set layer.name to the first <title> element in the feed. Default is true. 
     */
    useFeedTitle: true,
    
    /** 
     * APIProperty: markers 
     * {Array(<OpenLayers.Marker>)} internal marker list 
     */
    markers: null,
    
    /** 
     * Property: drawn 
     * {Boolean} internal state of drawing. This is a workaround for the fact
     * that the map does not call moveTo with a zoomChanged when the map is
     * first starting up. This lets us catch the case where we have *never*
     * drawn the layer, and draw it even if the zoom hasn't changed.
     */
    drawn: false,
    
    
    
    /**
    * Constructor: OpenLayers.Layer.GeoRSSJDT
    * Create a GeoRSS Layer.
    *
    * Parameters:
    * name - {String} 
    * location - {String} 
    * options - {Object}
    */
    initialize: function(name, location, options) {
        OpenLayers.Layer.Vector.prototype.initialize.apply(this, [name, options]);
        this.location = location;
        this.features = [];
        this.markers = [];
    },

    /**
     * Method: destroy 
     */
    destroy: function() {
        // Warning: Layer.Markers.destroy() must be called prior to calling
        // clearFeatures() here, otherwise we leak memory. Indeed, if
        // Layer.Markers.destroy() is called after clearFeatures(), it won't be
        // able to remove the marker image elements from the layer's div since
        // the markers will have been destroyed by clearFeatures().
        OpenLayers.Layer.Vector.prototype.destroy.apply(this, arguments);
        this.clearFeatures();
        this.features = null;
        this.markers = null;
    },

    /**
     * Method: loadRSS
     * Start the load of the RSS data. Don't do this when we first add the layer,
     * since we may not be visible at any point, and it would therefore be a waste.
     */
    loadRSS: function() {
        if (!this.loaded) {
            this.events.triggerEvent("loadstart");
            OpenLayers.Request.GET({
                url: this.location,
                success: this.parseData,
                scope: this
            });
            this.loaded = true;
        }    
    },    
    
    /**
     * APIMethod: setOpacity
     * Sets the opacity for all the markers.
     * 
     * Parameter:
     * opacity - {Float}
     */
    setOpacity: function(opacity) {
		OpenLayers.Layer.Vector.prototype.setOpacity.apply(this, arguments);
		for (var i=0, len=this.markers.length; i<len; i++) {
			this.markers[i].setOpacity(this.opacity);
        }
    },
    
    
    /**
     * Method: moveTo
     * If layer is visible and RSS has not been loaded, load RSS. 
     * 
     * Parameters:
     * bounds - {Object} 
     * zoomChanged - {Object} 
     * minor - {Object} 
     */
    moveTo:function(bounds, zoomChanged, minor) {
        OpenLayers.Layer.Vector.prototype.moveTo.apply(this, arguments);
        if(this.visibility && !this.loaded){
            this.loadRSS();
        }
        
        if (zoomChanged || !this.drawn) {
            for(var i=0, len=this.markers.length; i<len; i++) {
                this.drawMarker(this.markers[i]);
            }
            this.drawn = true;
        }
        
    },
    
    /**
     * APIMethod: addMarker
     *
     * Parameters:
     * marker - {<OpenLayers.Marker>} 
     */
    addMarker: function(marker) {
        return;
        
        this.markers.push(marker);

        if (this.opacity != null) {
            marker.setOpacity(this.opacity);
        }

        if (this.map && this.map.getExtent()) {
            marker.map = this.map;
            this.drawMarker(marker);
        }
    },

    /**
     * APIMethod: removeMarker
     *
     * Parameters:
     * marker - {<OpenLayers.Marker>} 
     */
    removeMarker: function(marker) {
        if (this.markers && this.markers.length) {
            OpenLayers.Util.removeItem(this.markers, marker);
            marker.erase();
        }
    },

    /**
     * Method: clearMarkers
     * This method removes all markers from a layer. The markers are not
     * destroyed by this function, but are removed from the list of markers.
     */
    clearMarkers: function() {
        if (this.markers != null) {
            while(this.markers.length > 0) {
                this.removeMarker(this.markers[0]);
            }
        }
    },

    /** 
     * Method: drawMarker
     * Calculate the pixel location for the marker, create it, and 
     *    add it to the layer's div
     *
     * Parameters:
     * marker - {<OpenLayers.Marker>} 
     */
    drawMarker: function(marker) {
        var px = this.map.getLayerPxFromLonLat(marker.lonlat);
        if (px == null) {
            marker.display(false);
        } else {
            if (!marker.isDrawn()) {
                var markerImg = marker.draw(px);
                this.div.appendChild(markerImg);
            } else if(marker.icon) {
                marker.icon.moveTo(px);
            }
        }
    },
    
        
    /**
     * Method: parseData
     * Parse the data returned from the Events call.
     *
     * Parameters:
     * ajaxRequest - {<OpenLayers.Request.XMLHttpRequest>} 
     */
    parseData: function(ajaxRequest) {
        var doc = ajaxRequest.responseXML;
        if (!doc || !doc.documentElement) {
            doc = OpenLayers.Format.XML.prototype.read(ajaxRequest.responseText);
        }
        
        
        
        if (this.useFeedTitle) {
            var name = null;
            try {
                name = doc.getElementsByTagNameNS('*', 'title')[0].firstChild.nodeValue;
            }
            catch (e) {
                name = doc.getElementsByTagName('title')[0].firstChild.nodeValue;
            }
            if (name) {
                this.setName(name);
            }    
        }
       
        var options = {};
        
        OpenLayers.Util.extend(options, this.formatOptions);
        
        if (this.map && !this.projection.equals(this.map.getProjectionObject())) {
            options.externalProjection = this.projection;
            options.internalProjection = this.map.getProjectionObject();
        }    
        
        var format = new OpenLayers.Format.GeoRSSJDT(options);
        var features = format.read(doc, 1);
        this.addFeatures(features);
        
        for (var i=0, len=features.length; i<len; i++) {
            var data = {};
            var feature = features[i];
            
            // we don't support features with no geometry in the GeoRSS
            // layer at this time. 
            if (!feature.geometry) {
                continue;
            }    
            
            var title = feature.attributes.title ? 
                         feature.attributes.title : "Untitled";
            
            var description = feature.attributes.description ? 
                         feature.attributes.description : "No description.";
            
            var link = feature.attributes.link ? feature.attributes.link : "";

            var location = feature.geometry.getBounds().getCenterLonLat();
            
            
            data.icon = this.icon == null ? 
                                     OpenLayers.Marker.defaultIcon() : 
                                     this.icon.clone();
            
            data.popupSize = this.popupSize ? 
                             this.popupSize.clone() :
                             new OpenLayers.Size(250, 120);
            
            if (title || description) {
                // we have supplemental data, store them.
                data.title = title;
                data.description = description;
            
                var contentHTML = '<div class="olLayerGeoRSSClose">[x]</div>'; 
                contentHTML += '<div class="olLayerGeoRSSTitle">';
                if (link) {
                    contentHTML += '<a class="link" href="'+link+'" target="_blank">';
                }
                contentHTML += title;
                if (link) {
                    contentHTML += '</a>';
                }
                contentHTML += '</div>';
                contentHTML += '<div style="" class="olLayerGeoRSSDescription">';
                contentHTML += description;
                contentHTML += '</div>';
                data['popupContentHTML'] = contentHTML;                
            }
            var feature = new OpenLayers.Feature(this, location, data);
            this.features.push(feature);
            var marker = feature.createMarker();
            marker.events.register('click', feature, this.markerClick);
            this.addMarker(marker);
        }
        this.events.triggerEvent("loadend");
    },
    
    /**
     * Method: markerClick
     *
     * Parameters:
     * evt - {Event} 
     */
    markerClick: function(evt) {
        var sameMarkerClicked = (this == this.layer.selectedFeature);
        this.layer.selectedFeature = (!sameMarkerClicked) ? this : null;
        for(var i=0, len=this.layer.map.popups.length; i<len; i++) {
            this.layer.map.removePopup(this.layer.map.popups[i]);
        }
        if (!sameMarkerClicked) {
            var popup = this.createPopup();
            OpenLayers.Event.observe(popup.div, "click",
                OpenLayers.Function.bind(function() { 
                    for(var i=0, len=this.layer.map.popups.length; i<len; i++) { 
                        this.layer.map.removePopup(this.layer.map.popups[i]); 
                    }
                }, this)
            );
            this.layer.map.addPopup(popup); 
        }
        OpenLayers.Event.stop(evt);
    },

    /**
     * Method: clearFeatures
     * Destroy all features in this layer.
     */
    clearFeatures: function() {
        if (this.features != null) {
            while(this.features.length > 0) {
                var feature = this.features[0];
                OpenLayers.Util.removeItem(this.features, feature);
                feature.destroy();
            }
        }        
    },
    
    CLASS_NAME: "OpenLayers.Layer.GeoRSSJDT"
});
