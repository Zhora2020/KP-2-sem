var theNum = "0";
var theNum1 = "0";
var theNum2 = "0";

let arr = ["img_ps5p.jpg", "img2_ps5p.jpg"];
let arr1 = ["img_oledp.jpg","img2_oledp.jpg"];
let arr2 = ["img_gen9_xsx.jpg","img2_xsxp.jpg"]

function go_to_right(){
  theNum++;
  if(theNum == arr.length){
	  theNum="0";
	  change_image_2.width="200";
	}
	else{
		change_image_2.width="500";
	}
  change_image_2.src=""+arr[theNum];
}

function img_ns(){
	theNum1++;
	if(theNum1 == arr1.length){theNum1="0";}
	change_image_3.src=""+arr1[theNum1];
}

function img_xsx(){
	theNum2++;
	if(theNum2 == arr2.length){theNum2="0";}
	change_image_1.src=""+arr2[theNum2];
}



