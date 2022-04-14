let speechTalk = prompt("Would you like to say something?: ")

if (speechTalk == speechTalk.toUpperCase()) 
{
    alert("Stop Shouting")
}

else if ( speechTalk == speechTalk.toLowerCase())
{
    alert("Stop Whispering")
}

else{
    alert("That's how you talk normally")
}