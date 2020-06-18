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
    var url = window.location.href;
    var parts = url.split("?");
    if(parts.length > 0)
    {
        var params = parts[1].split("&");
        if(params.length > 0) 
        {
            var pair = params[0].split("=");
            if(pair.length == 2)
            {
                if(pair[0]=="page")
                {
                    return pair[1];
                }
            }
        }
    }
}

load('content','pages/page'+getPage()+'.html');