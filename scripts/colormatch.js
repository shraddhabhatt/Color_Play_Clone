var trackTask;
    window.onload = function() {

      var video = document.getElementById('video');
      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      tracking.ColorTracker.registerColor('green', function(r, g, b) {
        if (r < 80 && g > 90 && b < 100) {
          return true;
        }
        return false;
      });
      tracking.ColorTracker.registerColor('red', function(r, g, b) {
        if (r > 200 && g < 100 && b < 60) {
          return true;
        }
        return false;
      });
      tracking.ColorTracker.registerColor('blue', function(r, g, b) {
        if (r < 50 && g < 140 && b > 100) {
          return true;
        }
        return false;
      });
      tracking.ColorTracker.registerColor('black', function(r, g, b) {
        if (r === g && g === b && b === r) {
          return true;
        }
        return false;
      });
      tracking.ColorTracker.registerColor('white', function(r, g, b) {
        if (r > 244 && g > 240 && b > 220) {
          return true;
        }
        return false;
      });
      var tracker = new tracking.ColorTracker(["green"]);

      trackTask = tracking.track('#video', tracker, { camera: true });

      tracker.on('track', function(event) {
        
        context.clearRect(0, 0, canvas.width, canvas.height);

        event.data.forEach(function(rect) {

           // context.strokeStyle = rect.color;
           // context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = rect.color;
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);


            
         });
      });
      
      initGUIControllers(tracker);
    };

    function checkColor(color)
    {
        switch (color) {
            case 'red':
                console.log("Color Red");
                trackTask.stop();
                checktrack('red');
                break;
            case 'yellow':
                console.log("Color yellow");
                checktrack('yellow');
                break;
            case 'blue':
                console.log("Color blue");
               // checktrack('blue');
                break;
            case 'green':
                console.log("Color green");
              //  checktrack('green');
                break;
            case 'black':
                console.log("Color black");
                checktrack('black');
                break;
            case 'white':
                console.log("Color white");
                checktrack('white');
                break;
            case 'cyan':
                console.log("Color cyan");
                checktrack('cyan');
                break;
            case 'magenta':
                console.log("Color magenta");
                checktrack('magenta');
                break;
            default:
                console.log("Something went horribly wrong...");
                break;

            }
    }

    function starttrack(){
      trackTask.run();
    }

    function stoptrack(){
      trackTask.stop();
    }

    function checktrack(color){

       // trackTask.stop();
       //  if(confirm("You found "+color+".... Want to play more ??"))
       //  {            
       //      trackTask.run();
       //  }
       //  else
       //  {
       //      camera:false;
       //  }
    }