window.onload = function(){
	var bgImage = 0;
	//alert(document.getElementById("content").style.backgroundImage);
	var bgn = 0; var tc;
	var currBgE, prevBgE, nextBgE, lastBg, bgElm;
	//
	var bg0 = document.getElementById("bg0");
	var bg1 = document.getElementById("bg1");
	var bg2 = document.getElementById("bg2");
	var bg3 = document.getElementById("bg3");
	//
	var textCol = document.getElementById("message");
	//
	currBgE = bg0;
	
	setInterval(bgloop,4000);
	
	function bgloop (){
		//
		anbge();
		restBgs();
		nextBgE.setAttribute("class","bgprop i3 anim-fadein");
		textCol.setAttribute("class","pd5 "+tc);
		currBgE = nextBgE;
		//
	}
	
	function anbge(){
		//
		if(currBgE ==bg0){
			prevBgE = bg3;
			nextBgE = bg1;
			lastBg = bg2;
			tc="colw"
		}
		else if(currBgE ==bg1){
			prevBgE = bg0;
			nextBgE = bg2;
			lastBg = bg3;
			tc="";
		}
		else if(currBgE ==bg2){
			prevBgE = bg1;
			nextBgE = bg3;
			lastBg = bg0;
			tc=""
		}
		else if(currBgE ==bg3){
			prevBgE = bg2;
			nextBgE = bg0;
			lastBg = bg1;
			tc=""
		}
	}
	
	function nextBgn(){
		bgImage++;
		if(bgImage > 3) bgImage = 0;
		bgn = bgImage;
	}
	
	function restBgs(){
		//
		lastBg.setAttribute("class","t100 i0");
		nextBgE.setAttribute("class","t100 i0");
		prevBgE.setAttribute("class","t100 i0");
		currBgE.setAttribute("class","bgprop i0");
	}
	
};
