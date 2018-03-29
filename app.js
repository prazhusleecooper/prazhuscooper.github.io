navigator.serviceWorker.register('./SW.js').then(function(registration) {
    console.log("Excellent, registered with scope: ", registration.scope);
  });