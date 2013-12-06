function updateContentDivHeight()
{
    $('#content-div').height(
        $(window).height() -
        $('#header-div').height() -
	parseInt($('#content-div').css('padding-top')));
}

$(document).ready(function()
{
    updateContentDivHeight();
    $(window).resize(updateContentDivHeight);
});

function submitClicked()
{
    alert("You clicked Submit!");
}
