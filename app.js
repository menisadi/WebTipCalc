$(document).ready(function() {
    $('input.small-number').on('keyup change', function() {
        alert('dd');
        var tip = parseInt($('input.cash').val(),10)* parseInt($('select.tip_percentage').val(),10) / 100;
		alert(tip);
        var credit = parseInt($('input.cost').val(),10) + tip - parseInt($('input.cash').val(),10);
        $('h2.display').text(credit);
    });
    $('select.selectpicker').on('select', function() {
        var tip = parseInt($('input.cash').val(),10)* parseInt($('select.tip_percentage').val(),10) / 100;
		alert(tip;
        var credit = parseInt($('input.cost').val(),10) + tip - parseInt($('input.cash').val(),10);
        $('h2.display').text(credit);
    });

});