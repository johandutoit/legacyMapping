/**
 * Copyright (c) 2008-2009 The Open Source Geospatial Foundation
 * 
 * Published under the BSD license.
 * See http://svn.geoext.org/core/trunk/geoext/license.txt for the full text
 * of the license.
 */


/** api: example[wms-capabilities]
 *  WMS Capabilities Store
 *  ----------------------
 *  Create layer records from WMS capabilities documents.
 */

var store;
Ext.onReady(function() {

    function trimAll(sString) { 
	    while (sString.substring(0,1) == ' ') 
		    sString = sString.substring(1, sString.length); 
	    while (sString.substring(sString.length-1, sString.length) == ' ') 
		    sString = sString.substring(0,sString.length-1); 
	    return sString; 
    } 


	// create a get-capabilities url	
	function CreateURL(lzURL) {
		// trim string
		lzURL = trimAll(lzURL);
	
		// create lowercase copy
		var lzCheckURL = lzURL.toLowerCase();
		
		// check if url contains a question mark
		var hasQuestionMark = false;
		if (lzCheckURL.indexOf('?') >= 0)
			hasQuestionMark = true;
			
		// check if url contains request=getcapabilities
		if (lzCheckURL.indexOf('request=getcapabilities') < 0) {
			if (hasQuestionMark == false) {
				hasQuestionMark = true;
				lzURL += '?';
			}
			else
				lzURL += '&';
			lzURL += 'request=GetCapabilities';
		}

		if (lzCheckURL.indexOf('service=wms') < 0) {
			if (hasQuestionMark == false) {
				hasQuestionMark = true;
				lzURL += '?';
			}
			else
				lzURL += '&';
			lzURL += 'service=WMS';
		}
		
		if (lzCheckURL.indexOf('http:') >= 0 || lzCheckURL.indexOf('https:') >= 0)
			return 'tear.asp?URL=' + escape(lzURL);
		else
			return lzURL;
	}		
	
    var url = CreateURL('http://app01.saeon.ac.za:8082/geoserver/ows?service=wms');
    
    // create a new WMS capabilities store
    store = new GeoExt.data.WMSCapabilitiesStore({
        url: url
    });
    // load the store with records derived from the doc at the above url
    store.load();

    // create a grid to display records from the store
    var grid = new Ext.grid.GridPanel({
        title: "WMS Capabilities",
        store: store,
        columns: [
            {header: "Title", dataIndex: "title", sortable: true},
            {header: "Name", dataIndex: "name", sortable: true},
            {header: "Queryable", dataIndex: "queryable", sortable: true, width: 70},
            {id: "description", header: "Description", dataIndex: "abstract"}
        ],
        autoExpandColumn: "description",
        renderTo: "capgrid",
        height: 300,
        width: 650,
        listeners: {
            rowdblclick: mapPreview
        }
    });
    
    function mapPreview(grid, index) {
        var record = grid.getStore().getAt(index);
        var layer = record.get("layer").clone();
        
        var win = new Ext.Window({
            title: "Preview: " + record.get("title"),
            width: 800,
            height: 600,
            layout: "fit",
            items: [{
                xtype: "gx_mappanel",
                layers: [layer],
                extent: record.get("llbbox")
            }]
        });
        win.show();
    }

});
