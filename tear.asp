<% function getPage( strPage )
	set http_obj = server.CreateObject("Microsoft.XMLHTTP")
	http_obj.open "GET", strPage , false
	http_obj.send
	getPage = http_obj.responseText
	set http_obj = nothing
end function 
' Response.ContentType = "text/xml"

url = Request.QueryString("URL")
if InStr(url, "http:") = 0 then
    csPage = "http://" & Request.ServerVariables("HTTP_HOST") & Request.ServerVariables("URL")
    url = Replace(csPage, "tear.asp", url)
end if    

' Response.Write url
' Response.Write "<br>"
' Response.End

' Response.ContentType = "text/xml"
Response.Write getPage(url)
%>
