var button = document.getElementById("result");
var release = true;
var buttonSubmit = document.getElementById("submitButton");
var fps = 12;

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

// Check if the fps has been changed.
var fps_e = document.getElementById("fps_l");

function onChange()
{
    var value = fps_e.value;
    var number = fps_e.options[fps_e.selectedIndex].value;
    fps = fps_e.options[fps_e.selectedIndex].value;
    console.log(value, number);
}

fps_e.onchange = onChange;

// Calculate the Animation Frames

function calculateFrames()
{

    // Obtain all the values from the html.

    let minuets = document.getElementById("Minuet_l").value;
    let seconds = document.getElementById("Second_l").value;
    let milliseconds = document.getElementById("Milli_l").value;

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



$("#submitButton").on('click', calculateFrames);

//buttonSubmit.addEventListener('click', calculateFrames, false);

var elements = $('.input-group span').css({'background-color': ''})

