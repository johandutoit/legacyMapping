<% 
Response.ContentType = "text/xml" 
Response.Write "<?xml version=""1.0"" encoding=""UTF-8""?>"
Response.Write "<Items>"


csToken = Request("TOKEN")
csRoot  = "WMC"
if csToken <> "" then
    csRoot = csRoot + "/" + csToken
    Set fs=Server.CreateObject("Scripting.FileSystemObject")
    uploadsDirVar = Server.MapPath(csRoot) 
    if fs.FolderExists(uploadsDirVar) = false then
        fs.CreateFolder uploadsDirVar
    end if
    Set fs = nothing        
end if

if Request("addnone") = "1" then
    Response.Write "<Item>"
    Response.Write "<Title>None</Title>"
    Response.Write "</Item>"
end if
    
Dim fso, Root, Files, Folders, File, i, FoldersArray(1000)
Set fso = Server.CreateObject("Scripting.FileSystemObject")
Set Root = fso.getfolder(Server.MapPath(csRoot))
Set Files = Root.Files
For Each File In Files
    if InStr(File.Name, "wcd_") = 0 then
	    Response.Write "<Item>"
	    Response.Write "<Title>" & File.Name & "</Title>"
	    Response.Write "</Item>"
    end if	    
Next

Response.Write "</Items>"
%>

