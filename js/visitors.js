
document.addEventListener("DOMContentLoaded", function() {
    getText();
    // httpGetAsync('http://api.countapi.xyz/hit/rafinutshaw');
  });
function getText(){
    // read text from URL location
    fetch('https://api.countapi.xyz/hit/rafinutshaw',{
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Origin': 'https://rafin00.github.io/me/'
          },
          method: 'GET'
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })
}

function httpGetAsync(theUrl )
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            console.log(xmlHttp.responseText)
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}
