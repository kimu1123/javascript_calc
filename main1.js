  let result = ""; //データ
  
  let  is_calc = false;　//　=で計算したかどうか
  
 
  
  window.onload = function () {
  result = document.getElementById('result');
};

function c_click(){　　　　//関数宣言　ACキー押下
result.value = "0";
  is_calc = false;
}
  
function num_click(val){ 　　//数字キー
   if(is_calc)  result.value = "0";
   is_calc = false;


if(result.value == "0" &&val =="0"){
   result.value ="0";
  }else if(result.value =="0" && val=="."){
    result.value ="0.";
}else if(result.value =="0"){
    result.value=val;
    }else{
        result.value+=val;
    }
}

 
 function ope_click(val){
     if(is_calc){
         is_calc =false;
     }
     if(is_ope_last()){
          result.value = result.value.slice(0, -1) + val;
     } else {
    result.value += val;
     }
}
 
 function equal_click(){
       let temp = eval(result.value);
        result.value = temp;
        is_calc = true;
    }
    
    function is_ope_last(){
  return ["+","-","*","/" ].includes(result.value.toString().slice(-1));
}
    
    function shosu_click(val){ 　　
   if(is_calc)  result.value = "0";
   is_calc = false;
   
   if(result.value == "0" &&val =="0"){
   result.value ="0";
  }else if(result.value =="0" && val=="."){
    result.value ="0.";
}else if(result.value =="0"){
    result.value=val;
    }else{
        result.value+=val;
    }
}

function shosu_click(val){
   result.value += "."; 
	document.getElementById("output").innerHTML = result.value;
}

function shosu_click(val)  { 
	if (result.value.indexOf(".") < 0) result.value+= "."; 
	document.getElementById("output").innerHTML = result.value;
}
   

function shosu_click(val){ 　　
   if(is_calc)  result.value = "0";
   is_calc = false;
   
   if(result.value == "0" &&val =="0"){
   result.value ="0";
  }else if(result.value =="0" && val=="."){
    result.value ="0.";
}else if(result.value =="0"){
    result.value=val;
    }else{
        result.value+=val;
    }
}

function shosu_click(val){
   result.value += "."; 
	document.getElementById("output").innerHTML = result.value;
}

function shosu_click(val)  { 
	if (result.value.indexOf(".") < 0) result.value+= "."; 
	document.getElementById("output").innerHTML = result.value;
}
   

function zero_click(val){ 　　
   if(is_calc)  result.value = "0";
   is_calc = false;
   
   if(result.value == "0" &&val =="0"){
   result.value ="0";
  }else if(result.value =="0" && val=="."){
    result.value ="0.";
}else if(result.value =="0"){
    result.value=val;
    }else{
        result.value+=val;
    }
}

function zero_click(val){
   result.value += "00"; 
	document.getElementById("output").innerHTML = result.value;
}

function zero_click(val)  { 
	if (result.value.indexOf("00") < 0) result.value+= "00"; 
	document.getElementById("output").innerHTML = result.value;
}
   

