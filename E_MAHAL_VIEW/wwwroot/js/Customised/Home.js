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
$(document).ready(function () {
    EMahalTable_Section(); 
});

function EMahalTable_Section() {
    var table = $('#EmahalTableSection').DataTable({
        ajax: {
            url: aUrl + '/api/Home/GetTableValues',
            type: 'POST',
            contentType: 'application/json;charset=utf-8',
            data: function (d) {
                d.PageNumber = table.page.info().page + 1;
                return JSON.stringify(d);
            },
            dataSrc: 'data',
            contentType: 'application/json;charset=utf-8',
            dataType: 'json',
        },
        columns: [
            { data: null, render: function (data, type, row, meta) { return meta.row + meta.settings._iDisplayStart + 1; } }, 
            { data: 'Name' },
            { data: 'Address' },
            { data: 'HomeNumber' }, 
            { data: 'Contact' }
        ],
        paging: false, 
        searching: false, 
        info: true 
    });
}


