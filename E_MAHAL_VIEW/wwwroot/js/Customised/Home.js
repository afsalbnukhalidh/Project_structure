var aUrl = "https://localhost:7283";
$('#createStudentForm').submit(function (e) {
    debugger
    e.preventDefault();
    $.ajax({
        url: aUrl + '/api/Home/AddMembers',
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json;charset=utf-8',
        data: JSON.stringify({
            Name: $('#name').val(),
            Address: $('#address').val(),
            HomeNumber: $('#homeNumber').val(),
            Contact: $('#contact').val()
        }),
        success: function () {
        },
        error: function (xhr, textStatus, errorThrown) {
            alert('Error in creating student');
        }
    });
});
function EMahalTable_Section() {
    var table = $('#EmahalTableSection').DataTable({
        serverSide: true, // Enable server-side processing
        processing: true, // Show loading indicator
        ajax: {
            url: aUrl + '/api/Home/GetTableValues',
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            data: function (d) {
                d.PageNumber = table.page.info().page + 1; 
                return JSON.stringify(d);
            },
            dataSrc: 'data' 
        },
        columns: [
            { data: 'SL.NO' },
            { data: 'Name' },
            { data: 'Address' },
            { data: 'Home Number' },
            { data: 'Contact' }
        ]
    });
}
