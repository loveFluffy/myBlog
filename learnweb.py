#!"usr/bin/python"
import cgitb
cgitb.enable();

import datetime
import cgi

print 'Content-Type: text/html'
print 

#print the html body
print '''<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="./stylesheets/xstyles.css" />
    <link rel="icon" href="./images/x.ico" />
    <title>learnweb.py</title>
    <base target="_blank">
</head>
<body>
	<h1>this is head 1.</h1>
</body>
</html>'''