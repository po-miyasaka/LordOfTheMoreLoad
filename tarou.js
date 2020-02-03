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
	openAllComments();
	openAllPagination();
	let url = prompt("任意のコメントURL");
	if (url) window.location.href = url;
};

process();
