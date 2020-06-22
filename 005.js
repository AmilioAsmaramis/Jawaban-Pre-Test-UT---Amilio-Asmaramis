
function leap_year_range(st_year, end_year) {
    let year_range = [];
    for (let i = st_year; i <= end_year; i++){
        year_range.push(i); 
    };

    year_range.forEach((year) => {
        test_LeapYear(year)
    });
}

function test_LeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        console.log(` ${year} adalah tahun kabisat`);
    } else {
        console.log(` ${year} adalah bukan tahun kabisat`);
    }
}

leap_year_range(2000,2020);