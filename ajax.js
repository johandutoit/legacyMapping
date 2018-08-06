
////////////////////////////////
// create http request object //
////////////////////////////////
function CreateHTTPRequest()
{
	// Initialize the xmlhttp variable.
	if (window.XMLHttpRequest) 
	{ 
		// Are we working with mozilla?
		return new XMLHttpRequest(); 
	} 
	else 
	{ 
		// Not Mozilla, must be IE
		return new ActiveXObject("Microsoft.XMLHTTP"); 
	}
	
	// HTTP Request not supported
	alert("Your browser doesn't support xmlhttp.");
	return null;
}

///////////////////////////////////////////////////
// load ajax
///////////////////////////////////////////////////
function LoadAjaxFunction(url, params, fnFunc, wparam)
{
	xmlhttp = CreateHTTPRequest();
	xmlhttp.wparam = wparam;
	if (xmlhttp == null)
	{
		alert("ERROR: Your browser does not support XMLHTTP.");
		return "";
	}
	fnFunc = fnFunc;
	if (params == "")
	{
	    xmlhttp.open("GET", url, true);
	}
	else
	{
	    xmlhttp.open("POST", url, true);
	    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	    xmlhttp.setRequestHeader("Content-length", params.length);
	    xmlhttp.setRequestHeader("Connection", "close");	
	}
	xmlhttp.onreadystatechange = fnFunc;
	xmlhttp.send(params);
}

///////////////////////////////////////////////////
// GetXML label
///////////////////////////////////////////////////
function GetXMLLabel(xmlObject)
{
    if (xmlObject == null)
        return "";
    if (xmlObject.localName != null)
        return xmlObject.localName;
    if (xmlObject.baseName != null)
        return xmlObject.baseName;
    debugger;
}


///////////////////////////////////////////////////
// GetXMLText
///////////////////////////////////////////////////
function GetXMLText(xmlObject)
{
    if (xmlObject == null)
        return "";
    if (xmlObject.textContent != null)
        return xmlObject.textContent;
    else
        return xmlObject.text;
}

///////////////////////////////////////////////////
// GetXML Child nodes
///////////////////////////////////////////////////
function GetChildNodes(xmlElement)
{
    if (xmlElement.children)
        return xmlElement.children;
    if (xmlElement.childNodes)
        return xmlElement.childNodes;
        
    debugger;
}
