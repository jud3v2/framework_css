$("#myModal").modal({
    show: false
});

// Show popin
$("#myModal").modal("show");

// Hide popin
$("#myModal").modal("hide");

// Close popin on escape key press
$(document).on('keydown', function (e) {
    if (e.key === 'Escape') {
        $("#myModal").modal("hide");
    }
});

// Close popin on outside click
$("#myModal").on('click', function (e) {
    if ($(e.target).hasClass('modal')) {
        $("#myModal").modal("hide");
    }
});

// Close popin on button with .popin-dismiss class click
$(".popin-dismiss").on('click', function () {
    $("#myModal").modal("hide");
});