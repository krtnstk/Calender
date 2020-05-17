/*
con.connect(function(err) {
	if (err) throw err;
    console.log('Connected');
    con.query('CREATE DATABASE calender', function (err, result) {
        if (err) throw err; 
          console.log('database created');
    });
    const sql = 'CREATE TABLE schedule ( id int(20) NOT NULL,date date NOT NULL,plan text COLLATE utf8mb4_unicode_ci NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;';
	con.query(sql, function (err, result) {
	if (err) throw err;  
	console.log('table created');  
	});
});
*/
