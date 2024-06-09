function computeGWA() {
    var rows = document.querySelectorAll('#class-list-table-1 tbody tr, #faculty-grades-table-1 tbody tr');
    rows.forEach(function(row) {
        var prelimGrade = parseFloat(row.querySelector('input[name="prelim_grade"]').value);
        var midtermGrade = parseFloat(row.querySelector('input[name="midterm_grade"]').value);
        var finalGrade = parseFloat(row.querySelector('input[name="final_grade"]').value);
        var gwa = (prelimGrade + midtermGrade + finalGrade) / 3;
        row.querySelector('#gwa').innerText = gwa.toFixed(2);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    computeGWA(); // Initial computation

    // Re-compute GWA when input changes
    document.querySelectorAll('input[name="prelim_grade"], input[name="midterm_grade"], input[name="final_grade"]').forEach(function(input) {
        input.addEventListener('input', computeGWA);
    });
});

// save input value
function saveInputValue() {
    var inputs = document.querySelectorAll('input[name="prelim_grade"], input[name="midterm_grade"]');
    var values = [];
    inputs.forEach(function(input) {
        values.push(input.value);
        });
    localStorage.setItem('inputValues', JSON.stringify(values));
};