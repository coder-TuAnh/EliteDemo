
$(document).ready(function () {
     $.ajax({
        method: "GET",
        url: '/viewfilter',
        data: JSON.stringify({
            'input': '',
        }),
        dataType: 'JSON',
        contentType: "application/json",
        success: function (data) {
            if (data.status) {
                alert("true", data);
            }

        },
        error: function (data) {
            alert("false", data);
        }
    });
});
