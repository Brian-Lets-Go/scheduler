
// display current date
var today = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(today);

//listen for click of save button
$('.saveBtn').on("click", function () {
    
    var textContent = $(this).siblings(".description").val();
    var timeId = $(this).parent().attr("id");
     
    localStorage.setItem(timeId, textContent);
})

//compare hour blocks to current time and set style
function timeTracker() {
    var timeNow = moment().hour();

    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("block")[1]);
        
        if (blockTime < timeNow) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }
    })
}

//retrieve from local storage
$("#block8 .description").val(localStorage.getItem("block8"));
$("#block9 .description").val(localStorage.getItem("block9"));
$("#block10 .description").val(localStorage.getItem("block10"));
$("#block11 .description").val(localStorage.getItem("block11"));
$("#block12 .description").val(localStorage.getItem("block12"));
$("#block13 .description").val(localStorage.getItem("block13"));
$("#block14 .description").val(localStorage.getItem("block14"));
$("#block15 .description").val(localStorage.getItem("block15"));
$("#block16 .description").val(localStorage.getItem("block16"));
$("#block17 .description").val(localStorage.getItem("block17"));
$("#block18 .description").val(localStorage.getItem("block18"));

timeTracker()

