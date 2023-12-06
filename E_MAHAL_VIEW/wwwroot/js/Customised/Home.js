

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
    BindDasboardTable(1);
});
let datTable;
function BindDasboardTable(pnmbr) {
    if ($.fn.DataTable.isDataTable('#EmahalTableSection')) {
        datTable.clear().destroy();
    }

    debugger
     datTable = $("#EmahalTableSection").DataTable({
        "order": [[6, "desc"]],
        "dom": "lifrtp",
        "destroy": true,
        "processing": true,
        "serverSide": true,
        "filter": true,
        "searching": true,
        "responsive": true,
        "info": true,
        "language": {
            "searchPlaceholder": 'Search...',
            "sSearch": '',
            "lengthMenu": '_MENU_ '
        },

       "ajax": {
            url: aUrl + '/api/Home/GetTableValues',
            type: 'POST',
            data: function (d) {
                d.PageNumber = d.start / d.length + 1;
            },
            dataSrc: 'members', // Use the filtered members
            contentType: 'application/json',
            dataType: 'json',
        },
        columns: [
            { "data": null, "render": function (data, type, row, meta) { return meta.row + meta.settings._iDisplayStart + 1; } },
            { "data": "name" },
            { "data": "address" },
            { "data": "homeNumber" },
            { "data": "contact" },
            {
                // Define the Action column
                data: null,
                defaultContent: '<button class="btn btn-sm btn-master view-more-btn">View More</button>',
                orderable: false,
                searchable: false
            }
        ],
        "columnDefs": [
            { "searchable": true }
        ]
    });


    return datTable;
};