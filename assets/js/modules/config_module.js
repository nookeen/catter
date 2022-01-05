var CONFIG_MODULE = (function() {
  "use strict";
  
    // Put jQuery stuff into variables
    var config = {
      // cache jQuery
      $window: $(window),
      $body: $('body')
    };
    
    return {
      config: config
    };
  })(this);