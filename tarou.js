javascript:

function openAllPagination() {
	return new Promise((resolve) => {
		let paginationID = 0;
		let pagination = () => {
			console.log("pagination");
			let moreLoads = document.querySelectorAll('form.pagination-loader-container');
			if (moreLoads.length == 0) { 
				clearInterval(paginationID); 
				resolve();
			};
			moreLoads.forEach(f => f.querySelector('[type="submit"]').click());
		};
		paginationID = setInterval(pagination, 1000);
	});
};

function openAllComments() {
	document.querySelectorAll('.js-comment-container').forEach(e => e.setAttribute('open', ''));
};

async function process() {
	let url = prompt("任意のコメントURL(なくてもOK)");
	await openAllPagination();
	openAllComments();
	if (url) window.location.href = url;
};

process();
