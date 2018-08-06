// global variables
var ll_gridstore = null;	// store
var ll_layer = null;
var ll_selmod = null;

function ReloadLayerGrid() {
	ll_gridstore.removeAll();
	var mapFrame = window.frames['mapframe'];
	var map = mapFrame.map;
//	debugger;
	for (i=0; i<map.layers.length; i++) {
		var layer = map.layers[i];
		AddLayerToList(layer.name, layer, layer.gridType, true, layer.title, layer.absdesc);
	}
	// select first layer
	ll_selmod.selectFirstRow();
}

function DoUploadShapeFileRet() {
    alert('done!');
}

function DoUploadDlgSHP()
{
    dlgUploadSHP("shp", 0, null);
}

function dlgUploadSHP(csFileType, nProjectID, func)
{
    var dlgUpload = null;
    var formUpload = null;
    
    // upload new image	    
    function DoUpload()
    {
        var url = 'asp_upload.asp?uploadPath=documents&projectid=' + nProjectID;
        formUpload.getForm().submit({
            url: url,
            waitMsg: 'Uploading your file...',
            success: function(formUpload, o){
                dlgUpload.close();
                alert('File successfuly uploaded!');
            },
            failure: function(formUpload, o){
                if (o.result)
                    Ext.MessageBox.alert('Failed', o.result.error_msg);
                else
                    Ext.MessageBox.alert('Failed', 'Please select a file');
                return false;
            }
        });
    }
    
    // create form
    formUpload = new Ext.FormPanel({
        renderTo: 'ss_form',
	    labelWidth: 90,
	    frame: true,
	    buttonAlign: 'left',
	    fileUpload: true,

	    items: [ 
        {
            xtype: 'fileuploadfield',
            id: 'fFileUploadSHP',
            name: 'fFileUploadSHP',
            emptyText: '.' + csFileType,
            fieldLabel: 'Select .' + csFileType + ' file',
            width: 280,
            allowBlank: false,
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        },
        {
            xtype: 'fileuploadfield',
            id: 'fFileUploadDBF',
            name: 'fFileUploadDBF',
            emptyText: '.dbf',
            fieldLabel: 'Select .dbf file',
            width: 280,
            allowBlank: false,
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        },
        {
            xtype: 'fileuploadfield',
            id: 'fFileUploadSHX',
            name: 'fFileUploadSHX',
            emptyText: '.shx',
            fieldLabel: 'Select .shx file',
            width: 280,
            allowBlank: false,
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        },
        {
            xtype: 'fileuploadfield',
            id: 'fFileUploadPRJ',
            name: 'fFileUploadPRJ',
            emptyText: '.prj',
            fieldLabel: 'Select .prj file',
            width: 280,
            allowBlank: false,
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        }
	    ],
	    buttons: [ {
		    text: 'OK',
		    minWidth: 75,
		    handler: function() {
		        DoUpload();
		    }
				
		    }, {
		    text: 'Cancel',
		    minWidth: 75,
		    handler: function() {
			    dlgUpload.close()
		    }
		    }
	    ]
    });
    
    // create window    
    dlgUpload = new Ext.Window({
	    height: 190,
	    width: 408,
	    closable: true,
	    modal: true,
	    title: 'Upload file Dialog',
	    layout: 'fit',
	    items: formUpload
    });
    
	
    // show window
    dlgUpload.show();
}

function CreateURL(lzURL) {
	// trim string
	lzURL = trimString(lzURL);
	return lzURL;
}

function DoUploadDlgKML()
{
    dlgUploadKML("kml", 0, null);
}

function dlgUploadKML(csFileType, nProjectID, func)
{
    var dlgUpload = null;
    var formUpload = null;
    
    // upload new image	    
    function DoUpload()
    {
        var url = 'asp_upload.asp?uploadPath=documents&projectid=' + nProjectID;
        formUpload.getForm().submit({
            url: url,
            waitMsg: 'Uploading your file...',
            success: function(formUpload, o){
                var csFile = o.result.file;
                if (csFile.indexOf(".kml") < 0 && csFile.indexOf(".KML") < 0) {
                    Ext.MessageBox.alert('Failed', 'This is not a .kml file');
                    return;
                }
                dlgUpload.close();
                alert('File: ' + csFile + ' successfuly uploaded');
            },
            failure: function(formUpload, o){
                if (o.result)
                    Ext.MessageBox.alert('Failed', o.result.error_msg);
                else
                    Ext.MessageBox.alert('Failed', 'Please select a file');
                return false;
            }
        });
    }
    
    // create form
    formUpload = new Ext.FormPanel({
        renderTo: 'ss_form',
	    labelWidth: 90,
	    frame: true,
	    buttonAlign: 'left',
	    fileUpload: true,

	    items: [ 
        {
            xtype: 'fileuploadfield',
            id: 'fFileUploadSHP',
            name: 'fFileUploadSHP',
            emptyText: '.' + csFileType,
            fieldLabel: 'Select .' + csFileType + ' file',
            width: 280,
            allowBlank: false,
            buttonText: '',
            buttonCfg: {
                iconCls: 'upload-icon'
            }
        }
	    ],
	    buttons: [ {
		    text: 'OK',
		    minWidth: 75,
		    handler: function() {
		        DoUpload();
		    }
				
		    }, {
		    text: 'Cancel',
		    minWidth: 75,
		    handler: function() {
			    dlgUpload.close()
		    }
		    }
	    ]
    });
    
    // create window    
    dlgUpload = new Ext.Window({
	    height: 110,
	    width: 408,
	    closable: true,
	    modal: true,
	    title: 'Upload file Dialog',
	    layout: 'fit',
	    items: formUpload
    });
    
	
    // show window
    dlgUpload.show();
}


function LoadWCD() {
	DoLoadWMC();
}

function DoSaveWCD(name) {
	var mapframe = window.frames['mapframe'];
	mapframe.writeWMC(name);
}

function SaveWCD() {
	DoSaveAsDlg("Save Web Map Context", DoSaveWCD);
}

function DoConnect(profileID, campaignID)
{
    var mapFrame = window.frames['mapframe'];
    var pane = createPaneCapture(mapFrame.map, campaignID, profileID);
    Ext.getCmp('ctrlTab').add(pane);
	Ext.getCmp('ctrlTab').setActiveTab(pane);

}

function DoConnectDialog() {
    var connectDialog = null;
    
    // create the profile data store
    var profileStore = new Ext.data.Store({
        // load using HTTP
        url: 'ajaxManCampaigns.asp?MODE=LISTPROFILES',
        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               record: 'Profile',
               id: 'fProfileID',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               'fProfileID', 'fUserName'
           ]),
        listeners: {
	        load: OnProfileStoreLoaded
        }
    });
    
    function OnProfileStoreLoaded(r, e, b) {
        var combo = Ext.getCmp('fProfileID');
        combo.setValue(combo.store.collect('fProfileID', true)[0]);
    }

    
    // create the campaign data store
    var campaignStore = new Ext.data.Store({
        // load using HTTP
        url: 'ajaxManCampaigns.asp?MODE=LISTCAMPAIGNS',
        // the return will be XML, so lets set up a reader
        reader: new Ext.data.XmlReader({
               record: 'Campaign',
               id: 'fCampaignID',
               totalRecords: '@total'
           }, [
               // set up the fields mapping into the xml doc
               'fCampaignID', 'fCampaignName'
           ]),
        listeners: {
	        load: OnCampaignStoreLoaded
        }
    });
    
    function OnCampaignStoreLoaded(r, e, b) {
        var combo = Ext.getCmp('fCampaignID');
        combo.setValue(combo.store.collect('fCampaignID', true)[0]);
    }
    

    // create form
    var f = new Ext.FormPanel({
	    labelWidth: 70,
	    frame: true,
	    buttonAlign: 'left',

	    items: [ 
        {
            xtype: 'combo',
            id: 'fProfileID',
            fieldLabel: 'Profile',
            store: profileStore, 
            displayField: 'fUserName',
            valueField: 'fProfileID',
            selectOnFocus: true,
            mode: 'local',
            typeAhead: false,
            editable: false,
            triggerAction: 'all',
            width: 220
        },
        {
            xtype: 'combo',
            id: 'fCampaignID',
            fieldLabel: 'Campaign',
            store: campaignStore, 
            displayField: 'fCampaignName',
            valueField: 'fCampaignID',
            selectOnFocus: true,
            mode: 'local',
            typeAhead: false,
            editable: false,
            triggerAction: 'all',
            width: 220
        }
        
        
	    ],
	    buttons: [ {
		    text: 'OK',
		    minWidth: 75,
		    handler: function() {
			    var profileID  = Ext.getCmp('fProfileID').getValue();
			    var campaignID = Ext.getCmp('fCampaignID').getValue();
			    connectDialog.close();
			    DoConnect(profileID, campaignID);
		    }
				
		    }, {
		    text: 'Cancel',
		    minWidth: 75,
		    handler: function() {
			    connectDialog.close()}
		    }
	    ]
    });
	
    // create window    
    connectDialog = new Ext.Window({
	    height: 150,
	    width: 350,
	    closable: true,
	    modal: true,
	    title: 'Log in',
	    layout: 'fit',
	    items: f
    });
    
    // load data stores
    profileStore.load();
    campaignStore.load();
	
    // show window
    connectDialog.show();
}	


function CreateGetLegendURL(lzURL, lzLayer) {
	// trim string
	lzURL = trimAll(lzURL);

	// create lowercase copy
	var lzCheckURL = lzURL.toLowerCase();
	
	// check if url contains a question mark
	var hasQuestionMark = false;
	if (lzCheckURL.indexOf('?') >= 0)
		hasQuestionMark = true;
		
	// getlegendgraphic
	if (lzCheckURL.indexOf('request=getlegendgraphic') < 0) {
		if (hasQuestionMark == false) {
			hasQuestionMark = true;
			lzURL += '?';
		}
		else
			lzURL += '&';
		lzURL += 'request=GetLegendGraphic';
	}

	// service
	if (lzCheckURL.indexOf('service=wms') < 0) {
		if (hasQuestionMark == false) {
			hasQuestionMark = true;
			lzURL += '?';
		}
		else
			lzURL += '&';
		lzURL += 'service=WMS';
	}
	
	// version
	if (lzCheckURL.indexOf('version=') < 0) {
		if (hasQuestionMark == false) {
			hasQuestionMark = true;
			lzURL += '?';
		}
		else
			lzURL += '&';
		lzURL += 'version=1.1.1';
	}
	
	// format
	if (lzCheckURL.indexOf('format=') < 0) {
		if (hasQuestionMark == false) {
			hasQuestionMark = true;
			lzURL += '?';
		}
		else
			lzURL += '&';
		lzURL += 'format=image/png';
	}
	
	// layer
	if (lzCheckURL.indexOf('layer=') < 0) {
		if (hasQuestionMark == false) {
			hasQuestionMark = true;
			lzURL += '?';
		}
		else
			lzURL += '&';
		lzURL += 'layer=' + lzLayer;
	}
	
	return lzURL;
}		


function AddLayerToList(name, layer, type, basemap, title, absdesc) {
    
    var trans = 0;
    if (layer.alpha != null)
    {
        var alpha = 1 - layer.alpha;
        var trans = parseInt(alpha * 10);
    }
    
//    debugger;        

	var rec = new ll_layer( {
		cc_name: name,
		cc_title: title,
		cc_abstract: absdesc,
		cc_desc: '',
		cc_type: type,
		cc_fixed: false,
		cc_layer: layer,
		cc_visible: true,
		cc_trans: trans,
		cc_base: basemap,
		cc_lname: 1
	} );
	ll_gridstore.add(rec);
	
//	ll_selmod.selectRow(ll_gridstore.getCount() - 1);
}

// this code goes in a javascript include file somewhere
Ext.namespace('Ext.ux.dd');

Ext.ux.dd.GridReorderDropTarget = function(grid, config)
{
    this.target = new Ext.dd.DropTarget(grid.getEl(),
    {
        ddGroup: grid.ddGroup || 'GridDD',
        grid: grid,
        gridDropTarget: this,
        notifyDrop: function(dd, e, data)
        {
            // Remove drag lines. The 'if' condition prevents null error when drop occurs without dragging out of the selection area
            if (this.currentRowEl)
            {
                this.currentRowEl.removeClass('grid-row-insert-below');
                this.currentRowEl.removeClass('grid-row-insert-above');
            }

            // determine the row
            var t = Ext.lib.Event.getTarget(e);
            var rindex = this.grid.getView().findRowIndex(t);
            if (rindex === false || rindex == data.rowIndex)
            {
                return false;
            }
            // fire the before move/copy event
            if (this.gridDropTarget.fireEvent(this.copy ? 'beforerowcopy' : 'beforerowmove', this.gridDropTarget, data.rowIndex, rindex, data.selections, 123) === false)
            {
                return false;
            }

            // update the store
            var ds = this.grid.getStore();

            // Changes for multiselction by Spirit
            var selections = new Array();
            var keys = ds.data.keys;
            for (var key in keys)
            {
                for (var i = 0; i < data.selections.length; i++)
                {
                    if (keys[key] == data.selections[i].id)
                    {
                        // Exit to prevent drop of selected records on itself.
                        if (rindex == key)
                        {
                            return false;
                        }
                        selections.push(data.selections[i]);
                    }
                }
            }

            // fix rowindex based on before/after move
            if (rindex > data.rowIndex && this.rowPosition < 0)
            {
                rindex--;
            }
            if (rindex < data.rowIndex && this.rowPosition > 0)
            {
                rindex++;
            }

            // fix rowindex for multiselection
            if (rindex > data.rowIndex && data.selections.length > 1)
            {
                rindex = rindex - (data.selections.length - 1);
            }

            // we tried to move this node before the next sibling, we stay in place
            if (rindex == data.rowIndex)
            {
                return false;
            }

            // fire the before move/copy event
            /* dupe - does it belong here or above???
            if (this.gridDropTarget.fireEvent(this.copy ? 'beforerowcopy' : 'beforerowmove', this.gridDropTarget, data.rowIndex, rindex, data.selections, 123) === false)
            {
                return false;
            }
            */

            if (!this.copy) 
            {
                for (var i = 0; i < data.selections.length; i++) 
                {
                    ds.remove(ds.getById(data.selections[i].id));
                }
            }

            for (var i = selections.length - 1; i >= 0; i--)
            {
                var insertIndex = rindex;
                ds.insert(insertIndex, selections[i]);
            }

            // re-select the row(s)
            var sm = this.grid.getSelectionModel();
            if (sm)
            {
                sm.selectRecords(data.selections);
            }

            // fire the after move/copy event
            this.gridDropTarget.fireEvent(this.copy ? 'afterrowcopy' : 'afterrowmove', this.gridDropTarget, data.rowIndex, rindex, data.selections);
            return true;
        },
        notifyOver: function(dd, e, data) 
        {
            var t = Ext.lib.Event.getTarget(e);
            var rindex = this.grid.getView().findRowIndex(t);

            // Similar to the code in notifyDrop. Filters for selected rows and quits function if any one row matches the current selected row.
            var ds = this.grid.getStore();
            var keys = ds.data.keys;
            for (var key in keys) 
            {
                for (var i = 0; i < data.selections.length; i++) 
                {
                    if (keys[key] == data.selections[i].id) 
                    {
                        if (rindex == key) 
                        {
                            if (this.currentRowEl) 
                            {
                                this.currentRowEl.removeClass('grid-row-insert-below');
                                this.currentRowEl.removeClass('grid-row-insert-above');
                            }
                            return this.dropNotAllowed;
                        }
                    }
                }
            }

            // If on first row, remove upper line. Prevents negative index error as a result of rindex going negative.
            if (rindex < 0 || rindex === false) 
            {
                this.currentRowEl.removeClass('grid-row-insert-above');
                return this.dropNotAllowed;
            }

            try 
            {
                var currentRow = this.grid.getView().getRow(rindex);
                // Find position of row relative to page (adjusting for grid's scroll position)
                var resolvedRow = new Ext.Element(currentRow).getY() - this.grid.getView().scroller.dom.scrollTop;
                var rowHeight = currentRow.offsetHeight;

                // Cursor relative to a row. -ve value implies cursor is above the row's middle and +ve value implues cursor is below the row's middle.
                this.rowPosition = e.getPageY() - resolvedRow - (rowHeight/2);

                // Clear drag line.
                if (this.currentRowEl) 
                {
                    this.currentRowEl.removeClass('grid-row-insert-below');
                    this.currentRowEl.removeClass('grid-row-insert-above');
                }

                if (this.rowPosition > 0) 
                {
                    // If the pointer is on the bottom half of the row.
                    this.currentRowEl = new Ext.Element(currentRow);
                    this.currentRowEl.addClass('grid-row-insert-below');
                } 
                else 
                {
                    // If the pointer is on the top half of the row.
                    if (rindex - 1 >= 0) 
                    {
                        var previousRow = this.grid.getView().getRow(rindex - 1);
                        this.currentRowEl = new Ext.Element(previousRow);
                        this.currentRowEl.addClass('grid-row-insert-below');
                    } 
                    else 
                    {
                        // If the pointer is on the top half of the first row.
                        this.currentRowEl.addClass('grid-row-insert-above');
                    }
                }
            } 
            catch (err) 
            {
                console.warn(err);
                rindex = false;
            }
            return (rindex === false)? this.dropNotAllowed : this.dropAllowed;
        },
        notifyOut: function(dd, e, data) 
        {
            // Remove drag lines when pointer leaves the gridView.
            if (this.currentRowEl) 
            {
                this.currentRowEl.removeClass('grid-row-insert-above');
                this.currentRowEl.removeClass('grid-row-insert-below');
            }
        }
    });

    if (config) 
    {
        Ext.apply(this.target, config);
        if (config.listeners)
        {
            Ext.apply(this,
            {
              listeners: config.listeners
            });
        }
    }

    this.addEvents(
    {
        'beforerowmove': true,
        'afterrowmove': true,
        'beforerowcopy': true,
        'afterrowcopy': true
    });

    Ext.ux.dd.GridReorderDropTarget.superclass.constructor.call(this);
};    

Ext.extend(Ext.ux.dd.GridReorderDropTarget, Ext.util.Observable, 
{
    getTarget: function() 
    {
        return this.target;
    },
    getGrid: function() 
    {
        return this.target.grid;
    },
    getCopy: function() 
    {
        return this.target.copy ? true : false;
    },
    setCopy: function(b) 
    {
        this.target.copy = b ? true : false;
    }
});


function DoWMSDlg(caption, func) {
	var enterURLDialog = null;

	// create form
	var f = new Ext.FormPanel({
		labelWidth: 40,
		frame: true,
		buttonAlign: 'left',

		items: [ 
		{
			id: 'edt_name',
			xtype: 'textfield',
			fieldLabel: 'Name',
			name: 'cc_name',
			width: 120
		}
			,
		{
			id: 'edt_url',
			xtype: 'textfield',
			fieldLabel: 'Server',
			name: 'cc_url',
			width: 300
		}
		],
		buttons: [ {
			text: 'OK',
			minWidth: 75,
			handler: function() {
				var name = Ext.getCmp('edt_name').getValue();
				var url  = Ext.getCmp('edt_url').getValue();
				enterURLDialog.close();
				func(name, url);
			}
				
			}, {
			text: 'Cancel',
			minWidth: 75,
			handler: function() {
				enterURLDialog.close()}
			}
		]
	});
	
	// create window    
	enterURLDialog = new Ext.Window({
		height: 300,
		width: 380,
		closable: true,
		modal: true,
		title: caption,
		layout: 'fit',
		items: f
	});
	
	// show window
	enterURLDialog.show();
}	

function DoEnterURLDlg(caption, func) {
	var enterURLDialog = null;

	// create form
	var f = new Ext.FormPanel({
		labelWidth: 40,
		frame: true,
		buttonAlign: 'left',

		items: [ 
		{
			id: 'edt_name',
			xtype: 'textfield',
			fieldLabel: 'Name',
			name: 'cc_name',
			width: 120
		}
			,
		{
			id: 'edt_url',
			xtype: 'textfield',
			fieldLabel: 'URL',
			name: 'cc_url',
			width: 300
		}
		],
		buttons: [ {
			text: 'OK',
			minWidth: 75,
			handler: function() {
				var name = Ext.getCmp('edt_name').getValue();
				var url  = Ext.getCmp('edt_url').getValue();
				enterURLDialog.close();
				func(name, url);
			}
				
			}, {
			text: 'Cancel',
			minWidth: 75,
			handler: function() {
				enterURLDialog.close()}
			}
		]
	});
	
	// create window    
	enterURLDialog = new Ext.Window({
		height: 150,
		width: 380,
		closable: true,
		modal: true,
		title: caption,
		layout: 'fit',
		items: f
	});
	
	// show window
	enterURLDialog.show();
}	

function DoSaveAsDlg(caption, func) {
	var enterURLDialog = null;

	// create form
	var f = new Ext.FormPanel({
		labelWidth: 70,
		frame: true,
		buttonAlign: 'left',

		items: [ 
		{
			id: 'edt_name',
			xtype: 'textfield',
			fieldLabel: 'Save As',
			name: 'cc_name',
			width: 220
		}
		],
		buttons: [ {
			text: 'OK',
			minWidth: 75,
			handler: function() {
				var name = Ext.getCmp('edt_name').getValue();
				enterURLDialog.close();
				func(name);
			}
				
			}, {
			text: 'Cancel',
			minWidth: 75,
			handler: function() {
				enterURLDialog.close()}
			}
		]
	});
	
	// create window    
	enterURLDialog = new Ext.Window({
		height: 150,
		width: 350,
		closable: true,
		modal: true,
		title: caption,
		layout: 'fit',
		items: f
	});
	
	// show window
	enterURLDialog.show();
}	

function LoadWMC(name) {
	fileName = "WMC/" + name;
//	alert(fileName);
	var mapFrame = window.frames['mapframe'];
	mapFrame.ReadWMC(fileName);
}

function DoLoadWMC() {
	
	// the selection model for the grid
	selMod = new Ext.grid.RowSelectionModel( { singleSelect:true } );

	// create the Data Store
	var store = new Ext.data.Store({
		// load using HTTP
		url: 'wmc_list.asp',
	    
		listeners: {
				load: OnLoadStore,
				loadexception: OnException
			},
	    

		// the return will be XML, so lets set up a reader
		reader: new Ext.data.XmlReader({
			// records will have an "Item" tag
			record: 'Item',
			id: 'ASIN',
			totalRecords: '@total'
		}, [
			// set up the fields mapping into the xml doc
			// The first needs mapping, the others are very basic
			{name: 'Author', mapping: 'ItemAttributes > Author'},
			'Title', 'Manufacturer', 'ProductGroup'
		])
	});
	
	function OnException(e) {
		alert(e);
	}
	
	function OnLoadStore() {
		selMod.selectFirstRow();
	}

	// create the grid
	var grid = new Ext.grid.GridPanel({
		store: store,
		height: 200,
		sm: selMod,
		frame: true,
		columns: [
			{header: "File Name", width: 300, dataIndex: 'Title', sortable: true},
		]
	});

	store.load();
	
	// create form
	var f = new Ext.FormPanel({
		labelWidth: 40,
		frame: true,
		buttonAlign: 'left',

		items: [  grid ],
		buttons: [ {
				text: 'OK',
				minWidth: 75,
				handler: function() {
					var record = selMod.getSelected();
					LoadWMC(record.data.Title);
					enterURLDialog.close();
				}
					
				}, {
				text: 'Cancel',
				minWidth: 75,
				handler: function() {
					enterURLDialog.close()
				}
			}
		]
	});
	
	// create window    
	enterURLDialog = new Ext.Window({
		width: 380,
		height: 285,
		closable: true,
		modal: true,
		title: "Select WMC file",
		layout: 'fit',
		items: f
	});
	
	// show window
	enterURLDialog.show();
}



function trimString(sString) { 
	while (sString.substring(0,1) == ' ') 
		sString = sString.substring(1, sString.length); 
	while (sString.substring(sString.length-1, sString.length) == ' ') 
		sString = sString.substring(0,sString.length-1); 
	return sString; 
} 


function DoAddKML(name, url) {

	var layer_url = CreateURL(url);
	var mapFrame = window.frames['mapframe'];
	layer = mapFrame.AddKML(name, layer_url);
	ReloadLayerGrid();
}
	
function DoAddGeoRSS(name, url) {

	var url = CreateURL(url);	
	var mapFrame = window.frames['mapframe'];	
    var layer = mapFrame.AddRSS(name, url);
    ReloadLayerGrid();
}

function DoAddVector(name, f) {
	var mapFrame = window.frames['mapframe'];	
    var layer = mapFrame.AddVector(name, f);
	ReloadLayerGrid();
}

function DoAddSOS(name, f) {
	var mapFrame = window.frames['mapframe'];	
    var layer = mapFrame.AddSOS(name, f.data.link);
	ReloadLayerGrid();
}






function createPaneLayers() {

	// globals
	var comboStore = null;
	var transparencyStore = null;
	

	// create layer class
	ll_layer = new Ext.data.Record.create([
		{ name: 'cc_name'   }, 
		{ name: 'cc_desc'	},
		{ name: 'cc_type'   }, 
		{ name: 'cc_fixed'	},
		{ name: 'cc_layer'  },
		{ name: 'cc_visible'  },
		{ name: 'cc_trans'  },
		{ name: 'cc_base'  },
		{ name: 'cc_lname'  }
		
	]);
	



	// create the data store
	ll_gridstore = new Ext.data.ArrayStore({
		fields: [
			{name: 'cc_name'},
			{name: 'cc_desc'},
			{name: 'cc_type'},
			{name: 'cc_fixed'},
			{name: 'cc_layer'},
			{name: 'cc_visible'},
			{name: 'cc_trans'},
			{name: 'cc_base'},
			{name: 'cc_lname'}
			
		],
		listeners: {
			load: OnStoreLoaded
		}        
		
	});

	function OnStoreLoaded() {
	}
	

	// get body width and height
	var scnWid = 0, scnHei = 0, nGridHeight;
	if (self.innerHeight) // all except Explorer
	{
		scnWid = self.innerWidth;
		scnHei = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
	{
		scnWid = document.documentElement.clientWidth;
		scnHei = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		scnWid = document.body.clientWidth;
		scnHei = document.body.clientHeight;
	}
	nGridHeight = scnHei - 27;
	
	var store = new Ext.data.ArrayStore({
		fields: ['abbr', 'state'],
		data : Ext.exampledata.states // from states.js
	});
	
	var menuAdmin = new Ext.menu.Menu({
		id: 'mapMenu',
		items: [ 
			{
				text: 'Manage Profiles',
				icon: 'icons/drive_go.png',
				handler: DoManProfiles
			},
			{
				text: 'Manage Campaigns',
				icon: 'icons/drive_go.png',
				handler: DoManCampaigns
			},'-',
			{
				text: 'Capture Data',
				icon: 'icons/drive_go.png',
				handler: DoConnectDialog
			},'-',
			{
				text: 'Test Upload Shape File',
				icon: 'icons/drive_go.png',
				handler: DoUploadDlgSHP
			},
			{
				text: 'Test Upload KML File',
				icon: 'icons/drive_go.png',
				handler: DoUploadDlgKML
			}
		]
	});
	

	var menuAdd = new Ext.menu.Menu({
		id: 'mainMenu',
		items: [ 
			{
				text: 'Add Web Map Service',
				icon: 'images/wms.png',
				handler: AddLayerWMS
			},
			{
				text: 'Add Web Feature Service',
				icon: 'images/wms.png',
				handler: AddLayerWFS
			},
			{
				text: 'Add GeoRSS Layer',
				icon: 'images/rss.gif',
				handler: AddLayerRSS
			},
			{
				text: 'Add KML Layer',
				icon: 'images/google.png',
				handler: AddLayerKML
			}
		]
	});
	
	var menuFind = new Ext.menu.Menu({
		id: 'FindMenu',
		items: [ 
			{
				text: 'Load Web Map Context',
				icon: 'icons/drive_go.png',
				handler: LoadWCD
			},
			{
				text: 'Save Web Map Context',
				icon: 'icons/save.gif',
				handler: SaveWCD
			},
			'-',
		
			{
				text: 'Favourites',
				icon: 'icons/folder_user.png',
				handler: DoFavourites
			},
			{
				text: 'Search',
				icon: 'icons/find.png',
				handler: DoSearch
			}
		]
	});

	

	var tb = new Ext.Toolbar();
	tb.add({
			text:'Admin',
			iconCls: 'icon_map',  // <-- icon
			menu: menuAdmin  // assign menu by instance
		});

	tb.add({
			text:'Contents',
			iconCls: 'icon_gal',  // <-- icon
			menu: menuFind  // assign menu by instance
		});
	
		
	tb.add({
			text:'Add',
			iconCls: 'icon-add',  // <-- icon
			menu: menuAdd  // assign menu by instance
		});
		
	tb.add('-');  
	tb.add({
		text: 'Remove',
		iconCls:'icon-delete',
		tooltip: '<b>Remove</b><br/>Remove the selected layer from list',
		handler: DeleteLayer
	} );
	tb.doLayout();
	
	function AddLayerKML(btn) {
		DoEnterURLDlg('Enter KML address', DoAddKML);
	}
	
	
	function AddLayerWMS(btn) {
		DoEnterURLDlg('Add WMS Layer', DoAddKML);
	}

	function AddLayerWFS(btn) {
		alert('to-do: wfs');
//		AddLayer("wfs", "Add WFS Layer");
	}

	function AddLayerRSS(btn) {
		DoEnterURLDlg('Enter address for Geo-rss', DoAddGeoRSS);
	}
	
	function DeleteLayer(btn) {
        var record = ll_selmod.getSelected();
        fixed = record.get('cc_fixed');
        if (fixed == true) {
			Ext.Msg.alert('Error', 'Cannot remove base layer');
			return false;
		}
		// remove layer from map
        var layer = record.get("cc_layer");
        if (layer != null) {
			var mapFrame = window.frames['mapframe'];
			mapFrame.RemoveLayer(layer);
		}
		
		ReloadLayerGrid();
	}

	// create grid component    
	function OnGridSelChanged(sm) {
	
	}
	
	ll_selmod = new Ext.grid.RowSelectionModel( { singleSelect:true } );
	ll_selmod.addListener('selectionchange', OnGridSelChanged);
	
	function OnGridDblClick(g, row, col, e) {
        var record = ll_selmod.getSelected();
        var name  = record.get("cc_name");
        var layer = record.get("cc_layer");
        if (layer != null) {
			var bbox = layer.bbox;
			if (bbox) {
				var mapFrame = window.frames['mapframe'];
				mapFrame.ZoomToBBox(bbox);
				SetActiveTab(0);
				return;
			}
			
			var ext = layer.maxExtent;
			if (ext) { 
				var mapFrame = window.frames['mapframe'];
				mapFrame.ZoomToBBox(ext);
				SetActiveTab(0);
				return;
			}
        }
	}
	
	
	

	// reorder items in array	
	function Reorder(map, indexOld, indexNew) {
	
		var a = map.layers;
		var temp = new Array();
		
		for (i=0; i<a.length; i++) {
		
			if (indexNew < indexOld && i == indexNew)
				temp.push(a[indexOld]);
		
			if (i != indexOld)
				temp.push(a[i]);
				
			if (indexNew > indexOld && i == indexNew)
				temp.push(a[indexOld]);
		}
		
		map.layers = temp;
		
		var layerSwitcher = map.controls[2];
		
		layerSwitcher.redraw();
		layerSwitcher.updateMap();
		
		ReloadLayerGrid();
		
		temp = null;
	}
	
	
	// create the Grid
	var grid = new Ext.grid.GridPanel({
		store: ll_gridstore,
		columns: [
			{id:'col_name', header: 'Name', width: 130, sortable: true, dataIndex: 'cc_name'},
			{id:'col_type', header: 'Type', width: 75, sortable: true, dataIndex: 'cc_type'}
	        
		],
		tbar: tb,
		stripeRows: true,
		autoExpandColumn: 'col_name',
		flex: 1,
		enableDragDrop: true,
		ddGroup: 'testGroup',
  		border:false,
		frame:false,
		layout: 'fit',
		// config options for stateful behavior
		stateful: true,
		stateId: 'grid',
		// events
		sm: ll_selmod,
		
		listeners: {
			render: function(g){
				var ddrow = new Ext.ux.dd.GridReorderDropTarget(g, {
					copy: false,
					listeners: {
						beforerowmove: function(objThis, oldIndex, newIndex, records){
							// code goes here
							// return false to cancel the move
						},
						afterrowmove: function(objThis, oldIndex, newIndex, records){
							var map = window.frames['mapframe'].map;
							Reorder(map, oldIndex, newIndex);
							
						},
						beforerowcopy: function(objThis, oldIndex, newIndex, records){
							// code goes here
							// return false to cancel the copy
						},
						afterrowcopy: function(objThis, oldIndex, newIndex, records){
							// code goes here
						}
					}
				});
				
				// if you need scrolling, register the grid view's scroller with the scroll manager
				Ext.dd.ScrollManager.register(g.getView().getEditorParent());
			},
			beforedestroy: function(g){
				// if you previously registered with the scroll manager, unregister it (if you don't it will lead to problems in IE)
				Ext.dd.ScrollManager.unregister(g.getView().getEditorParent());
			}
    	}
	});
	
	grid.addListener('celldblclick', OnGridDblClick);
	
	// manually load local data
//	var myData = [
//		[ 'Base map', 'All the roads leading from east to west and north to south', 'Fixed', true, null, true, 0 ]
//	];
	
//	ll_gridstore.loadData(myData);

	
	
	var checkColumn = new Ext.ux.grid.CheckColumn({
		dataIndex: 'value'
	});

	comboStore = new Ext.data.ArrayStore({
		id: '0',
		fields: ['value', 'text'],
		data: [[1, 'One'], [2, 'Two'], [3, 'Three']]
	});

	transparencyStore = new Ext.data.ArrayStore({
		id: '0',
		fields: ['value', 'text'],
		data: [[0, '0%'], [1, '10%'], [2, '20%'], [3, '30%'], [4, '40%'], [5, '50%'], [6, '60%'], [7, '70%'], [8, '80%'], [9, '90%'], [10, '100%']]
	});
	
	baseLayerStore = new Ext.data.ArrayStore({
		id: '0',
		fields: ['value', 'text']
		//data: [[0, 'Google Streets'], [1, 'Google Physical'], [2, 'Google Satellite'], [3, 'Google Hybrid'], [4, 'Modis'], [5, 'Gap'] ]
	});
	
	var propsGrid = new Ext.grid.PropertyGrid({
		title: 'Properties',
        height: 190,
		border:false,
		frame:false,
        propertyNames: {
            tested: 'QA',
            borderWidth: 'Border Width'
        },
        source: {
        },
        viewConfig : {
            forceFit: true,
            scrollOffset: 2 // the grid will never have scrollbars
        },
        
		customEditors: {
			'combo': new Ext.grid.GridEditor(new Ext.form.ComboBox({
				store: comboStore,
				valueField: 'value',
				displayField: 'text',
				mode: 'local',
				triggerAction: 'all'
			}), {}),
			
			'Transparency': new Ext.grid.GridEditor(new Ext.form.ComboBox({
				store: transparencyStore,
				valueField: 'value',
				displayField: 'text',
				mode: 'local',
				triggerAction: 'all',
				selectOnFocus:true
			}), {}),
			
			'Layer': new Ext.grid.GridEditor(new Ext.form.ComboBox({
				store: baseLayerStore,
				valueField: 'value',
				displayField: 'text',
				editable: false,
				readOnly: true,
				mode: 'local',
				triggerAction: 'all'
			}), {})
			
		},
        
		plugins: [checkColumn],
		initComponent: function(){
			this.constructor.prototype.initComponent.apply(this, arguments);
			Ext.apply(this.getColumnModel(), {
				isCellEditable: function(colIndex, rowIndex){
					var r = this.store.store.getAt(rowIndex);
					// Check column doesn't have an editor -> not editable
					if(r.get('name') == 'Visible' || r.get('name') == 'Base Layer'){
						return false;
					}
					return this.constructor.prototype.isCellEditable.apply(this, arguments);
				},
				renderCellDelegate : (function(val, meta, r){
					// Return checkbox markup
					if(r.get('name') == 'Visible' || r.get('name') == 'Base Layer'){
						return checkColumn.renderer.apply(this, arguments);
					}
					// Return combobox text for value
					if(r.get('name') == 'combo'){
						return comboStore.getById(val).get('text');
					}
					
					// Return combobox text for Transparency value
					if(r.get('name') == 'Transparency'){
						return transparencyStore.getById(val).get('text');
					}
					
					// Return combobox text for Transparency value
					if(r.get('name') == 'Layer'){
						return baseLayerStore.getById(val).get('text');
					}
					
					return this.constructor.prototype.renderCell.apply(this, arguments);
				}).createDelegate(this.getColumnModel())
			});
		}
        
    });
    
	propsGrid.getColumnModel().setConfig( [
		{ header: 'Name', width:100, sortable: false, dataIndex: 'name', id:'name',allowBlank:true},
		{ header: 'Value', width:200, sortable: false, dataIndex: 'value', id:'value',allowBlank:true}
	]);      
	
	function findRecordByID(gr, id) {
		for (i=0; i<gr.store.data.items.length; i++) {
			if (gr.store.data.items[i].id == id)
				return gr.store.data.items[i].data;
		}
		return null;
	}
	
	function OnPropertyChanged(source, recordId, value, oldValue, e) {
		var map = window.frames['mapframe'].map;
		
		record = findRecordByID(propsGrid, recordId);
		if (record == null)
			return null;
			
		var type = record.target.data.cc_type;
		
		switch (record.bind)
		{
		case 'cc_name':
			record.layer.setName(value);
			break;
		
		case 'cc_visible':
			record.layer.setVisibility(value);
			break;
			
		case 'cc_trans':
			record.layer.setOpacity(1.0 - parseInt(value) / 10  );
			break;
			
		case 'cc_base':
			if (value == true) {
				
				record.layer.isBaseLayer = true;
				map.setBaseLayer(record.layer);
				map.setBaseLayer(record.layer);
			}
			else {
				if (type == 'WMS')
					record.layer.isBaseLayer = false;
				map.setBaseLayer(map.layers[0]);
				map.setBaseLayer(map.layers[0]);
			}
			break;
			
		case 'cc_lname':
			alert(value);
			break;
			
		}
		
		record.target.set(record.bind, record.value);
	}
	
	propsGrid.addListener('propertychange', OnPropertyChanged);
    
	function OnGridSelChanged(sm) {
		var map = window.frames['mapframe'].map;
        var record = sm.getSelected();
        if (record == null) {
			propsGrid.setSource( { } );
			return;
        }
        
		propsGrid.store.removeAll();
		
		var type = record.get('cc_type');
//		alert(type);
		
		
		// Add layer: name
		propsGrid.store.add(new Ext.grid.PropertyRecord({
			name: 'Name',
			value: record.get('cc_name'),
			bind: 'cc_name',
			target: record,
			layer: record.get("cc_layer")
		}));
		
		if (type == 'Google') {
			// is base layer
			var layer = record.get("cc_layer");
			var base = (layer == map.baseLayer) ? true : false;

			propsGrid.store.add(new Ext.grid.PropertyRecord({
				name: 'Base Layer',
				value: base,
				bind: 'cc_base',
				target: record,
				layer: layer
			}));

		}		
		else {
		
			// Add layer: title
			propsGrid.store.add(new Ext.grid.PropertyRecord({
				name: 'Title',
				value: record.get('cc_title'),
				bind: 'cc_title',
				target: record,
				layer: record.get("cc_title")
			}));

			// Add layer: abstract
			propsGrid.store.add(new Ext.grid.PropertyRecord({
				name: 'Abstract',
				value: record.get('cc_abstract'),
				bind: 'cc_abstract',
				target: record,
				layer: record.get("cc_abstract")
			}));
		
			if (type == 'WMS') {
				// is base layer
				propsGrid.store.add(new Ext.grid.PropertyRecord({
					name: 'Base Layer',
					value: record.get('cc_base'),
					bind: 'cc_base',
					target: record,
					layer: record.get("cc_layer")
				}));
			}

			// Add layer: visible
			propsGrid.store.add(new Ext.grid.PropertyRecord({
				name: 'Visible',
				value: record.get('cc_visible'),
				bind: 'cc_visible',
				target: record,
				layer: record.get("cc_layer")
			}));
			
			// Add layer: transparency
			propsGrid.store.add(new Ext.grid.PropertyRecord({
				name: 'Transparency',
				value: record.get('cc_trans'),
				bind: 'cc_trans',
				target: record,
				layer: record.get("cc_layer")
			}));
		}
		
		document.getElementById('legendImg').src = 'blank.gif';
		
	
		if (type == 'KML') {
			layer = record.get("cc_layer");
			var pos = layer.url.lastIndexOf(".");
			var bmp = layer.url.substr(0, pos) + ".png";
			document.getElementById('legendImg').src = bmp;
		}
		
		if (type == 'WMS') {
			layer = record.get("cc_layer");
			document.getElementById('legendImg').src = CreateGetLegendURL(layer.url, layer.params.LAYERS);;
		}
		
		
	}
	
	myLegend = new Ext.Panel ({
		title: 'Legend',
        height: 220,
		border: false,
		frame: false,
		autoScroll: true,
		html: '<img id="legendImg" src="blank.gif" border="1">'
	});
		
    
	myPanel = new Ext.Panel (
	{
		title: 'Control',
		iconCls:'icon_tab_layers',
		border:false,
		frame:false,
		layout:'vbox',
		layoutConfig: {
			align : 'stretch'
		},
		items: [ grid, propsGrid, myLegend ]
	});
	
	return myPanel;
	
}

// https://www.comnap.aq/kml/facilities.kml