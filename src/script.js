var button = document.getElementById("result");
var release = true;

function calculateFrames()
{

    // Obtain all of the values from the html.

    let fps = document.getElementById("fps_l").value;
    let minuets = document.getElementById("Minuet_l").value;
    let seconds = document.getElementById("Second_l").value;
    let milliseconds = document.getElementById("Milli_l").value;

    // TODO Add check that sees if all 3 boxes are empty, and if so add a warning message that says to do so.

    // Check if Debug or release.

    if(release == false)
    {
        console.log("fps", fps);
        console.log("minuets:", minuets, "seconds:", seconds, "milliseconds:", milliseconds);
    }

    // Calculate the frames per seconds.
    
    button.innerHTML = fps * seconds + fps * (milliseconds / 1000) + fps * (minuets * 60);
}

