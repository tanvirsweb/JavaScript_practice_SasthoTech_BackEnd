// open Notebook at googlecolab > right click > inspect > console > paste the code & Enter
function ClickConnect() {
    console.log("Working"); 
    document
      .querySelector('#top-toolbar > colab-connect-button')
      .shadowRoot.querySelector('#connect')
      .click() 
}
setInterval(ClickConnect, 60000)
// in every 60K ms = 60 minutes ClickConnect function will be called.