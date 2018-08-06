<%

for each x in Request.ServerVariables
  response.write(x & " = " & Request.ServerVariables(x) & "<br />")
next
Response.End


function getPage( strPage )
	set http_obj = server.CreateObject("Microsoft.XMLHTTP")
	http_obj.open "GET", strPage , false
	http_obj.send
	getPage = http_obj.ResponseBody
	set http_obj = nothing
end function 

csGeoserver = "http://www.swdev.co.za:8080/geoserver/GEO/wms?"

csRequest = Request("REQUEST")

if csRequest = "GetMap" then
    csService = csGeoserver
    csService = csService & "REQUEST=" & Request("REQUEST")
    csService = csService & "&LAYERS=" & Request("LAYERS")
    csService = csService & "&LAYERS=" & Request("LAYERS")
    csService = csService & "&STYLES=" & Request("STYLES")    
    csService = csService & "&FORMAT=" & Request("FORMAT")
    csService = csService & "&SERVICE=" & Request("SERVICE")
    csService = csService & "&VERSION=" & Request("VERSION")
    csService = csService & "&EXCEPTIONS=" & Request("EXCEPTIONS")
    csService = csService & "&SRS=" & Request("SRS")
    csService = csService & "&BBOX=" & Request("BBOX")
    csService = csService & "&WIDTH=" & Request("WIDTH")
    csService = csService & "&HEIGHT=" & Request("HEIGHT")
    
    ' Response.Write getPage(csService)
    ' Response.Write csService 
    Response.ContentType = Request("FORMAT")
    Response.BinaryWrite getPage(csService)
end if



%>