var API_MODULE = (function() {
  "use strict";
  
  // Include Config Module
  var inc = {};
  inc.CONFIG = CONFIG_MODULE;
  
  var config = inc.CONFIG.config;
  
  // console.log(config)
  
  var $body = config.$body;
  var $app = $body.find('#app');
  
  var counter = 0;
  
  var cat = {};
  cat.addButton = $body.find('.add-cat-button');
  
  // Add event listeners
  cat.addButton.on('click', _printCat);
  $app.on('click', '.cat-pic', _removeCat);
  
  
  function _catApi() {
    return 'https://cataas.com/cat?api_key=MzMyODEz&type=sq&size=med&img=' + counter++;
  }
  
  function _catTemplate() {
    return `
      <div class="col-sm-2">
        <div class="cat-pic loading">
          <img id="uid_${counter}" src="${_catApi()}" alt="Cat pic" />
          </div>
      </div>
    `;
  }
  
  function _printCat() {
    
    //console.log('PRINT');
    
    $app.append(_catTemplate());
    
    // Print result
    $app.imagesLoaded()
      .progress( function( instance, image ) {
        
        $app.find('#' + image.img.id).parents('.loading').removeClass('loading')
        
        var result = image.isLoaded ? 'loaded' : 'broken';
        
        console.log( 'image is ' + result + ' for ' + image.img.src );
      });
    
  }
  
  function _removeCat() {
    
    //console.log('REMOVE');
    
    $(this).parent().remove();
  }
})(this);