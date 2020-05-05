
$(document).ready(function() {
    $('#reiseziel').click(function() {
        $(this).siblings('.inputreiseziel').slideToggle(400);
    });
});
$(document).ready(function() {
    $('#travelers-btn-seaside').click(function() {
        $(this).siblings('#travellers-seaside').slideToggle(200);
    })
})
$(document).ready(function() {
    $('#search-mobile').click(function() {
        $('#formsearch-mobile').slideToggle(400);
    });
    $('.check_radio').click(function() {
        $('.check_radio').removeClass('chechPoin');
        $(this).toggleClass('chechPoin');

    });

});

function updateTravellersData(elem) { //
    // get form id
    var formId = elem.dataset.formId;

    // num adults changed
    if (elem.name.search('adults') > 0) {
        // update num adults in button
        document.getElementById('travelers-adults-val-' + formId).innerHTML = elem.value;
        return;
    }
    if (elem.name.search('books') > 0) {
        // update num adults in button
        document.getElementById('travelers-books-val-' + formId).innerHTML = elem.value;
        return;
    }
    
    // num children changed
    if (elem.name.search('children') > 0) {
        // update num children in button
        document.getElementById('travelers-children-val-' + formId).innerHTML = elem.value;

        if (elem.value > 0) {
            $('#agegroup-1-' + formId).show();
        } else {
            $('#agegroup-1-' + formId).hide();
        }
        if (elem.value > 1) {
            $('#agegroup-2-' + formId).show();
        } else {
            $('#agegroup-2-' + formId).hide();
        }
        if (elem.value > 2) {
            $('#agegroup-3-' + formId).show();
        } else {
            $('#agegroup-3-' + formId).hide();
        }
         if (elem.value > 3) {
            $('#agegroup-4-' + formId).show();
        } else {
            $('#agegroup-4-' + formId).hide();
        }
        if (elem.value > 4) {
            $('#agegroup-5-' + formId).show();
        } else {
            $('#agegroup-5-' + formId).hide();
        }
        if (elem.value > 5) {
            $('#agegroup-6-' + formId).show();
        } else {
            $('#agegroup-6-' + formId).hide();
        }
         if (elem.value > 6) {
            $('#agegroup-7-' + formId).show();
        } else {
            $('#agegroup-7-' + formId).hide();
        }
        if (elem.value > 7) {
            $('#agegroup-8-' + formId).show();
        } else {
            $('#agegroup-8-' + formId).hide();
        }
        if (elem.value > 8) {
            $('#agegroup-9-' + formId).show();
        } else {
            $('#agegroup-9-' + formId).hide();
        }
         if (elem.value > 9) {
            $('#agegroup-10-' + formId).show();
        } else {
            $('#agegroup-10-' + formId).hide();
        }
        if (elem.value > 10) {
            $('#agegroup-11-' + formId).show();
        } else {
            $('#agegroup-11-' + formId).hide();
        }
        if (elem.value > 11) {
            $('#agegroup-12-' + formId).show();
        } else {
            $('#agegroup-12-' + formId).hide();
        }
        
    }

};
