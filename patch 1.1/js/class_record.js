function computeGWA(){
    var rows = document.querySelectorAll('#class-list-table-1 tbody tr, #class-list-table-2, #class-list-table-3');
    rows.forEach(function (row) {;
        var quiz1 = parseFloat(row.querySelector('input[name="quiz_1"]').value);
        var quiz2 = parseFloat(row.querySelector('input[name="quiz_2"]').value);
        var quiz3 = parseFloat(row.querySelector('input[name="quiz_3"]').value);
        var recitation = parseFloat(row.querySelector('input[name="recit"]').value);
        var project = parseFloat(row.querySelector('input[name="proj"]').value);
        var exam = parseFloat(row.querySelector('input[name="exam"]').value);

        // compute weight of each component

        //quiz = 20%
        var quizWeight = (((quiz1 + quiz2 + quiz3) / 3) * 0.2) * 10;
        //recitation = 20%
        var recitWeight = (recitation * 0.2);
        //project = 30%
        var projWeight = (project * 0.3) * 10;
        //exam = 30%
        var examWeight = (exam * 0.3);

        //compute overall gwa
        var gwa = quizWeight + recitWeight + projWeight + examWeight;
        row.querySelector('#gwa').innerText = gwa.toFixed(2);
    });
}

// recompute gwa when input changes
document.addEventListener('DOMContentLoaded', function() {
    computeGWA(); // Initial computation

    // Re-compute GWA when input changes
    document.querySelectorAll('input[name="quiz_1"], input[name="quiz_2"], input[name="quiz_3"], input[name="recit"], input[name="proj"], input[name="exam"]').forEach(function(input) {
        input.addEventListener('input', computeGWA);
    });
});