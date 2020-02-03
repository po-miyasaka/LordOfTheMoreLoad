javascript:

function openPagination() {
	let moreLoads = document.querySelectorAll('form.pagination-loader-container');
	moreLoads.forEach(f => f.querySelector('[type="submit"]').click());
	return moreLoads.length == 0
};

function openAllComments() {
	document.querySelectorAll('.js-comment-container').forEach(e => e.setAttribute('open', ''))
};

function process() {
	openAllComments()
	let url = prompt("任意のコメントURL");
	while (true) {
		let noMoreLoad = openPagination();
		if (noMoreLoad) break ;
		sleep(3000);
	};
	if (url) window.location.href = url;
};

process();

