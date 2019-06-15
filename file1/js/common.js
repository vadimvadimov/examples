(function() {

	console.log('load');

})();


(function(){
	var test = document.getElementsByClassName('item_photo');
	for(var i = 0; i < test.length; i++){
		test[i].onmouseover = function(){
			//this.childNodes[1].style.opacity = '1';
			this.getElementsByClassName('description_photo')[0].style.opacity = '1';
		}
		test[i].onmouseout = function(){ 
			this.getElementsByClassName('description_photo')[0].style.opacity = '0';
		}
	}
})();

(function(){

	var test = document.getElementsByClassName('info_inner');
	for(var i = 0; i < test.length; i++){
		test[i].onmouseover = function(){
			//this.childNodes[1].style.opacity = '1';
			this.getElementsByClassName('info_inner_des')[0].style.opacity = '1';
			this.parentElement.getElementsByClassName('info_outer')[0].querySelector('h4').style.color = '#1eb99a';
		}
		test[i].onmouseout = function(){ 
			this.getElementsByClassName('info_inner_des')[0].style.opacity = '0';
			this.parentElement.getElementsByClassName('info_outer')[0].querySelector('h4').style.color = '#000';
		}
	}
})();

(function(){

	var test = document.getElementsByClassName('item_inner');
	for(var i = 0; i < test.length; i++){
		test[i].onmouseover = function(){
			//this.childNodes[1].style.opacity = '1';
			//this.getElementsByClassName('info_inner_des')[0].style.opacity = '1';
			this.getElementsByClassName('con_left')[0].querySelector('i').style.color = '#282528';
		}
		test[i].onmouseout = function(){ 
			//this.getElementsByClassName('info_inner_des')[0].style.opacity = '0';
			this.getElementsByClassName('con_left')[0].querySelector('i').style.color = '#b1b0b1';
		}
	}
})();


(function(){
var close = document.getElementById('closebtn');

close.addEventListener('click', function(){
	menuIcon = close.children;
	for (i = 0; i < menuIcon.length; i++){
		menuIcon[i].classList.toggle('active_btn');
	}
	var x = document.getElementById("nav_list");
	if (x.className === "main_menu") {
		x.className += " responsive";
		x.style.display = 'block';
		x.style.opacity = '1';
	} else {
		x.className = "main_menu";
		x.style.display = '';
		x.style.opacity = '0';
	}
});
	window.onresize = function(){
		if ( document.getElementsByClassName('main_menu')[0].classList.contains('responsive') ) {
		} else {
			document.getElementsByClassName('main_menu')[0].style.opacity = '1';
		}
	}

})();

(function(){
	arr_parent = ['.footer_col','.main_tagline'];
	//arr_parent = ['.main_logo','.main_tagline'];
	arr_children = ['.h4','.h1'];
	//arr_children = ['a','h1'];

	arr_parent.forEach(function(o,i){
		parent = document.querySelector(arr_parent[i]);
		children = parent.querySelector(arr_children[i]);
		children.innerHTML = children.textContent.replace(/.$/,'<span style="color: #4c76ff;">.</span>');
	});

	document.querySelector( '.main_logo' ).innerHTML = document.querySelector( '.main_logo' ).textContent.replace(/.$/,'<span style="color: #4c76ff;">.</span>');


	parent = document.querySelector('.main_tagline');
	children = parent.querySelector('p');
	//console.log(children);
	first_word = children.textContent.split(' ');
	children.innerHTML = '<span style="color: #4c76ff;">' + first_word[0] + ' </span>' + children.textContent.substr(children.textContent.indexOf(" ") + 1);

	//var arr_changed = ['.nav_content .logo','.inner h1'];
	//arr_changed.forEach(function(o){
	//	str = $(o).text();
	//	$(o).html( str.replace(/.$/,'<span style="color: #4c76ff;">.</span>') );
	//});
})();