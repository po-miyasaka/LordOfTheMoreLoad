javascript:

function openAllPagination() {
	while (true) {
		let moreLoads = document.querySelectorAll('form.pagination-loader-container');
		if (moreLoads.length == 0) break;
		moreLoads.forEach(f => f.querySelector('[type="submit"]').click());
		sleep(3000);
	};
};

function openAllComments() {
	document.querySelectorAll('.js-comment-container').forEach(e => e.setAttribute('open', ''));
};

function process() {
	let url = prompt("任意のコメントURL(なくてもOK)");
	openAllPagination();
	openAllComments();
	if (url) window.location.href = url;
};

process();
