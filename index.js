var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

	var input = process.stdin.read();
	
	if (input !== null) {

	 	var instruction = input.toString().trim();
	
		switch (instruction) {
			
			case 'info':
				OSinfo.print();
				break;

			case 'exit':
				process.stdout.write('Quitting app!\n'.exit);
				process.exit();
				break;
			
			default:
				process.stderr.write('Wrong instruction!\n'.warn);
				break;

		}

	}

});
