$(document).ready(function() {
    $('input.small-number').on('keyup change', function() {
        var tip = $('#cost').val()*$('#tip_percentage').val()/100;
        var credit = Math.max(+$('#cost').val() + tip - +$('#cash').val(), 0);
        $('#result').text(credit);
        $('#tip').text("the tip is: " + tip);
    });
    $('select.selectpicker').on('select', function() {
        var tip = $('#cost').val()*$('#tip_percentage').val()/100;
        var credit = Math.max(+$('#cost').val() + tip - +$('#cash').val(), 0);
        $('#result').text(credit);
        $('#tip').text(tip);
    });
});

