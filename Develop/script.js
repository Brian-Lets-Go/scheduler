
// display current date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(today);

//listen for click of save button
$('saveBtn').on("click", function () {
    
    var textContent = $(this).siblings(".description").val();
    var timeId = $(this).parent().attr("id");

    console.log(textContent,timeId);
    localStorage.setITem(timeId, textContent);
})

