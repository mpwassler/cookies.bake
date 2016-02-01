;(function(window){
    window.cookies = {}
    cookies.bake = function(ingredients){

        var batch = ingredients || {},
            keys = [],
            values = [],
            size = 0,
            setString = ''
      
   
        for(var key in batch ){
            if (batch.hasOwnProperty(key)) {
                   var keyVals = key
                   keys.push(keyVals)
                   size++
            }
        }
        for(var prop in batch ){
            if (batch.hasOwnProperty(prop)) {
                   var propVals = batch[prop]
                   values.push(propVals)
            }
        }
        for (var i = 0; i <= size -1; i++) {

          document.cookie = keys[i] + '=' + values[i] + '; path=/'
        }     
    }

    cookies.pull = function(){
      var readyCooks = {}
      var cooks = document.cookie.split(';')
      cooks.forEach(function(entry){
          if(entry != ''){
      	    
      	    	var pairValues = entry.split('=')   
      	    	readyCooks[pairValues[0].trim()] = pairValues[1].trim() 

      	  }
      })
      return readyCooks
    }

    cookies.eat = function(cookieName){
         document.cookie = cookieName + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/'
    }
})(window)
