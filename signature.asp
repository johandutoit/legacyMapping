<%@  language="VBScript" %>
<%

qs = "" & Request.QueryString
' Response.Write qs & "<br>"

if InStr(qs, "/DEFLAYER=") > 1 then
    qs = Replace(qs, "/DEFLAYER=", "|DEFLAYER=")
    Response.Write qs & "<br>"
    Response.Redirect "signature.asp?" & qs
end if    


if InStr(qs, "&DEFLAYER") > 1 then
    qs = Replace(qs, "&DEFLAYER", "|DEFLAYER")
    Response.Write qs & "<br>"
    Response.Redirect "signature.asp?" & qs
end if    

sources = Request("sources")
' Response.Write sources
' Response.End


if Mid(sources, 1, 1) = "'" then
    sources = Mid(sources, 2, Len(sources) - 1)
end if    

if Mid(sources, Len(sources), 1) = "'" then
    sources = Mid(sources, 1, Len(sources) - 1)
end if    
        
sources = Replace(sources, "`", "'")        

%>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<title>Signature</title>

	<script type="text/javascript" src="ext/adapter/ext/ext-base.js"></script>
	<script type="text/javascript" src="ext/ext-all.js"></script>
	<script type="text/javascript" src="querystring.js"></script>
	<script type="text/javascript" src="saeon.js"></script>
	<script src="ajax.js"></script>

	<link rel="stylesheet" type="text/css" href="ext/examples/shared/examples.css" />
	<link rel="stylesheet" type="text/css" href="ext/resources/css/ext-all.css" />
	<link rel="stylesheet" type="text/css" href="ext/examples/ux/css/statusbar.css" />
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.js"></script>
	
	<!--<link rel="stylesheet" type="text/css" href="ext/resources/css/xtheme-gray.css" />-->
</head>
<body>
	<%

	
function GetItem(key)
	GetItem = Request(key)
	GetItem = Replace(GetItem, Chr(13), "|")
	GetItem = Replace(GetItem, Chr(10), "")
end function    


function SafeRequest(name)
    txt = Request(name)
    txt = Replace(txt, Chr(13), "<br>")
    txt = Replace(txt, Chr(10), "")
    txt = Replace(txt, "'", "\'")
    SafeRequest = txt
end function
	%>

	<script type="text/javascript">

	    

		var keywords = '<%=GetItem("keywords")%>';
		var sources = ['<%=sources%>'];
		var deflayer = '<%=Request("deflayer")%>';
		var defstyle = '<%=Request("defstyle")%>';
		var sigmode = '<%=Request("mode")%>';

		
		for (var i = 0; i < sources.length; i++) {
		    var source = sources[i];
		    var sourc1 = 'https://metacat.saeon.ac.za/metacat/metacat?action=read&qformat=saeon&sessionid=0&docid=nikkis.101.1';
		    debugger;
		    source = source.replace('http://saeonmetacat.co.za/knb/metacat?', 'https://metacat.saeon.ac.za/metacat/metacat?');
		    sources[i] = source;



		}
		
		var global = { };
		global.defnode = null;
		global.wmsloading = true;
		global.nodecount = 0;
		global.wmsMode = false;

		function IsParentGap() {
		    try {
		        if (parent.ReloadLayerGrid || sigmode == 'GAP')
		            return true;
		    }
		    catch (e) {

		    }
		    return false;
		}
                    
		
		
		
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
	    
        function LoadNextFrame(start) {
            var btn = Ext.getCmp('btn_animate');
            if (btn.pressed == false)
                return false;
                
            var date1 = new Date(Ext.getCmp('date_1').getValue());   
            var date2 = new Date(Ext.getCmp('date_2').getValue());   

            var server = global.netcdfserver;
            var layer  = global.netcdflayer;
            if (start == null) {
                var datectrl = Ext.getCmp('date_cur');
                var date = new Date(datectrl.getValue());
                date.setDate(date.getDate() + 1);
                
                if (date > date2)
                    date = date1;
                
                datectrl.setValue(date);         
                
                
            }
            var date   = Ext.getCmp('date_cur').getRawValue();
            
            
            var mapFrame = window.frames['PREVFRAME'];
            mapFrame.LoadFrame(server, layer, FormatWMSDate(date));
        }
	    
	    
	    function disableDateRageToolbar() {
            Ext.getCmp('date_1_label').disable();
            Ext.getCmp('date_1').disable();
            Ext.getCmp('date_2_label').disable();
            Ext.getCmp('date_2').disable();
            Ext.getCmp('date_cur_label').disable();
            Ext.getCmp('date_cur').disable();
            Ext.getCmp('btn_animate').disable();
	    }
		
	    function enableDateRageToolbar() {
            Ext.getCmp('date_1_label').enable();
            Ext.getCmp('date_1').enable();
            Ext.getCmp('date_2_label').enable();
            Ext.getCmp('date_2').enable();
            Ext.getCmp('date_cur_label').enable();
            Ext.getCmp('date_cur').enable();
            Ext.getCmp('btn_animate').enable();
            if (IsParentGap())
                Ext.getCmp('add_to_list_button').enable();
	    }
	    
        function FormatWMSDate(date) {
            arDate = date.split('/');
            return arDate[2] + '-' + arDate[0] + '-' + arDate[1] + 'T12:00:00';
        }
	    
	    function getCurrentDate() {
            var date   = Ext.getCmp('date_cur').getRawValue();
            return FormatWMSDate(date);
	    }
		
		function DoLog(text) {
            // console.log(text);
		}
		
        function enableAddChartButton() {
            if (IsParentGap())
                Ext.getCmp('add_to_graph_list_button').enable();
        }

		var qs = new Querystring();    
		var token = qs.get("TOKEN", "");
		//if (token != "" && token != null)
            localStorage.setItem("saeontoken", token);

        global.theme = qs.get('THEME', '');
        LoadTheme();
            
		localStorage.setItem("saeoncustodian", qs.get("CUSTODIAN", ""));
        localStorage.setItem("saeonrepository", qs.get("REPOSITORY", ""));
        localStorage.setItem("saeoncitation", qs.get("CITATION", ""));
        
        
        var docurl = document.URL;
        var index = docurl.indexOf('signature.asp');
        var server = docurl.substring(0, index);

        function startWaitDlg(msg) {
            closeWaitDlg();
            global.waitbox = Ext.MessageBox.wait(msg ? msg : "Loading data...", 'MapView');
        }

        function closeWaitDlg() {
            if (global.waitbox) {
                global.waitbox.hide();
                global.waitbox = null;
            }
        }
        
        
        function startNextRequest() {
            if (global.request.length <= 0) {
                global.wmsloading = false;
                closeWaitDlg();
				setTimeout("openFirstSource();", 200);
                return;
			}
            
            var req = global.request[global.request.length - 1];
            global.request.pop();
           
            var conn = new Ext.data.Connection();
            conn.request({
                url: req.url,
                node: req.node,
                method: 'GET',
                success: OnAjaxLoaded,
                failure: OnAjaxFailed
            });	        
            
            
//            startNextRequest();
            
            
            
            
        }
                
        
		
		/***
            {
                text: 'PDF Document',
                icon: 'icons/pdf.png',
                handler: function() { downloadLayer('application/pdf'); }
            },
            '-',
            {
                text: 'PNG Image',
                icon: 'icons/image.png',
                handler: function() { downloadLayer('image/png'); }
            },
            {
                text: 'JPEG Image',
                icon: 'icons/image.png',
                handler: function() { downloadLayer('image/jpeg'); }
            },
            {
                text: 'GIF Image',
                icon: 'icons/image.png',
                handler: function() { downloadLayer('image/gif'); }
            },
            '-',
            {
                text: 'KML Document',
                icon: 'icons/google_earth.png',
                handler: function() { downloadLayer('application/vnd.google-earth.kmz'); }
            },
            {
                text: 'ESRI Shape file',
                icon: 'icons/shape_move_forwards.png',
                handler: function() { downloadLayer('SHAPE-ZIP'); }
            }

		***/
		
		function clearDownloads() {
		    var button = Ext.getCmp('btn_download');
		    button.menu = new Ext.menu.Menu({});
		}
		
		function doDownload() {
		    if (global.download != '') {
		        window.frames['hidden-download-frame'].location = global.download;
		        return;
            }
            
            if (global.format != '') {
                downloadLayer(global.format);
            
            }
		}
		
		function pushDownload(name, icon, src, format, submenu) {
		
		    var button = Ext.getCmp('btn_download');
		    var menu = button.menu;
		    
		    if (name == '-') {
		        menu.addItem('-');
		        return;
            }
		    
		    if (src == '' && format == '') {

                var data = new Array();
                for (var i=0; i<submenu.length; i++) {
                    data.push({
                        text: submenu[i],
                        handler: function() {
                            global.download = '';
                            global.format = this.text;
                            CheckStuff();
                        }
                    });
                        
                
                }

		    
		        menu.addItem({
                    text : name,
                    icon : 'icons/arrow_right.png',
                    menu: data
                });
		    
		    }
		    else
		    {
		        menu.addItem({
                    text : name,
                    icon : icon,
                    source: src,
                    format: format,
                    handler: function() {
                        global.download = this.source;
                        global.format = this.format;
                        CheckStuff();
                        
                        // window.frames['hidden-download-frame'].location = src;
                        
                         
                    }
                });
            }
            
            button.enable();
		}


		function CheckStuff() {
		    doDownload();
		    return;
        
            var url  = 'http://data.dirisa.org/getTerms?TOKEN=' + escape(localStorage.getItem("saeontoken")) + '&CUSTODIAN=' + escape(localStorage.getItem("saeonrepository")) + "&RANDOM=" + Math.random();

            var conn = new Ext.data.Connection();
            conn.request({
                url: 'tear.asp?url=' + escape(url),
                method: 'GET',
                success: function(ret) {
                    try {
                        code = 'res=' + ret.responseText + ';'
                        eval(code);
                        var ret = res;
                        if (ret.success == 'false') {
                            if (ret.msg == "UserID not given") {
                                doSignIn();
                                return;
                            }
                            Ext.getCmp('btn_download').menu.hide();
                            
                            alert('e1: ' + ret.msg);
                            return;
                        }
                        
                        if (ret.ticked == "false") {
                            Ext.getCmp('btn_download').menu.hide();
                            global.terms = ret.text;
                            doTerms();
                            return;
                        }
                        else {
                            doDownload();
                        }
                            
                    }
                    catch (err) {
                        alert('e2: ' + err);
                        return;
                    }
                    
                
                },
                failure: function(ret) {
                    
                }
            });	        
        }

        function doSignIn() {
	        // create window    
	        var dlg = new Ext.Window({
	            id: 'signInDialog',
	            width: 500,
		        height: 380,
		        closable: true,
		        modal: true,
		        title: 'You need to log in before you can access this data',
		        layout: 'fit',
                html: '<iframe width=100% height=100% frameborder=0 src="http://data.dirisa.org/login_form?came_from=' + server + 'wt_settoken.asp"></iframe>'
	        });
        	
	        // show window
	        dlg.show();
	        signInDialog = dlg;
        }

        function doTerms() {

	        // create window    
	        var dlg = new Ext.Window({
	            width: 600,
		        height: 380,
		        
		        closable: true,
		        modal: true,
		        title: 'Terms and conditions',
		        layout: 'fit',
		        padding: 5,
		        style: 'backgroundcolor: white',
                html: global.terms,		
		        buttonAlign: 'left',
		        buttons: [ {
			        text: 'Accept',
			        minWidth: 75,
			        handler: function() {
				            dlg.close();
			                var url  = 'http://data.dirisa.org/acceptTerms?TOKEN=' + escape(localStorage.getItem("saeontoken")) + '&CUSTODIAN=' + escape(localStorage.getItem("saeonrepository")) + "&RANDOM=" + Math.random();
                            var conn = new Ext.data.Connection();
                            conn.request({
                                url: 'tear.asp?url=' + escape(url),
                                method: 'GET',
                                success: function(ret) {
                                    try {
                                        code = 'res=' + ret.responseText + ';'
                                        eval(code);
                                        var ret = res;
                                        if (ret.success == 'false') {
                                            alert('e3: ' + ret.msg);
                                            return;
                                        }
                                        
                                        if (ret.success == 'true') {
                                            doDownload();
                                            return;
                                        }
                                        
                                       
                                    }
                                    catch(e) {
                                    
                                    }
                                },
                                failure: function(ret) {
                                
                                }
                            });	        
                        			

        				    
			            }
        				
			        }, {
			        text: 'Cancel',
			        minWidth: 75,
			        handler: function() {
				            dlg.close()
				        }
			        }
		        ]
        		
	        });
        	
	        // show window
	        dlg.show();


        }


        function setToken(token) {
            localStorage.setItem("saeontoken", token);
            Ext.getCmp('signInDialog').close();
            alert('User signed in successfully!');
        }
		
		
		
		function selectWmsLayer() {
			

		    if (window.frames["PREVFRAME"].selectWmsLayer == null) {
		        setTimeout("selectWmsLayer();", 100);
		        return;
		    }
			
            window.frames["PREVFRAME"].selectWmsLayer(global.wmsLayerName, global.wmsStyleName);
		}
		
		function downloadLayer(format) {
		    window.frames["PREVFRAME"].downloadLayer(format);
		}

		function trimString(s) {
			var l = 0;
			var r = s.length - 1;
			while (l < s.length && (s[l] == ' ' || s[l] == '\r' || s[l] == '\n' || s[l] == '\t'))
				l++;
			while (r > l && (s[r] == ' ' || s[r] == '\r' || s[r] == '\n' || s[r] == '\t'))
				r -= 1;
			return s.substring(l, r + 1);
		}
		
        function trimAll(sString) {
            while (sString.substring(0, 1) == ' ')
                sString = sString.substring(1, sString.length);
            while (sString.substring(sString.length - 1, sString.length) == ' ')
                sString = sString.substring(0, sString.length - 1);
            return sString;
        }
		
		
        // create a get-capabilities url	
        function CreateWMSURL(lzURL) {
            // trim string
            lzURL = trimAll(lzURL);
            qindex = lzURL.indexOf('?');
            if (qindex > 0) {
                if (lzURL.substring(qindex + 1) == 'MAP')
                    lzURL += '=GAP';
            }

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
                return 'tearxml.asp?URL=' + escape(lzURL);
            else
                return lzURL;
        }



        function getExtension(myURL) {
            if (myURL.indexOf(".pdf") >= 0)
                return "PDF";
		
		    
		    if (keywords.indexOf("WMS") >= 0 || keywords.indexOf("wms") >= 0)
		        return "WMS";
		        
            if (keywords.indexOf("chart") >= 0)
                return "Data";
                		        
            if (keywords.indexOf("wamis") >= 0)
                return "Wamis";

            if (keywords.indexOf("GeoRSS") >= 0 || keywords.indexOf("GEORSS") >= 0)
                return "GeoRSS";

            debugger;

		    var myExt = "Other";
			if (myURL.indexOf(".htm") > 0) {
				var myExt = "HTM";
			}
			else if (myURL.indexOf(".html") > 0) {
				var myExt = "HTM";
			}
			else if (myURL.indexOf(".kml") > 0 || myURL.indexOf(".KML") > 0 || myURL.indexOf(".Kml") > 0 ) {
				var myExt = "KML";
			}
			else if (myURL.indexOf(".xml") > 0 || myURL.indexOf(".XML") > 0 || myURL.indexOf(".Xml") > 0 ) {
				var myExt = "GeoRSS";
			}
			else if (myURL.indexOf(".shtml") > 0) {
				var myExt = "HTM";
			}
			else if ((myURL.indexOf("mapserver/map") > 0)) {
				var myExt = "GEOWMS";
			}
			else if ((myURL.indexOf("wms.asp") > 0) || (myURL.indexOf("wms.php") > 0) || (myURL.indexOf("wms.cgi") > 0)) {
				var myExt = "GEOWMS";
			}
			else if ((myURL.indexOf("MapServer/WMSServer") > 0)) {
				var myExt = "ARCWMS";
			}
			else if ((myURL.indexOf("MapServer/WFSServer") > 0)) {
				var myExt = "ARCWFS";
			}
			else if ((myURL.indexOf("/sos") > 0)) {
				var myExt = "SOS";
			}
			else if ((myURL.indexOf("geoserver/wms") > 0)) {
				var myExt = "GEOWMS";
			}
			else if ((myURL.indexOf("service=wms") > 0)) {
				var myExt = "GEOWMS";
			}
			else if ((myURL.indexOf("service=wfs") > 0)) {
				var myExt = "ARCWFS";
			}
			else if (myURL.indexOf(".zip") > 0) {
				var myExt = "ZIP";
			}
			else if (myURL.indexOf(".tar") > 0) {
				var myExt = "ZIP";
			}
			else if (myURL.indexOf("cogrid://") > 0) {
			    var myExt = "EcoGrid";
			}
			else if (myURL.indexOf('metacat') > 0) {
			    var myExt = "EcoGrid";
			}
			else if (myURL.indexOf("/knb/metacat") > 0) {
			    var myExt = "EcoGrid";
			}
			else if (myURL.indexOf("/ncwms/") > 0) {
			    var myExt = "NETCDF";
			}
			return myExt;
		}

		function DoMessageBox(title, msg) {
		    Ext.Msg.show({
		        title: title,
		        msg: msg,
		        minWidth: 200,
		        modal: true,
		        icon: Ext.Msg.INFO,
		        buttons: Ext.Msg.OK
		    });
		}

		function parseSignature(sources, keywords) {

			// parse sources
			var source = trimString(sources.toLowerCase());
			var sig = getExtension(source);
			switch (sig) {
				case "CGI":
				case "ARCWMS":
				case "GEOWMS":
					return 'WMS';
				case "ARCWFS":
					return 'WFS';
				case "EcoGrid":
					return 'EcoGrid';
				case "NETCDF":
				    return 'NETCDF';
				case "PDF":
				    return "PDF";
			}
			
			// parse keywords
			var keywords = keywords.split('\n');
			for (var i = 0; i < keywords.length; i++) {
				var keyword = trimString(keywords[i].toUpperCase());
				switch (keyword) {
				    case 'chart':
				    case 'wamis':
					case 'WMS':
					case 'WFS':
					case 'SOS':
					case 'EcoGrid':
					case 'NETCDF':
						return keyword;
				}
			}

			// find any types
			var source = trimString(sources.toLowerCase());
			var sig = getExtension(source);
			if (sig != 'Other')
				return sig;

return 'Other';
		}

		var wmsfcount = 1;

		function addFuncMissing() {
		    alert('no add function available');
		}

		function addFuncWMS() {
		    var f = { data: { link: global.source} };
		    var layer = window.frames["PREVFRAME"].addWmsToList();
		    var mapFrame = parent.window.frames['mapframe'];
			
			if (sigmode == 'GAP')
			{
				var name = layer.layers.csName;
				var service = layer.url;
				var layer = layer.layers.csName;
				var url = 'addgaplayer.asp?url=' + name + '|' + service + '|' + layer;
				parent.location = url;
				return;
			}
			
		    if (mapFrame && mapFrame.map) {
		        var style = layer.styles.csName;
		        // AddWMS(name,                url,       layers,               transparent, title,                absdesc, link, styles) {
		        var layer = mapFrame.AddWMS(layer.layers.csName, layer.url, layer.layers.csName, true, layer.layers.csTitle, layer.layers.csAbstract, layer.url, style);
		        layer.title = '<%=SafeRequest("title")%>';
		        layer.link = '<%=SafeRequest("link")%><split>' + global.source;
		        layer.absdesc = '<%=SafeRequest("absdesc")%>';
		        layer.custodian = '<%=SafeRequest("custodian")%>';
		        layer.citation = '<%=SafeRequest("citation")%>';
		        layer.styles = style;
		        if (IsParentGap())
		            parent.ReloadLayerGrid();
		        DoMessageBox("SAEON", "The layer has been successfully added.");
		    }
		}

		function openWmsBox(source) {
		    if (IsParentGap())
                Ext.getCmp('add_to_list_button').enable();
			if (global.wmsloading == true)
				return;
		    window.frames['PREVFRAME'].location = 'qwmsbox4.asp?SP=1&url=' + escape(source);
		    global.addFunction = addFuncWMS;
			setTimeout('selectWmsLayer();', 200);
		}
		
		function addGeoRSS(source) {
	        alert('add' + source);
    	}
		
		function openGeoRSSBox(source) {
		    window.frames['PREVFRAME'].location = 'qgeorssbox.asp?SP=1&url=' + escape(source);
		    global.addFunction = addFuncGeoRSS;
		}
		
		function addKML(source) {
	        alert('add' + source);
    	}
    	
		function openKMLBox(source) {
		    window.frames['PREVFRAME'].location = 'qkmlbox.asp?SP=1&url=' + escape(source);
		    global.addFunction = addFuncKML;
		}
		

		function addFuncSOS() {
		    var f = { data: { link: global.source} };
		    var mapFrame = parent.window.frames['mapframe'];
		    if (mapFrame && mapFrame.map) {
		        var layer = mapFrame.AddSOS(global.source, f.data.link);
		        layer.title = '<%=SafeRequest("title")%>';
		        layer.link = '<%=SafeRequest("link")%><split>' + global.source;
		        layer.absdesc = '<%=SafeRequest("absdesc")%>';
		        layer.custodian = '<%=SafeRequest("custodian")%>';
		        layer.citation = '<%=SafeRequest("citation")%>';
		        if (IsParentGap())
    		        parent.ReloadLayerGrid();
		        DoMessageBox("SAEON", "The layer has been successfully added.");
		    }
		}
		
		function addSosFeature(name) {
		    var f = { data: { link: global.source} };
		    var title = '<%=SafeRequest("title")%>';
		    var citation = '<%=SafeRequest("citation")%>'; 
		    parent.selectChart(title + '|' + global.source + '~' + name + '|' + citation);
		}
		
		function addGraphSOS() {
		    window.frames['PREVFRAME'].selectFeature(addSosFeature);
		}

		function openSosBox(source) {
		    if (IsParentGap())
                Ext.getCmp('add_to_list_button').enable();
		    window.frames['PREVFRAME'].location = 'mysos.htm?v=2&sos=' + escape(source)
		    global.addFunction = addFuncSOS;
		    global.addChartFunction = addGraphSOS;
		}
		
		function addFuncData() {
		    var f = { data: { link: global.source} };
		    var title = '<%=SafeRequest("title")%>';
		    var citation = '<%=SafeRequest("citation")%>'; 
		    parent.selectChart(title + '|' + global.source + '|' + citation);
		}

		function openDataBox(source) {
		    window.frames['PREVFRAME'].location = 'qdatabox.asp?URL=' + escape(source)
		    global.addChartFunction = addFuncData;
		}

		function addFuncWamis() {
		    var f = { data: { link: global.source} };
		    var title = '<%=SafeRequest("title")%>';
		    var citation = '<%=SafeRequest("citation")%>'; 
		    parent.selectChart(title + '|' + global.source + '|' + citation);
		}

		function openWamisBox(source) {
		    window.frames['PREVFRAME'].location = 'qwamisbox.asp?URL=' + escape(source)
		    global.addChartFunction = addFuncWamis;
		}
		
		function addEchoGridData() {
		    
		}
		

		function openEcogrid(source) {
			var template = 'http://saeonocean.co.za/knb/metacat/SOURCE/saeon';
//			var index = source.indexOf('knb/');
//			var url = template.replace('SOURCE', escape(source.substring(index + 4)));
			var url = source;
			window.frames['PREVFRAME'].location = 'gridcsv.asp?src=' + escape(url);
			global.addChartFunction = addFuncData;
        }
        
        function addFuncNetCDF() {
            var server = global.netcdfserver;
            var layer = global.netcdflayer;
            var url = server + '?LAYERS=' + layer + '&CRS=CRS%3A84&TIME=' + getCurrentDate();
            
		    var mapFrame = parent.window.frames['mapframe'];
		    if (mapFrame && mapFrame.map) {
		        //                   AddWMS(name,  url,       layers,  transparent, title,   absdesc, link, styles) {
		        var layer = mapFrame.AddWMS(layer, url,       layer,   true,        layer,   '',      url,  '');
		        layer.title = '<%=SafeRequest("title")%>';
		        layer.link = '<%=SafeRequest("link")%><split>' + global.source;
		        layer.absdesc = '<%=SafeRequest("absdesc")%>';
		        layer.custodian = '<%=SafeRequest("custodian")%>';
		        layer.citation = '<%=SafeRequest("citation")%>';
		        layer.styles = '';
		        if (IsParentGap())
		            parent.ReloadLayerGrid();
		        DoMessageBox("SAEON", "The layer has been successfully added.");
		    }
        }
        
        function openNETCDF(source) {
            window.frames['PREVFRAME'].location = 'netcdfmap.asp';
            global.addFunction = addFuncNetCDF;        

        }

        function openOther(source) {
            window.frames['PREVFRAME'].location = 'showlink.asp?SRC=' + escape(source);
        }

        function openPDFBox(source) {
            window.frames['PREVFRAME'].location = source;
        }


        function OnAjaxFailed() {
            closeWaitDlg();
            openFirstSource();
            alert('Failed to retrieve data');
        }


        function OnAjaxLoaded(ret, con) {
            
            var node = con.node;
            if (node.attributes.level == 'netcdf') {
                var data = Ext.util.JSON.decode(ret.responseText);
                
                // remove children
                while(node.firstChild) {
                    node.removeChild(node.firstChild);
                }
                
                AddMenu(node, data);
                
                node.expand();

                startNextRequest();
                return;


            }

            
            var xmlDoc = $(ret.responseText);
            
        
            // var xmlDoc = ret.responseXML.documentElement;
			global.xmldoc = xmlDoc;
            
            
            
            DoLog('load:' + node.attributes.text);
			
			global.wmsloading = true;
			
            
            
            
            // remove children
            while(node.firstChild) {
                node.removeChild(node.firstChild);
            }

  
            // get service info
            var xmlService = xmlDoc.find("Service")[0];
            if (xmlService == null) {
                alert('Error in xml');
                return 0;
            }

            var xmlServiceName = xmlService.getElementsByTagName("Name")[0];
            var xmlServiceTitle = xmlService.getElementsByTagName("Title")[0];
            var xmlServiceAbstract = xmlService.getElementsByTagName("Abstract")[0];

            // get capabilities
            var xmlCapability = xmlDoc.find("Capability")[0];
            var xmlRequest = xmlCapability.getElementsByTagName("Request")[0];
            var xmlGetMap = xmlRequest.getElementsByTagName("GetMap")[0];
            var xmlDCPType = xmlGetMap.getElementsByTagName("DCPType")[0];
            var xmlHTTP = xmlDCPType.getElementsByTagName("HTTP")[0];
            var xmlGet = xmlHTTP.getElementsByTagName("Get")[0];
            var xmlOnlineResource = xmlGet.getElementsByTagName("OnlineResource")[0];

            // formats
            var xmlFormat = xmlGetMap.getElementsByTagName("Format");

            // layers
            var xmlLayers = xmlCapability.getElementsByTagName("Layer")[0];
            var xmlLayer = xmlLayers.getElementsByTagName("Layer");
            if (xmlLayer.length == 0)
                xmlLayer = xmlCapability.getElementsByTagName("Layer");

            for (i = 0; i < xmlLayer.length; i++) {
                var layer = {};
                layer.csName = GetXMLText(xmlLayer[i].getElementsByTagName("Name")[0]);
                layer.csTitle = GetXMLText(xmlLayer[i].getElementsByTagName("Title")[0]);
                layer.csAbstract = GetXMLText(xmlLayer[i].getElementsByTagName("Abstract")[0]);
            
                var node_layer = new Ext.tree.TreeNode({
                    level: 'layer',
                    text: layer.csName,
                    icon: 'icons/layers.png',
                    selected: (layer.csName == deflayer),
                    expanded: (layer.csName == deflayer),
                    leaf: false
                });
				
				if (deflayer == null || deflayer == "") {
					if (global.wmsLayerName == null || global.wmsLayerName == "")
					{
						global.wmsLayerName = layer.csName;
						global.wmsStyleName = '';
					}
				}
				else {
					if (layer.csName == deflayer) {
						global.wmsLayerName = layer.csName;
						global.wmsStyleName = '';
						global.wmsMode = true;
						// selectWmsLayer();
					}
				}
                
                var xmlStyles = xmlLayer[i].getElementsByTagName("Style")
                for (s = 0; s < xmlStyles.length; s++) {
                    var styleText = xmlStyles[s].outerHTML;
                    var styleDoc = jQuery.parseXML(styleText);
                
                    var style = {};
                    style.csName = GetXMLText(styleDoc.getElementsByTagName("Name")[0]);
                    style.csTitle = GetXMLText(styleDoc.getElementsByTagName("Title")[0]);
                    
                    var node_style = new Ext.tree.TreeNode({
                        level: 'style',
                        text: style.csName,
                        icon: 'icons/style.png',
                        expanded: true,
                        leaf: false
                    });
                    
                    node_layer.appendChild(node_style);
					global.nodecount++;
                    
                }
                node.appendChild(node_layer);
				global.nodecount++;
            }            
            node.expand();
			
            startNextRequest();
        }            





        function openPage(source, type) {
            Ext.getCmp('preview-panel').setTitle(source);
            Ext.getCmp('add_to_list_button').disable();
            global.addFunction = addFuncMissing;
            global.source = source;
            disableDateRageToolbar();
            
			
            // delete old download options            
            clearDownloads();
            
            if (type == null || type == '')
                type = parseSignature(source, keywords);
               
                
			switch (type) {
				case 'WMS':
					openWmsBox(source);
					break;
                case 'Data':
                    openDataBox(source);
                    break;
                case 'Wamis':
                    openWamisBox(source);
                    break;
                    
				case 'SOS':
					openSosBox(source);
					break;
				case 'EcoGrid':
					openEcogrid(source);
					break;
				case 'NETCDF':
				    openNETCDF(source);
				    break;
                case 'GeoRSS':
                    openGeoRSSBox(source);
                    break;
                case 'KML':
                    openKMLBox(source);
                    break;
                case 'PDF':
                    openPDFBox(source);
                    break;
				default:
				    openOther(source);
					break;
			}
		}



		var arTypes = new Array();
		var typeAll = { name: 'All', items: [] };
		arTypes.push(typeAll);

		function sortTypes(type1, type2) {
			if (type1.name == type2.name)
				return 0;
			if (type1.name > type2.name)
				return 1;
			else
				return -1;
		}

		var data = new Array();

		function openFirstSource() {
		    var source = global.firstsource;
		    if (source != '') {
		        openPage(source);
		    }
		    else {
			    if (data.length > 0) {
				    var item = data[0][0];
				    openPage(item);
			    }
            }
		}

		function initPage() {
		    var arSource = sources;
		    
			for (var i = 0; i < arSource.length; i++) {
			    var source = trimString(arSource[i]);
			    
				var splitsource = source.split("|DEFLAYER=");
				if (splitsource.length > 1) {
				    source = splitsource[0];
				    deflayer = splitsource[1];
				}
				var splitsource = source.split("&DEFLAYER=");
				if (splitsource.length > 1) {
				    source = splitsource[0];
				    deflayer = splitsource[1];
				}
				
				
				
				
				if (source != '') {
				    var type = parseSignature(source, keywords);
				    if (global.firstsource == null)
				        global.firstsource = source;
				    
					typeAll.items.push([source, type]);
					for (var t = 0; t < arTypes.length; t++) {
						if (arTypes[t].name == type) {
							arTypes[t].items.push([source, type]);
							break;
						}
					}
					if (t == arTypes.length) {
						var ntype = { name: type, items: [] };
						ntype.items.push([source, type]);
						arTypes.push(ntype);
					}
					data.push([source, type]);
				}
			}

			function renderLink(a, b, c, d) {

				return '<a href=# onclick="openPage(\'' + a + '\'); return false;">' + a + '</a>';
			}

			var panelMain = new Ext.grid.GridPanel({
				id: 'main-tab-ctrl',
				enableTabScroll: true,
				frame: false,
				border: false,
				region: 'center',
				buttonAlign: 'left',
				frame: false,
				autoScroll: true,
				hideColumns: true,
				layoutConfig: {
					align: 'stretch'
				},
				columns: [
			{ width: 600, header: "Source", dataIndex: 'name', sortable: true, renderer: renderLink },
			{ width: 80, header: "Type", dataIndex: 'type', sortable: true }
		],
				store: new Ext.data.ArrayStore({
					fields: ['name', 'type'],
					data: data
				})
			});
			
            var node_root = new Ext.tree.TreeNode({
                level: 'root',
                text: 'root',
                expanded: true,
                leaf: false
            });


            startWaitDlg('Loading data');

			var tabs = [];
			global.request = new Array();
			
			for (var i = 1; i < arTypes.length; i++) {
				var ntype = arTypes[i];
				var header = ntype.name;
				switch (ntype.name) {
					case 'KML':
						header = 'KML: Google Maps KML Format';
						break;
					case 'SOS':
						header = 'SOS: Sensor Observation Services';
						break;
					case 'Other':
						header = 'Other: Websites and Links';
						break;
					case 'WMS':
						header = 'WMS: Web Map Services';
						break;
					case 'PDF':
						header = 'PDF Document';
						break;
					case 'NetCDF':
						header = 'NetCDF';
						break;
					case 'EcoGRID':
						header = 'MetaCAT';
						break;
					case 'GeoRSS':
						header = 'GeoRSS';
						break;
				}

                var node_type = new Ext.tree.TreeNode({
                    level: 'type',
                    text: header,
                    expanded: true,
                    leaf: false
                });
                
                
                
                for (var n=0; n<ntype.items.length; n++) {
                    var item = ntype.items[n];
                    
                    if (ntype.name == 'NETCDF') {
                    
                        var url = item[0];
                        var service = "tearxml.asp?URL=" + escape(url);
                        var t = url.indexOf('?');
                        global.load_server = url.substring(0, t);
                    
                        var node_item = new Ext.tree.TreeNode({
                            
                            level: 'netcdf',
                            text: item[0],
                            icon: 'icons/server.png',
                            expanded: false,
                            leaf: false
                        });

                                    
                        var nodes = new Ext.tree.AsyncTreeNode({
                            level: 'async',
                            text: 'Loading..',
                            expanded: true
                        });
                        

                        global.request.push( { url: service, node: node_item } );
                        
                        node_item.appendChild(nodes);
                        node_type.appendChild(node_item);
						global.nodecount++;
                    
                    }
                    else if (ntype.name == 'WMS') {
                        var node_item = new Ext.tree.TreeNode({
                            level: 'wmsservice',
                            text: item[0],
                            icon: 'icons/server.png',
                            expanded: false,
                            leaf: false
                        });

                                    
                        var nodes = new Ext.tree.AsyncTreeNode({
                            level: 'async',
                            text: 'Loading..',
                            expanded: true
                        });
                        
                        var wmsURL = CreateWMSURL(item[0]);
                        
                        
                        DoLog('create req: ' + wmsURL);
                        
                        global.request.push( { url: wmsURL, node: node_item } );
                        
/*                        
                        var conn = new Ext.data.Connection();
                        conn.request({
                            url: wmsURL,
                            node: node_item,
                            method: 'GET',
                            success: OnAjaxLoaded
                        });	        
*/                        

//                        LoadAjaxFunction(wmsURL, "", OnAjaxLoaded, node_item)
                        
                        
                        node_item.appendChild(nodes);
						global.nodecount++;
                        
                        
                        node_type.appendChild(node_item);
						global.nodecount++;
                    }
                    else if (ntype.name == 'EcoGrid' || ntype.name == 'SOS' || ntype.name == 'GeoRSS' || ntype.name == 'KML' || ntype.name == 'Data' || ntype.name == 'Wamis' || ntype.name == 'NETCDF') {
                        var node_item = new Ext.tree.TreeNode({
                            level: ntype.name,
                            text: item[0],
                            icon: 'icons/page.png',
                            expanded: false,
                            leaf: true
                        });
                        node_type.appendChild(node_item);    
						global.nodecount++;
                    }
                    else
                    {
                        var node_item = new Ext.tree.TreeNode({
                            level: 'link',
                            text: item[0],
                            icon: 'icons/page.png',
                            expanded: false,
                            leaf: true
                        });

                    
                        node_type.appendChild(node_item);    
						global.nodecount++;
                    
                    }
                    
                    
                }
                
                
                node_root.appendChild(node_type);
				global.nodecount++;
				
				
				var tab = {
					title: ntype.name,
					xtype: 'grid',
					enableTabScroll: true,
					frame: false,
					border: false,
					region: 'center',
					buttonAlign: 'left',
					frame: false,
					autoScroll: true,
					hideColumns: true,
					layoutConfig: {
						align: 'stretch'
					},
					autoExpandColumn: 'source_col',
					columns: [
				{ header: "Source", dataIndex: 'name', sortable: true, renderer: renderLink, id: 'source_col' },
				{ header: "Type", dataIndex: 'type', sortable: true, hidden: i > 0 }
			],
					store: new Ext.data.ArrayStore({
						fields: ['name', 'type'],
						data: ntype.items
					})
				};

				tabs.push(tab);
			}
			
			

			var tabPanelX = new Ext.tree.TreePanel({
                useArrows: true,
                autoScroll: true,
                animate: true,
                enableDD: true,
                containerScroll: true,
                border: false,
                rootVisible : false,
                root: node_root,
                listeners: {
		            click: function(node) {
		                if (node.attributes.level == 'type') {
		                    return;
		                }
		                if (node.attributes.level == 'link') {
		                    openPage(node.text, "HTM");
		                    return;
		                }
		                if (node.attributes.level == 'EcoGrid') {
		                    openPage(node.text, "EcoGrid");
		                    return;
		                }
		                if (node.attributes.level == 'NETCDF') {
		                    openPage(node.text, "NETCDF");
		                    return;
		                }
		                if (node.attributes.level == 'SOS') {
		                    openPage(node.text, "SOS");
		                    return;
		                }
		                if (node.attributes.level == 'GeoRSS') {
		                    openPage(node.text, "GeoRSS");
		                    return;
		                }
		                if (node.attributes.level == 'Data') {
		                    openPage(node.text, "Data");
		                    return;
		                }
		                if (node.attributes.level == 'Wamis') {
		                    openPage(node.text, "Wamis");
		                    return;
		                }
		                if (node.attributes.level == 'KML') {
		                    openPage(node.text, "KML");
		                    return;
		                }
		                
		                
		                if (node.attributes.level == 'wmsservice') {
		                    if (global.source != node.text)
		                        openPage(node.text, "WMS");
		                    return;
		                }
		                if (node.attributes.level == 'layer') {
                            global.wmsLayerName = node.text;
                            global.wmsStyleName = '';
		                    var parent = node.parentNode;
		                    if (global.source != parent.text) {
		                        openPage(parent.text, "WMS");
		                        setTimeout('selectWmsLayer();', 200);
		                        return;
                            }
                            selectWmsLayer();
                            return;
		                }

		                if (node.attributes.level == 'style') {
                            
                            global.wmsStyleName = node.text;
                            node = node.parentNode;
                            global.wmsLayerName = node.text;
		                    var parent = node.parentNode;
		                    if (global.source != parent.text)
		                        openPage(parent.text, "WMS");
                            selectWmsLayer();
                            return;
		                }
		                
		                if (node.attributes.level == 'netcdf_layer') {
		                    global.netcdfserver = node.attributes.server;
		                    global.netcdflayer  = node.attributes.myid;
		                    var url = global.netcdfserver + '?item=layerDetails&layerName=' + global.netcdflayer + '&request=GetMetadata';
		                    // alert(url);
                            var conn = new Ext.data.Connection();
                            conn.request({
                                url: 'tear.asp?url=' + escape(url),
                                method: 'GET',
                                success: function(ret) {
                                    try {
                                        code = 'res=' + ret.responseText + ';'
                                        eval(code);
                                        var date1 = new Date(2020, 1, 1);
                                        var date2 = new Date(1980, 1, 1);
                                        
                                        var dates = res.datesWithData;
                                        for (var y in dates) {
                                            var year = dates[y];
                                            for (var m in year) {
                                                var month = year[m];
                                                for (var d in month) {
                                                    var day = month[d];
                                                    var date = new Date(y, m, day);
                                                    if (date1 > date)
                                                        date1 = date;
                                                    if (date2 < date)
                                                        date2 = date;
                                                }
                                            }
                                        }
                                        Ext.getCmp('date_1').setValue(date1);
                                        Ext.getCmp('date_2').setValue(date2);
                                        Ext.getCmp('date_cur').setValue(date1);
                                        
		                                window.frames['PREVFRAME'].CreateLayer(global.netcdfserver, global.netcdflayer);
		                                enableDateRageToolbar();
                                        
                                        
                                        
                                       
                                    }
                                    catch(e) {
                                    
                                    }
                                },
                                failure: function(ret) {
                                
                                }
                            });	        
		                }
		            }
                },
			    tbar: {
			        items: [ {
			            text: ' '
			        } ]
			    },
				width: 350,
				flex: 1,
				split: true,
				border: false,
				frame: false

			});
			
			var tabPanel = new Ext.Panel({
			    title: 'Available Resources',
			    split: true,
			    collapsible: true,
			    region: 'west',
			    width: 300,
				layout: 'vbox',
				layoutConfig: {
					align: 'stretch'
				},
			    items: [ tabPanelX ]
            });
            
            

			var viewPanel = new Ext.Panel({
			    title: 'Preview',
			    region: 'center',
			    collapsible: false,
			    id: 'preview-panel',
			    tbar: [{
			        text: 'Add to Map',
			        icon: 'icons/map_add.png',
			        id: 'add_to_list_button',
			        disabled: true,
			        tooltip: '<b>Add Layer</b><br/>AIncludes the selected layer to your list.',
			        handler: function() {
			                global.addFunction();
			            }
                    },
                    '-',{
			        text: 'Add to Chart',
			        icon: 'icons/chart_bar_add.png',
			        id: 'add_to_graph_list_button',
			        disabled: true,
			        tooltip: '<b>Add Layer</b><br/>AIncludes the selected item to your chart.',
			        handler: function() {
			                global.addChartFunction();
			            }
                    },
                    '-',
                    {
                        text: 'Download',
                        id: 'btn_download',
                        disabled: true,
                        icon: 'icons/save.gif',
                        menu: {
                            items: [ ]
                        }
                    },
                    '-',
                    {
                        id: 'date_1_label',
                        xtype: 'label',
                        text: 'Start date:'
                    },
                    {
	                    id: 'date_1',
		                xtype: 'datefield',
		                anchor: '100%'
	                },
                    '-',
                    {
                        id: 'date_2_label',
                        xtype: 'label',
                        text: 'End Date: '
                    },
	                {
	                    id: 'date_2',
		                xtype: 'datefield',
		                anchor: '100%'
	                },
                    '-',
                    {
                        id: 'date_cur_label',
                        xtype: 'label',
                        text: 'Current Date: '
                    },
	                {
	                    id: 'date_cur',
		                xtype: 'datefield',
		                anchor: '100%',
                        listeners: {
                            'select' : {
                                fn: function(field, date) {
                                    window.frames['PREVFRAME'].CreateLayer(global.netcdfserver, global.netcdflayer);
                                }
                            }
                        }		                
	                },
	                '-',
                    {
                        id: 'btn_animate',
                        text: 'Animate',
                        icon: 'icons/monitor.png',
                        handler: StartAnimate
                    }	                
            	                        
                    ],
			        flex: 1,
			        html: '<iframe src="" name="PREVFRAME" width=100% height=100% frameborder=0 />'
			    });


				var viewport = new Ext.Viewport({
					border: false,
					frame: false,
                    layout:'border',
                    defaults: {
                        collapsible: true,
                        split: true
                    },                
					items: [tabPanel, viewPanel]
				});

                // swap array order                
                var array = new Array();
                for (var i = global.request.length - 1; i >= 0; i--)
                    array.push(global.request[i]);
                global.request = array;
                // load first item
                if (global.request.length > 0)
                    startNextRequest()
                else {
                    closeWaitDlg();
                    openFirstSource();

                }
                    
				
				disableDateRageToolbar();

				
			}

            function AddMenu(parent, root) {
                
                if (root.children && root.children.length > 0) 
                {
                    for (var i=0; i<root.children.length; i++) 
                    {
                        var link = (root.children[i].children == null || root.children[i].children.length == 0);
                        var text = root.children[i].label;
                        if (link == false || root.children[i].id != null)
                        {
                            var server = root.children[i].server;
                            if (server == null || server == "")
                                server = global.load_server;
                                
                            var node = new Ext.tree.TreeNode({
                                text: text,
                                level: link ? 'netcdf_layer' : 'netcdf_group',
                                icon: link ? 'icons/application_go.png' : 'icons/application.png',
                                myid: root.children[i].id,
                                server: server,
                                expanded: false,
                                leaf: link ? true : false
                            });
                            
                            parent.appendChild(node);
							
                            AddMenu(node, root.children[i]);
                        }
                    }
                }
            }
			

			Ext.onReady(initPage);


	</script>

	<iframe name='hidden-download-frame' id='hidden-download-frame' width="0" height="0" style="display: none; visibility: hidden"></iframe>
</body>
</html>


<!--

http://app01.saeon.ac.za/PLATFORM_TEST/MAP/signature.asp?keywords=Disasters%0DFire%0DWMS%0DAFIS%0DMeraka%0DMODIS%0DTerra%0DAqua&sources=http%3A//afis.meraka.org.za/geoserver/wms%3F&CUSTODIAN=ACEP&TOKEN=


http://localhost/saeon/signature.asp?keywords=Disasters%0DFire%0DWMS%0DAFIS%0DMeraka%0DMODIS%0DTerra%0DAqua&sources=http%3A//afis.meraka.org.za/geoserver/wms%3F&CUSTODIAN=ACEP&TOKEN=

-->