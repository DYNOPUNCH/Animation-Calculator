var button = document.getElementById("result");
var release = true;

function calculateFrames()
{
    let fps = document.getElementById("fps_l").value;
    let minuets = document.getElementById("Minuet_l").value;
    let seconds = document.getElementById("Second_l").value;
    let milliseconds = document.getElementById("Milli_l").value;

    if(release == false)
    {
        console.log("fps", fps);
        console.log("minuets:", minuets, "seconds:", seconds, "milliseconds:", milliseconds);
    }
    
    button.innerHTML = fps * seconds + fps * (milliseconds / 1000) + fps * (minuets * 60);
}

