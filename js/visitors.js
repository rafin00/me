
document.addEventListener("DOMContentLoaded", function() {
    getText();
  });
function getText(){
    // read text from URL location
    fetch('https://api.countapi.xyz/hit/rafinutshaw',{
        headers: {
            'Content-Type': 'application/json'
          },
    }).then((response)=>{
        console.log(response)
    }).catch((err)=>{
        console.log(err)
    })


}
