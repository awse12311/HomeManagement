var xmlhttp;

function $_xmlHttpRequest()
{   
    if(window.ActiveXObject)
    {
        xmlHTTP=new ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest)
    {
        xmlHTTP=new XMLHttpRequest();
    }
}
function home_check(sql){
    
    $_xmlHttpRequest();
    xmlHTTP.open("GET","Member_json.php?sql="+sql,true);
    
        xmlHTTP.onreadystatechange=function check_user()
        {
            if(xmlHTTP.readyState == 4)
            {
                if(xmlHTTP.status == 200)
                {
                    var str=xmlHTTP.responseText;
                    return str;
                }
            }
        }
        xmlHTTP.send(null);
}
//////////////////////////////////////////////////////
//Home
function getHomeData(sql)
{
  var xmlhttp;
  if (sql.length==0)
    { 
    var a = "no data";
    return a;
    }
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {         
          return xmlhttp.responseText;
      }
    }
  xmlhttp.open("GET","Home_json.php?sql="+sql,true);
  xmlhttp.send();
}
//Member
function getMemberData(sql)
{
  var xmlhttp;
  if (sql.length==0)
    { 
    var a = "no data";
    return a;
    }
  if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
    }
  else
    {// code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  xmlhttp.onreadystatechange=function()
    {
    if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
          return xmlhttp.responseText;
      }
    }
  xmlhttp.open("GET","Member_json.php?sql="+sql,true);
  xmlhttp.send();
}