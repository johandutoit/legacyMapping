<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >
<head>
    <title>NetCDF</title>
    <link rel="stylesheet" type="text/css" href="ext/examples/shared/examples.css" />     
	<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" /> 
    <link rel="stylesheet" type="text/css" href="ext/examples/ux/css/statusbar.css" /> 
    <link rel="stylesheet" type="text/css" href="ext/examples/ux/fileuploadfield/css/fileuploadfield.css"/> 

    <!--<link rel="stylesheet" type="text/css" href="ext/resources/css/xtheme-human.css" id="theme">-->
    <link rel="stylesheet" type="text/css" href="saeon.css" />
	
    

    <!-- extJS -->
    <script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
    <script type="text/javascript" src="ext/ext-all.js"></script>
    <script type="text/javascript" src="CheckColumn.js"></script>
    <script src="ajax.js"></script> 
	<script src="parsexml.js"></script> 
	<script type="text/javascript" src="ClearDateField.js"></script>
    <script type="text/javascript" src="ext/examples/ux/fileuploadfield/FileUploadField.js"></script> 
    <script type="text/javascript" src="ext/examples/ux/Multiselect.js"></script> 
	
	    
	<script type="text/javascript" src="ext/examples/form/states.js"></script>
    <script type="text/javascript" src="ext/examples/ux/StatusBar.js"></script> 
    <script type="text/javascript" src="SearchField.js"></script>
    <script type="text/javascript" src="querystring.js"></script>
    <!-- Open Layers -->
    <script src="openlayers/OpenLayers.js"></script> 
    <!-- extJS -->
    <script src="openlayers/OpenLayers.js"></script> 	    
    <script type="text/javascript" src="GeoExt/script/GeoExt.js"></script>
    <script src="GeoRSS_Format.js"></script> 
    
</head>
<body>
<script>

function OnFunctionFailed() {

//    alert(2);

}

function AddMenu(parent, root) {

    var toolBar = new Ext.getCmp('main-tool-bar');
    
//    debugger;
    
    if (parent == null) {
        parent = toolBar.add( {
	        text:  root.label,
            icon: 'icons/application.png'
        } );
    }
    
    function funcMenuGo(button) {
        var id     = button.initialConfig.myid;
        var server = button.initialConfig.server;
        
        Ext.getCmp('form_curitem').setValue(id);
        Ext.getCmp('form_server').setValue(server);
        
        var mapFrame = window.frames['mapframe'];
        mapFrame.location = 'netcdfmap.asp?server=' + escape(server) + '&layer=' + escape(id);
        
        
    }
    
    function funcMenuNull(a, b, c, d) {

    }
    
    
    if (root.children && root.children.length > 0) 
    {
    	var menu = new Ext.menu.Menu();
        for (var i=0; i<root.children.length; i++) 
        {
            var link = (root.children[i].children == null || root.children[i].children.length == 0);
            var text = root.children[i].label;
            if (link == false || root.children[i].id != null)
            {
                var server = root.children[i].server;
                if (server == null || server == "")
                    server = load_server;
                   
                var item = menu.add( {
                    icon: link ? 'icons/application_go.png' : 'icons/application.png',
                    myid: root.children[i].id,
                    server: server,
                    text: text,
                    handler: link ? funcMenuGo : funcMenuNull
                });
            
                AddMenu(item, root.children[i]);
            }
                
        }
        
        parent.menu = menu;
    }
}

var load_more = true;
var load_server = "";

function OnMenuLoaded(res, a, b, c) {
    var toolBar = new Ext.getCmp('main-tool-bar');

    var data = Ext.util.JSON.decode(res.responseText);
    AddMenu(null, data);
    
    if (load_more == true) {
        load_more = false;
        
        load_server = "http://access.chpc.ac.za/ncWMS/wms";
        
        var url = "http://access.chpc.ac.za/ncWMS/wms?item=menu&menu=&request=GetMetadata"
        var conn = new Ext.data.Connection();
        conn.request({
            url: "tearxml.asp?URL=" + escape(url),
            // url: "netcdf.xml",
            method: 'GET',
            success: OnMenuLoaded,
            failure: OnFunctionFailed
        });	        
        
        return;
    }
    
    var toolBar = new Ext.getCmp('main-tool-bar');
    
    toolBar.add({
        text: 'Format',
        icon: 'icons/images.png',
        menu: {
            items: [ {
                    text: 'OpenLayers',
                    icon: 'icons/image.png',
                    selected: true
                },{
                    text: 'PNG',
                    icon: 'icons/image.png'
                },{
                    text: 'JPEG',
                    icon: 'icons/image.png'
                    
                }
            ]
        }
    });
    
    toolBar.doLayout();
    
    CreateInterface();
}

function FormatWMSDate(date) {
    arDate = date.split('/');
    return arDate[2] + '-' + arDate[0] + '-' + arDate[1] + 'T12:00:00';
}

function LoadMenu() {

    var toolBar = new Ext.Toolbar({
        id: 'main-tool-bar'
    });
    
    load_server = "http://behemoth.nerc-essc.ac.uk/ncWMS/wms";    

    var url = "http://behemoth.nerc-essc.ac.uk/ncWMS/wms?item=menu&menu=&request=GetMetadata";    
    var conn = new Ext.data.Connection();
    conn.request({
        url: "tearxml.asp?URL=" + escape(url),
        // url: "netcdf.xml",
        method: 'GET',
        success: OnMenuLoaded,
        failure: OnFunctionFailed
    });	        
}


Ext.onReady(function(){
    LoadMenu();
});

function CreateInterface() {

    var toolBar = new Ext.getCmp('main-tool-bar');
    
	// create form
	var form = new Ext.FormPanel({
		labelWidth: 120,
		padding: 3,
		border: false,

		items: [ {
		    id: 'form_server',
		    xtype: 'textfield',
		    fieldLabel: 'Server',
		    value: 'http://data.ncof.co.uk:8080/ncWMS/wms',
		    readOnly: true,
		    anchor: '100%'
	    },{
		    id: 'form_curitem',
		    xtype: 'textfield',
		    fieldLabel: 'Item',
		    value: 'ostia_gmpe/analysed_sst',
		    readOnly: true,
		    anchor: '100%'
	    },{
	        id: 'form_format',
		    xtype: 'textfield',
		    fieldLabel: 'Format',
		    value: 'OpenLayers',
		    readOnly: true,
		    anchor: '100%'
	    },{
	        id: 'date_1',
		    xtype: 'datefield',
		    fieldLabel: 'Start Date',
		    value: '01/01/2011',
		    anchor: '100%'
	    },{
	        id: 'date_2',
		    xtype: 'datefield',
		    fieldLabel: 'End Date',
		    value: '09/20/2011',
		    anchor: '100%'
	    },{
	        id: 'date_cur',
		    xtype: 'datefield',
		    fieldLabel: 'Current Date',
		    value: '01/01/2011',
		    anchor: '100%'
	    }
	    
		]
	});
	
	function StartAnimate() {
	    var btn = Ext.getCmp('btn_animate');
	    var pressed = btn.pressed;
	    btn.toggle();
	    
	    if (pressed == true) {
	        // alert('stop');
        } 
        else {
            Ext.getCmp('date_cur').setValue(Ext.getCmp('date_1').getValue());
            LoadNextFrame(true);
        }
	    
	    
	}
	
    var mapToolBar = new Ext.Toolbar();
    mapToolBar.add( {
        id: 'btn_animate',
        text: 'Animate',
        icon: 'icons/monitor.png',
        handler: StartAnimate
    } );
    mapToolBar.doLayout();    

	
	var map = new Ext.Panel({
	    title: 'Map',
	    tbar: mapToolBar,
	    height: 500,
	    html:  '<iframe id="mapframe" name="mapframe" src="netcdfmap.asp?server=http://data.ncof.co.uk:8080/ncWMS/wms&layer=ostia_gmpe/analysed_sst" width=100% height=100% frameborder=0></iframe>'
	});
	
    
    var panel = new Ext.Panel({
        title: 'NetCDF',
        tbar: toolBar,
		border:true,
		frame:false,
		region: 'center',
		items: [ form, map ] 
		
        
    });
 
    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [ panel ]
    });
    

 
 };

function LoadNextFrame(start) {
    var btn = Ext.getCmp('btn_animate');
    if (btn.pressed == false)
        return false;

    var server = Ext.getCmp('form_server').getValue();
    var layer  = Ext.getCmp('form_curitem').getValue();
    if (start == null) {
        var datectrl = Ext.getCmp('date_cur');
        var date = new Date(datectrl.getValue());
        date.setDate(date.getDate() + 1);
        datectrl.setValue(date);             
    }
    var date   = Ext.getCmp('date_cur').getRawValue();
    
    var mapFrame = window.frames['mapframe'];
    mapFrame.LoadFrame(server, layer, FormatWMSDate(date));
}
 

</script>
    <table width=100% height=100%>
    <tr>
    <td align=center valign=center height=600 style="FONT-FAMILY: Arial; COLOR: blue; FONT-SIZE: 10pt">Loading Data..<br><br><img src="images/waiting.gif"></td>
    </tr>
    </table>

</body>
</html>

<!---

forward s


-->