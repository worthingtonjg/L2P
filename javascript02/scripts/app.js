var load = function(id, fileName)
{
    fetch(fileName)
        .then(response => response.text())
        .then(data => 
        {
            var element = document.getElementById(id);
            if(!data)
            {
                element.innerHTML = "page not found";
            }
            else
            {
                element.innerHTML = data;
            }
        });
}

var getPage = function()
{
    // get the url
    var url = window.location.href;

    // split the url from the query params
    var parts = url.split("?");
    console.log(parts.length);
    if(parts.length < 2)
    {
        return 1;
    }

    // split the params
    var params = parts[1].split("&");

    // look at the first param and split on the = symbol
    var pair = params[0].split("=");
    if(pair.length < 2)
    {
        return 1;
    }
        
    if(pair[0]=="page")
    {
        return pair[1];
    }

    return 1;
}

load('content','pages/page'+getPage()+'.html');