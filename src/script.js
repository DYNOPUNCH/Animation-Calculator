var button = document.getElementById("result");
var release = true;

// Checks if a variable is null or empty.
function validate(a)
{
    if(a == null || a == "")
    {
        return true;
    }

    return false;
}


// Checks if input is a number.
function isNumber(value) 
{
    return typeof value === 'number';
}

// Calculate the Animation Frames

function calculateFrames()
{

    // Obtain all of the values from the html.

    let fps = document.getElementById("fps_l").value;
    let minuets = document.getElementById("Minuet_l").value;
    let seconds = document.getElementById("Second_l").value;
    let milliseconds = document.getElementById("Milli_l").value;

    // Check fps box

    if(validate(fps))
    {
        alert("Please fill in the FPS field");
        return;
    }

    if(isNaN(fps))
    {
        alert("Entry must be a number.");
        return;
    }

    // Check time box

    if(validate(minuets) && validate(seconds) && validate(milliseconds))
    {
        alert("Please fill in atleast one of the time fields");
        return;
    }

    if(isNaN(minuets) || isNaN(seconds) || isNaN(milliseconds))
    {
        alert("Entry must be a number.");
        return;
    }

    // Calculate the frames per seconds.
    
    button.innerHTML = fps * seconds + fps * (milliseconds / 1000) + fps * (minuets * 60);
}

