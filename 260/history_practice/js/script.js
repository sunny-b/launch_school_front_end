$('#tabs').on('click', 'a', function(e) {
	e.preventDefault();
	var idx = $(e.target).closest('li').index();
	var pageNumber = $(e.target).attr('href');

	history.pushState({ id: idx }, pageNumber, pageNumber);
	changePage(idx);
});

window.onpopstate = function(e) {
	if (!isNaN(e.state.id)) {
		changePage(e.state.id, e.state.page);
	}
};

function changePage(id) {
	$('div').removeClass('active').eq(id).addClass('active');
	$('li a').removeClass('selected')
	$('li').eq(id).find('a').addClass('selected');
}