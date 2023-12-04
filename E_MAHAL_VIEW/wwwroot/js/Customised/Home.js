

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
    debugger
    updateDataTable(1);
});

function updateDataTable(pageNumber) {
    debugger
    // If pageNumber is not provided, default it to 1
    if (pageNumber == 0) {
        pageNumber == 1
    }
    else {
        pageNumber = pageNumber
    }

    // Make Ajax call to get updated data
    $.ajax({
        url: aUrl + '/api/Home/GetTableValues',
        type: 'POST',
        data: { PageNumber: pageNumber },
        dataType: 'json',
        success: function (data) {
            // Destroy existing DataTable
            if ($.fn.DataTable.isDataTable('#EmahalTableSection')) {
                localDataTable.clear().destroy();
            }

            // Reinitialize DataTable with updated data
            localDataTable = $('#EmahalTableSection').DataTable({
                // Your DataTable initialization options...
                ajax: {
                    url: aUrl + '/api/Home/GetTableValues',
                    type: 'POST',
                    data: { PageNumber: pageNumber },
                    dataSrc: 'members',
                    contentType: 'application/json',
                    dataType: 'json',
                },
                columns: [
                    { data: null, render: function (data, type, row, meta) { return meta.row + meta.settings._iDisplayStart + 1; } }, // SL.NO
                    { data: 'Name' },
                    { data: 'Address' },
                    { data: 'HomeNumber' },
                    { data: 'Contact' }
                ],
                paging: true,
                searching: false,
                info: false
            });

            // Clear and redraw the DataTable
            localDataTable.clear().rows.add(data.members).draw();
        },
        error: function () {
            // Handle error
        }
    });
}

// Update button click event
$('#updateButton').on('click', function () {
    var pageNumber = localDataTable ? localDataTable.page.info().page + 1 : 1;
    updateDataTable(pageNumber);
});

