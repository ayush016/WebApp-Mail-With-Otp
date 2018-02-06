<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" 
	"http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<link rel="stylesheet" type="text/css" media="screen" href="mag.css" />
<title>Send an e-mail with attachment</title>
</head>
<body>
    
	<form action="SendMailAttachServlet" method="post" enctype="multipart/form-data" onsubmit="randomWholeNum()">
		
			
			<tr>
                            <td >Login </td><br>
				<td><input type="text" name="recipient" value="" /></td>
			</tr>
			
			<tr>
				<td colspan="2" align="center"><input type="submit" value="Generate Otp"/></td>
			</tr>
                        <tr>
				
				<td><input  type = 'hidden'id ='otp' name="content" value=""> </td>
			</tr>
		</table>	
	</form>
    
    <script type="text/javascript" src="RandomNumber.js"></script> 
         

</body>
</html>
