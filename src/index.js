// Check that service workers are registered 
if ("serviceWorker" in navigator) {
    // Use the window load event to keep thepage load performant 
    window.addEventListener("load", () => {
        //console.log("jkgjhfgdgfkgk");
        navigator.serviceWorker.register("sw.js");
    });
}

document.getElementById("app").innerHTML = `
<h1>Hello Workbox-PWA!</h1>
<div>
  Look
  <img src="https://www.w3schools.com/w3css/img_lights.jpg"/>
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>
  for more info about Parcel.
</div>
`;
