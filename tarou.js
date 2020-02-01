javascript:

function open() {
	let moreLoads = document.querySelectorAll('form.pagination-loader-container');
	moreLoads.forEach(f => f.querySelector('[type="submit"]').click());
	return moreLoads.length > 0
};

function process() {
	let url = prompt("任意のコメントURL");
	while (true) {
		let didMoreLoad = open();
		if (didMoreLoad)break ;
		sleep(1000);
	};
	if (url) window.location.href = url;
};

process();


