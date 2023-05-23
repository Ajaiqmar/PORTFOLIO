var usernameEntered = false;
var userStartedTyping = false;
var username = "";
var userInputInterval = null;


$(document).ready(function(){

});

function resetGetNameUsecase()
{
    if(!usernameEntered)
    {
        userStartedTyping = false;
        username = "";

        $("#input-div").text("[ What should I call you? ]");
        $("#cursor-div").css("color","transparent");
        $(document).off("keydown");

        if(userInputInterval != null)
        {
            clearInterval(userInputInterval);
            userInputInterval = null;
        }
    }
}

function getNameUsecaseCompleted()
{
    userStartedTyping = false;

    $("#input-div").text("[ What should I call you? ]");
    $("#cursor-div").css("color","transparent");
    $(document).off("keydown");

    if(userInputInterval != null)
    {
        clearInterval(userInputInterval);
        userInputInterval = null;
    }
}

$("#input-div").click(function(event)
{
    if(!userStartedTyping)
    {
        $("#input-div").text("");
        userInputInterval = setInterval(function(){
            $("#cursor-div").css("color","black");
            setTimeout(function(){
                $("#cursor-div").css("color","transparent");  
            },325);
        },650);

        userStartedTyping = true;

        $(document).keydown(function(e)
        {
            if(username.length > 14)
            {
                return;
            }

            var characterEntered = e.key;

            if(characterEntered.length == 1 && ((characterEntered >= 'a' && characterEntered <= 'z') || (characterEntered >= 'A' && characterEntered <= 'Z')))
            {
                username += characterEntered;
            }
            else if(characterEntered === 'Backspace' && username.length > 0)
            {
                username = username.slice(0,username.length-1);
            }
            else if(characterEntered === 'Enter' && username.length > 0)
            {
                usernameEntered = true;
                getNameUsecaseCompleted();
                $("#base-div").css("display","none");
                return;
            }
            else if(characterEntered === 'Backspace' && username.length == 0)
            {
                resetGetNameUsecase();
                return;
            }

            $("#input-div").text(username);
            console.log(characterEntered);
        });

        event.stopPropagation();
    }
});

$("#base-div").click(function()
{
    resetGetNameUsecase();
});