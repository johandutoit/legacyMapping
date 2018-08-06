<%
function getPage( strPage )
	set http_obj = server.CreateObject("Microsoft.XMLHTTP")
	http_obj.open "GET", strPage , false
	http_obj.send
	getPage = http_obj.responseText
	set http_obj = nothing
	getPage = Replace(getPage, Chr(146), "'")
	getPage = Replace(getPage, Chr(246), "_")
	getPage = Replace(getPage, Chr(150), "-")
	
	
	
'	text = "10 degree Celsius for May"
'	pos = InStr(getPage, text)
'	Response.Write Mid(getPage, pos + Len(text) + 1, 10) & "<br>"
'	Response.Write Asc(Mid(getPage, pos + Len(text) + 1, 1))
'	Response.End


end function 

Response.ContentType = "text/xml"

' getPage(Request("URL"))

' Response.Write Request("URL")
' Response.End

 Response.Write getPage(Request("URL"))
%>
