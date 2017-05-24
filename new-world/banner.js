function banner() {
	var interval = null, index = 1, banner = null, length = 0, bannerCtrl = null, ctrlList = null;
	
	function init() {
		banner = document.getElementsByClassName("nw-banner-list")[0];
		length = banner.getElementsByTagName("li").length;
		bannerCtrl = document.getElementsByClassName("nw-control-list")[0];
		ctrlList = bannerCtrl.getElementsByTagName("li");
	}
	
	function bindEvent() {
		banner.addEventListener("mouseover", function(e) {
			clearInterval(interval);
		});
		banner.addEventListener("mouseout", function(e) {
			interval = setInterval(change, 3000);
		});
		bannerCtrl.addEventListener("click", function(e) {
			var target = e.target;
			if(target.nodeName.toLowerCase() == "li") {
				var dataIndex = parseInt(target.dataset.index);
				banner.style.marginLeft = -dataIndex*100+"%";
				setCtrl(dataIndex);
				
				index = (dataIndex+1) % 3;
				clearInterval(interval);
				interval = setInterval(change, 3000);
			}
		});
	}
	
	function change() {
		banner.style.marginLeft = -index*100+"%";
		setCtrl(index);
		
		if(++index >= length) {
			index = 0;
		}
	}
	
	function setCtrl(index) {
		for(var i=0;i<ctrlList.length;i++) {
			if(i == index) {
				ctrlList[i].className = "nw-active-ctrl";
			} else {
				ctrlList[i].className = "";
			}
		}
	}
	
	function play() {
		init();
		bindEvent();
		
		interval = setInterval(change, 3000);
	}
	
	return play;
}