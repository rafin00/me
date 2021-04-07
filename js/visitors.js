
document.addEventListener("DOMContentLoaded", function() {
    console.log('yo')
    getText();
  });
function getText(){
    // read text from URL location
    fetch('visitorCount.txt',{
        headers : { 
            'Content-Type': 'application/text',
            'Accept': 'application/text'
           }
    }).then((response)=>{
        console.log(response.text())
    })
}