function formatTime(seconds) {
  
	function addZero(e) {
    
    	return (e < 10 ? '0' : '') + e;
  
  	}

  	function formatDay(d) {

  		return (d != 1 ? 's' : '');

  	}
  	
	var days = Math.floor(seconds / (3600*24));  
  	var hours = Math.floor(seconds % (3600*24) / 3600);
  	var minutes = Math.floor(seconds % (60*60) / 60);
  	var seconds = Math.floor(seconds % 60);

  	return addZero(days) + ' day' + formatDay(days) + ' ' + addZero(hours) + ' hr ' + addZero(minutes) + ' min ' + addZero(seconds) + ' sec';

}

exports.print = formatTime;