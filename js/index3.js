var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['Primaria', 14580379],
            ['Secundaria', 6571858],
			['Bachillerato', 4602837]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});