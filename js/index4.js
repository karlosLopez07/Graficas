var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['Primaria', 14344885],
            ['Secundaria', 6821621],
			['Bachillerato', 4727311]
        ],
		
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});