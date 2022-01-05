/* ========================================================
* A. Pasternak's Catter Beta (Meeeoooooww)
*
* This script gets a cat and removes a cat
*
* Me-ow me-ow off to get a cat we ow-ow-ow
======================================================== */

(function() {

  //============================================================================
  // Let's create a decent include fn to work with load.js
  //============================================================================
  
  var path = 'assets/js/';
  var min = false;
  
  var include = {
    'main' : function(name, min){
      return process('', name, min);
    },
    'module' : function(name, min){
      return process('modules', name, min);
    },
    'lib' : function(name, min){
      return process('lib', name, min);
    }
  };
  
  function process (directory, name, min) {
    min = (min) ? '.min' : '';
    directory = (directory) ? directory + '/' : directory;
    
    //console.log(path + directory + name + min + '.js');
    
    return path + directory + name + min + '.js';
  }
  
  min = true;
  
  //============================================================================
  // Load Libraries and scripts
  //============================================================================
  
  load(include.lib('jquery-3.1.1', min))
    .then(include.lib('bootstrap', min),
          include.lib('imagesloaded.pkgd', min)
    )
    // Load modules
    .then(include.module('config_module'))
    .then(include.module('api_module'))
    .thenRun(function () {
      //console.log('load.js: All loaded');
    });
})(this);
