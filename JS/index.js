var usernameEntered = false;
var userStartedTyping = false;

$("#input-div").click(function()
{
    if(!userStartedTyping)
    {
        $("#input-div").text("");
        setInterval(function(){
            $("#cursor-div").css("color","black");
            setTimeout(function(){
                $("#cursor-div").css("color","transparent");  
            },350);
        },700);

        userStartedTyping = true;

        $(document).keydown(function(e)
        {
            console.log(e.keyCode);
        });
    }
});