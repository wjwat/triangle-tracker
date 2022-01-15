$(document).ready(function() {
	$('button#clear').click(function () {
		$('h2#output').text('');
	});

	$('form').submit(function(e) {
		e.preventDefault();
		a = parseInt($('input#side-a').val());
		b = parseInt($('input#side-b').val());
		c = parseInt($('input#side-c').val());

		// only positive numbers
		if (a <= 0 || b <= 0 || c <= 0) {
			$('h2#output').text('This triangle doesn\'t exist!');
		}	else if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
			$('h2#output').text('Not a triangle');
		} else if (a === b && b === c) {
			$('h2#output').text('Equilateral');
		} else if (a !== b && b !== c && a !== c) {
			$('h2#output').text('Scalene');
		} else {
			$('h2#output').text('Isosceles');
		}
	});
});
