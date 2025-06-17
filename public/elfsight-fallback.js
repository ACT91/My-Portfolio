// Fallback script for Elfsight widget
(function() {
  // Check if Elfsight script is already loaded
  if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
    // Create and append the script
    var script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }
  
  // Initialize the widget if needed
  script.onload = function() {
    if (window.elfsight && window.elfsight.reinit) {
      window.elfsight.reinit();
    }
  };
})();