// Check that service workers are registered 
if ("serviceWorker" in navigator) {
    // Use the window load event to keep thepage load performant 
    window.addEventListener("load", () => {
        //console.log("jkgjhfgdgfkgk");
        navigator.serviceWorker.register("sw.js");
    });
}

document.getElementById("app").innerHTML = `
<div class="container">
<div class="row">
<div class="col-md-12">
<h1 class="text-center heading">Hello Workbox-PWA!</h1>
<div>

  <img  class="img-banner" src="src/images/workbox-pwa.png"/>
</div>
</div>
</div>
</div>
`;
