var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['Primaria', 14789406],
            ['Secundaria', 6340232],
			['Bachillerato', 4057265]
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});