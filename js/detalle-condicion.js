$(document).ready(function () {
    $("#tblDetalleCondicion").DataTable({
        language: {
            "decimal": "",
            "emptyTable": "No hay datos disponibles",
            "info": "Mostrando _START_ - _END_ de _TOTAL_ entries",
            "infoEmpty": "Showing 0 to 0 of 0 entries",
            "infoFiltered": "(filtered from _MAX_ total entries)",
            "infoPostFix": "",
            "thousands": ",",
            "lengthMenu": "Mostrar _MENU_ registros",
            "loadingRecords": "Loading...",
            "processing": "Processing...",
            "search": "Buscar:",
            "zeroRecords": "No matching records found",
            "paginate": {
                "first": "Primera",
                "last": "Última",
                "next": "Siguiente",
                "previous": "Anterior"
            },
            "aria": {
                "sortAscending": ": activate to sort column ascending",
                "sortDescending": ": activate to sort column descending"
            }
        }
    });
});