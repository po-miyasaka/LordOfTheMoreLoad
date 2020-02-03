javascript:

function openAllPagination() {
	return new Promise((resolve) => {
		let pagination = () => {
			let moreLoads = document.querySelectorAll('form.pagination-loader-container');
			if (moreLoads.length == 0){
				clearInterval(paginationID); 
				resolve();
			};
			moreLoads.forEach(f => f.querySelector('[type="submit"]').click());
		};
		let paginationID = setInterval(pagination, 1000);
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
