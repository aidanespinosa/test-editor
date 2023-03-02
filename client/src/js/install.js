const buttonInstall = document.getElementById("buttonInstall");
console.log(buttonInstall);
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredPrompt = event;
});

// TODO: Implement a click event handler on the `buttonInstall` element
buttonInstall.addEventListener("click", async () => {
  console.log("this is happening");
  if (deferredPrompt) {
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === "accepted") {
      console.log("App installed");
    }
    deferredPrompt = null;
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("App installed");
});
