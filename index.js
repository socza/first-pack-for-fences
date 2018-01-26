var EventEmitter = require('events').EventEmitter;
var OSinfo = require('./modules/OSinfo');
var emitter = new EventEmitter();

emitter.on("beforeCommand", function (instruction) {

    console.log('You wrote: ' + instruction + ', trying to run command');

});

emitter.on("afterCommand", function () {

    console.log('Finished command');

});

process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {

	var input = process.stdin.read();
	
	if (input !== null) {

	 	var instruction = input.toString().trim();

	 	// odpalanie zdarzenia beforeCommand (z parametrem)
	 	emitter.emit('beforeCommand', instruction);
	
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

		// emitowanie zdarzenia afterCommand (bez parametru)
        emitter.emit('afterCommand');

	}

});