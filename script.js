$(function() {
    $(".permonth").hide(300);
    $(".mybreak1").hide(300);
    $(".mybreak2").hide(300);
    $('input:radio[id=paid]').click(function(){
        $(".permonth").show(300);
        $(".mybreak1").show(300);
    });
    $('input:radio[id=notpaid]').click(function(){
        $(".permonth").hide(300);
        $(".mybreak1").hide(300);
        $("#permonth").val("");
    });
    $(".support").hide(300);
    $('input:radio[id=yes]').click(function(){
        $(".support").show(300);
        $(".mybreak2").show(300);
    });
    $('input:radio[id=no]').click(function(){
        $(".support").hide(300);
        $(".mybreak2").hide(300);
        $(".support").val("");
    });
    var c=3;
    $("#addbtn").click(function() {
        if(c<10) {
        c++;
        var name = 'mainselectioncriteria'+c;
        $("<textarea name='mainselectioncriteria' class='mainselectioncriteria' placeholder='Main selection criteria'></textarea>").appendTo($(".selectioncriterias")).attr('name',name);
        }
    });
    $("#removebtn").click(function() {
        if(c>3) {
        c--;
        $(".selectioncriterias").children().last().remove();
        }
    });

    $("#tabs").tabs(); 
    $(".btnprev").click(function () {
        $( "#tabs" ).tabs( "option", "active", $("#tabs").tabs('option', 'active')-1 );
    });
    $(".btnnext").click(function () {
        $( "#tabs" ).tabs( "option", "active", $("#tabs").tabs('option', 'active')+1 );
    });
    $(".submiterror").hide();
    $('[type="submit"]').on('click', function () {
        $(this)
            .closest('form')
            .find('[required]')
            .addClass('required');
        
        if($(".myform").valid()==false) {
            $(".submiterror").show();
        }
        else {
            $(".submiterror").hide();
        }
    });

    $(".myform").validate({
        ignore: "",
    });

    $(function () {
        $("#duration").change(function() {
           var max = parseInt($(this).attr('max'));
           var min = parseInt($(this).attr('min'));
           if ($(this).val() > max)
           {
               $(this).val(max);
           }
           else if ($(this).val() < min)
           {
               $(this).val(min);
           }       
         }); 
     });
     var today = new Date();

});

var today = new Date();
var day = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
if(day<10){
    day='0'+day;
} 
if(month<10){
    month='0'+month;
}

today = year+'-'+month+'-'+day;
document.getElementById("startdate").setAttribute("min", today);



document.getElementById("startdate").addEventListener("change", function() {
    var input = document.getElementById("startdate").value;
    var startdate = new Date(input);
    minEndDate = function(inputdate, days) {
        var date = new Date(inputdate);
        date.setDate(date.getDate() + days);
        return date;
    }
    var endDay = minEndDate(startdate, 70).getDate();
    var endMonth = minEndDate(startdate, 70).getMonth()+1;
    var endYear = minEndDate(startdate, 70).getFullYear();
    if(endDay<10){
        endDay='0'+endDay;
    } 
    if(endMonth<10){
        endMonth='0'+endMonth;
    }
    minEndDate = endYear+'-'+endMonth+'-'+endDay;
    document.getElementById("enddate").setAttribute("min", minEndDate);
});