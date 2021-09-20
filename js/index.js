const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

(function slideHeros(index) {
	const wrapper = $('.hero-list');
	const heros = $$('.hero').length;

	if (index === heros) {
		index = 0;
	}
	//const widthHeros = $('.heros');
	// const widthSlide = widthHeros.offsetWidth;
	//100 la muon dich ca mot trang qua
	//con muon dich tung trang thi tinh kich thuoc
	//moi phan tu roi moi dich
	Object.assign(wrapper.style, {
		transform: `translateX(${-1 * index * 100}%)`,
	});
	setTimeout(slideHeros, 8000, ++index);
})(0);
//--------------------
let index = 0;
showSlide(index, '.categories__list', '.categories__item');
function showSlide(i, list, item) {
	const cateList = $(list);
	const totalWidth = cateList.scrollWidth;
	const sizeWidth = cateList.offsetWidth;
	const itemWidth = $(item).offsetWidth;
	const widthScroll = totalWidth / sizeWidth; //xem tong so luong can dich chuyen la may lan
	const amountScroll = (totalWidth / itemWidth) % (sizeWidth / itemWidth); //Can dich chuyen bao nhieu item

	if (index + i === Math.ceil(widthScroll) || index + i === -1) {
		return;
	}
	index += i;
	if (index === Math.ceil(widthScroll) - 1) {
		$('.next').style.opacity = 0.1;
	} else {
		$('.next').style.opacity = 1;
	}
	if (index === 0) {
		$('.pre').style.opacity = 0.1;
	} else {
		$('.pre').style.opacity = 1;
	}
	if (
		Number(amountScroll.toFixed(2)) === 0 ||
		index < Math.ceil(widthScroll) - 1
	) {
		Object.assign(cateList.style, {
			transform: `translateX(${-1 * index * sizeWidth}px)`,
		});
	} else {
		Object.assign(cateList.style, {
			transform: `translateX(${
				-1 * amountScroll * itemWidth + -1 * (index - 1) * sizeWidth
			}px)`,
		});
	}
}
$('.next').onclick = () => {
	showSlide(1, '.categories__list', '.categories__item');
};
$('.pre').onclick = () => {
	showSlide(-1, '.categories__list', '.categories__item');
};
//---------------------------
window.onscroll = () => {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		$('header').classList.add('active');
		$$('.img')[0].children[0].classList.add('d-none');
		$$('.img')[0].children[1].classList.remove('d-none');
	} else {
		$('header').classList.remove('active');
		$$('.img')[0].children[0].classList.remove('d-none');
		$$('.img')[0].children[1].classList.add('d-none');
	}
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		$('.search-header').classList.remove('d-none');
	} else {
		$('.search-header').classList.add('d-none');	
	}
};
