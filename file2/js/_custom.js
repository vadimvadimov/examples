document.addEventListener('DOMContentLoaded', function(){
	var array = document.querySelector('.nav__menu');
	//console.log('load_DOM');
	setTimeout(function(){
	  document.querySelector('#first').querySelector('.custom').style.marginBottom = - document.documentElement.clientHeight + document.querySelector('#first').querySelector('.custom').offsetHeight + 'px';
	  document.querySelector('#first').querySelector('.custom').style.transform = 'scale(0.1)';
	  document.querySelector('#first').querySelector('.custom').style.opacity = '0.1';
	  document.querySelector('.bg_overlay').style.backgroundColor = 'rgba(0,0,0, 0.1)';
	  document.querySelector('.nav').style.opacity = '.3';
	}, 3000);
	var timeout;
	document.addEventListener('mousemove', function(){
		var value = 0;
		for (var i = 0; i < array.children.length; i++){
			if( array.children[i].classList.contains('active') ){
				value = '#' + array.children[i].dataset.value;
				//console.log(value);
			}
		}
		document.querySelector(value).querySelector('.custom').style.marginBottom = 0;
		document.querySelector(value).querySelector('.custom').style.transform = 'scale(1)';
		document.querySelector(value).querySelector('.custom').style.opacity = '1';
		document.querySelector('.bg_overlay').style.backgroundColor = 'rgba(0,0,0, 0.8)';
		document.querySelector('.nav').style.opacity = '1';
		
		clearTimeout(timeout);
		timeout = setTimeout(function(){
			var value = 0;
			for (var i = 0; i < array.children.length; i++) {
				if( array.children[i].classList.contains('active') ){
					value = '#' + array.children[i].dataset.value;
				}
			}
			document.querySelector(value).querySelector('.custom').style.marginBottom = - document.documentElement.clientHeight + document.querySelector('#first').querySelector('.custom').offsetHeight + 'px';
			document.querySelector(value).querySelector('.custom').style.transform = 'scale(0.1)';
			document.querySelector(value).querySelector('.custom').style.opacity = '0.1';
			document.querySelector('.bg_overlay').style.backgroundColor = 'rgba(0,0,0, 0.1)';
			document.querySelector('.nav').style.opacity = '.3';
		}, 10000);
	});

	
	for (var i = 0; i < array.children.length; i++) {
		array.children[i].addEventListener('click', function(e){
			get_rem_active();
			e.target.classList.add('active');
			document.getElementById(e.target.dataset.value).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
			e.preventDefault();
		}, false);
	}
	function get_rem_active(){
		for (var i = 0; i < array.children.length; i++) {
			if( array.children[i].classList.contains('active') ){
				return array.children[i].classList.remove('active');
			}
		}
	}

	document.addEventListener('mousewheel', function(e){
		if( e.target.parentNode.scrollWidth > e.target.parentNode.offsetWidth ){
			delta = e.deltaX || e.deltaY;
			e.target.parentNode.scrollLeft += (delta * 0.5);
		} else if( e.target.scrollWidth > e.target.offsetWidth ){
			delta = e.deltaX || e.deltaY;
			e.target.scrollLeft += (delta * 0.5);
		} else {
			document.querySelector('.nav').style.opacity = '1';
			if( e.deltaY > 0 ){
				for (var i = 0; i < array.children.length; i++) {
					if( array.children[i].classList.contains('active') ){
						if( i + 1 != array.children.length ){
							document.getElementById(array.children[i + 1].dataset.value).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
							get_rem_active();
							array.children[i + 1].classList.add('active');
							return false;
						}
					}
				}
			} else {
				for (var i = 0; i < array.children.length; i++) {
					if( array.children[i].classList.contains('active') ){
						if( i != 0 ){
							document.getElementById(array.children[i - 1].dataset.value).scrollIntoView({behavior: 'smooth', block: 'center', inline: 'center'});
							get_rem_active();
							array.children[i - 1].classList.add('active');
							return false;
						}
					}
				}
			}
		}
	});

	for (var i = 0; i < array.children.length; i++){
		array.children[i].addEventListener('mouseover', function(e){
			//console.log(e.target.offsetLeft);
			//console.log(document.querySelector('#tooltip').offsetWidth);
			document.querySelector('#tooltip').innerHTML = e.target.title;
			//document.querySelector('#tooltip').style.left = - document.querySelector('#tooltip').offsetWidth - 15 + 'px';
			document.querySelector('#tooltip').style.top = e.target.offsetTop + 'px';
			document.querySelector('#tooltip').style.opacity = 1;
			if( document.documentElement.clientWidth < 576 ){
				setTimeout(function(){
					document.querySelector('#tooltip').style.opacity = 0;
				}, 800);
			}
		}, false);
	}

	for (var i = 0; i < array.children.length; i++){
		array.children[i].addEventListener('mouseout', function(e){
			//console.log(e.target.title);
			document.querySelector('#tooltip').style.opacity = 0;
			//document.querySelector('#tooltip').innerHTML = '';
			
		}, false);
	}
	document.querySelector('#mute').addEventListener('mouseover', function(e){
		setTimeout(function(){
			document.querySelector('#tooltip').innerHTML = document.querySelector('#mute').title;
			//document.querySelector('#tooltip').style.right = 50 + 'px';
			document.querySelector('#tooltip').style.top = 0 + 'px';
			document.querySelector('#tooltip').style.opacity = 1;
		}, 100);
			if( document.documentElement.clientWidth < 576 ){
				setTimeout(function(){
					document.querySelector('#tooltip').style.opacity = 0;
				}, 800);
			}
	});
	document.querySelector('#mute').addEventListener('mouseout', function(e){
		document.querySelector('#tooltip').style.opacity = 0;
	});
	setTimeout(function(){
		document.querySelector('.active').click();
		//console.log('click');
	}, 2000);
	if( document.documentElement.clientWidth < 576 ){
		setTimeout(function(){
			document.querySelector('#tooltip').style.opacity = 0;
		}, 800);
	}
});

(function() {
	document.addEventListener('click', function (event) {
		var target = event.target;
		if( !document.querySelector('.overlay') && target.classList.contains('img_modal') ){
			//console.log('click1');
			var img = new Image();
			img.src = target.src;
			overlay = document.createElement('div');
			overlay.classList.add('overlay');
			document.body.appendChild(overlay);
			modal = document.createElement('div');
			modal.classList.add('modal_window');
			overlay.appendChild(modal);
			modal.innerHTML = '<img src="' + target.src + '" class="img_inline">';
		}
		if( document.querySelector('.overlay') && target.classList.contains('img_modal') ){
			//console.log('click');
			//console.log( document.querySelector('.overlay') );
			document.querySelector('.overlay').classList.remove('hide');
			document.querySelector('.img_inline').style.maxWidth = '100%';
			document.querySelector('.img_inline').style.position = '';
			document.querySelector('.modal_window').innerHTML = '<img src="' + target.src + '" class="img_inline">';
		} else if( target.classList.contains( 'overlay' ) === true ){
			document.querySelector('.overlay').classList.add('hide');
		}
	}, false);
}());

(function() {

}());

(function() {
	document.addEventListener('click', function (e){
		e = e || window.event;
		//console.log(e);
		var target = e.target || e.srcElement;
		if (target.hasAttribute('data-toggle') && target.getAttribute('data-toggle') == 'modal') {
			if (target.hasAttribute('data-target')) {
				var m_ID = target.getAttribute('data-target');
				document.getElementById(m_ID).classList.add('open');
				e.preventDefault();
			}
		}
		// Close modal window with 'data-dismiss' attribute or when the backdrop is clicked
		if ((target.hasAttribute('data-dismiss') && target.getAttribute('data-dismiss') == 'modal') || target.classList.contains('modal')) {
			var modal = document.querySelector('[class="modal open"]');
			modal.classList.remove('open');
			e.preventDefault();
		}
	}, false);
}());