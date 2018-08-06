<%

' Set up Constants
Const ForWriting = 2 ' Input OutPut mode
Const Create = True 

csMode = Request("MODE")
csName = Request("NAME")
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



if csMode = "WRITE" then
	Dim MyName
	Dim MyFile 
	Dim FSO ' FileSystemObject
	Dim TSO ' TextStreamObject

	' Use MapPath function to get the Physical Path of file
	MyName = csRoot & "/" & csName & ".xml"
	MyFile = Server.MapPath(MyName)
        ' Response.Write MyFile
        ' Response.End
	

	Set FSO = Server.CreateObject("Scripting.FileSystemObject")
	' Response.Write MyFile & "<br>"
	' Response.End
	
	Set TSO = FSO.OpenTextFile(MyFile, ForWriting, Create)

	TSO.write Request("code")

	TSO.close
	Set TSO = Nothing
	Set FSO = Nothing
	
	Response.Write "'" & MyName & "' written successfully."

end if



%>