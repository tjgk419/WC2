// JavaScript Document
/**
* class.WebCanvas.js
*/
/*
globalAlpha 와 opacity의 차이
globalAlpha는 그려지는것의 알파값
opacity는 레이어의 알파값(나중에 합쳐질 때 계산되어 합쳐진다)
*/

function WebCanvas(width,height,colorset){
	return WebCanvas.create(width,height,colorset);
}
(function(){
	WebCanvas.create = function(width,height,colorset){
		var c  = document.createElement('canvas');
		c.alt = "";
		c.class = "WC";
		if(c.tagName != 'CANVAS'){
			c = null;
			delete c;
			this.error = "<canvas>를 사용할 수 없는 환경입니다";
			return false;
		}
		for(x in this._prototype){
			c[x] = this._prototype[x];
		}
		c.error = ""; //최후 에러 메세지
		c.width = width;
		c.height = height;
		c.context2d = c.getContext('2d');
		//c.context2d.imageSmoothingEnabled = false;//
		//-- 추가 설정
		c.context2d.lineHeight = 1.5;
		for(var x in c.context2d){
			if(x == 'canvas'){continue;}
			if(typeof c.context2d[x] != "function" ){
			c.initContext2dCfg[x] = c.context2d[x];
			}
		}
		
		if(colorset){
			c.configContext2d({"fillStyle":WC2.colorset2String(colorset)});
			c.context2d.fillRect(0,0,c.width,c.height);
		}
		c.opacity(1);
		return c;
	}
	/**
	* canvas에 추가 멤버변수와 메소드를 설정한다. (프로토타입에 넣는건 아니다.)
	*/
	WebCanvas._prototype = {
		//== 추가 변수
		 "width":100
		,"height":100
		,"context2d":null//"getContext('2d');
		,"initContext2dCfg":{}
		//== 추가 메소드
		//-- 리사이즈 (내용유지)
		,"resize":function(width,height){
			var twc = WebCanvas(this.width, this.height)
			twc.context2d.putImageData(this.context2d.getImageData(0, 0, this.width, this.height),0,0);
			this.width = width;
			this.height = height;
			this.context2d.drawImage(twc, 0, 0, width, height);
			return true;
		}
		,"clear":function(){
			this.width = this.width;
			return true;
		}
		,"configContext2d":function(cfg){
			for(var x in cfg){
				if(this.context2d[x] === undefined){
					continue;
				}
				this.context2d[x] = cfg[x];
			}
			return this.context2d;
		}
		,"resetContext2d":function(){
			return this.configContext2d(this.initContext2dCfg);
		}
		,"pickupColor":function(x,y){
			x = Math.round(x);
			y = Math.round(y);
			if(x < 0 || x > this.width || y < 0 ||y > this.height){
				return false;
			}
			var imagedata = this.context2d.getImageData(0, 0, this.width, this.height);
			var pos = Math.round(this.width*y+x)*4
			try{
				return [imagedata.data[pos],imagedata.data[pos+1],imagedata.data[pos+2],(imagedata.data[pos+3]/255)]
			}catch(e){
				return false;
			}
		}
		,"opacity":function(opacity){
			if(!isNaN(opacity)){
				this.style.opacity = opacity;
			}
			return parseFloat(this.style.opacity);
		}
		,"merge":function(webCanvas){
			var globalAlpha = webCanvas.opacity();
			var context2d = this.context2d;
			if(globalAlpha!=null){
				context2d.globalAlpha = globalAlpha;
			}
			context2d.drawImage(webCanvas, 0, 0);
			context2d.globalAlpha = 1;
			//toLayer.restore();
			return this;
		}
		//--- 선그리기
		,"line":function(x0,y0,x1,y1){
			this.context2d.beginPath();
			this.context2d.moveTo(x0,y0);
			this.context2d.lineTo(x1,y1);
			this.context2d.stroke();
			this.context2d.closePath();
			return true;
		}
		//--- 곡선그리기
		,"curve":function(x0,y0,x1,y1,x3,y3,x4,y4){
			this.context2d.beginPath();
			this.context2d.moveTo(x0,y0);
			if(isNaN(x4)){ //quadraticCurveTo를 사용
				this.context2d.quadraticCurveTo(x1,y1,x3,y3);
			}else{ //bezierCurveTo 를 사용
				this.context2d.bezierCurveTo(x1,y1,x3,y3,x4,y4);
			}
			this.context2d.stroke();
			this.context2d.closePath();
			return true;
		}
		//--- 잘라내기
		,"crop":function(x0,y0,width,height){
			var imagedata = this.context2d.getImageData(x0,y0,width,height);
			this.clear();
			this.context2d.putImageData(imagedata, 0, 0);
		}
		//--- 사각형그리기
		,"rect":function(x0,y0,width,height){
			this.context2d.rect(x0,y0,width,height);
			this.context2d.fill();
			this.context2d.stroke();
		}
		//--- 원 그리기
		,"circle":function(x0,y0,xr,yr,x1,y1){
			if(isNaN(yr)){ //일반적인 정원
				this.context2d.beginPath();
				this.context2d.arc(x0, y0, xr, 0, Math.PI*2,null);
				this.context2d.fill();
				this.context2d.stroke();
				this.context2d.closePath();
			}else{ //타원
				this.context2d.moveTo(x0,y0);
				this.context2d.bezierCurveTo(x0+xr, y0+yr, x1+xr, y1+yr, x1, y1);
				this.context2d.bezierCurveTo(x1-xr, y1-yr, x0-xr, y0-yr,  x0, y0);
				this.context2d.fill();
				this.context2d.stroke();
				this.context2d.closePath();
			}
			return true;
		}
		//--- 그림 이동
		,"move":function(x0,y0){
			var imagedata = this.context2d.getImageData(0,0,this.width,this.height);
			this.clear();
			this.context2d.putImageData(imagedata, x0, y0);
		}
		//--- toDataURL
		//,"toDataURL":function(type,encoderOptions)// 캔버스에서 기본으로 지원됨
		//--- 텍스트, 문자열 들
		,"text":function(text,x0,y0){
			text = new String(text);
			var fontSize = (this.context2d.font.match(/\d+/))[0];
			var lineHeight = this.context2d.lineHeight; //lineHeight는 이후 설정할 수 있도록 하자.
			var texts = text.split(/[\f\n\r\t\v]/);
			for(var i=0,m=texts.length;i<m;i++){
				this.context2d.fillText(texts[i], x0, y0+(fontSize*lineHeight*i));
				this.context2d.strokeText(texts[i], x0, y0+(fontSize*lineHeight*i));
			}
		}
		//--- 문자열 길이 알아내기 (다중 문장 처리가능)
		,"measureText":function(text){
			var texts = text.split(/[\f\n\r\t\v]/);
			var maxWidth = -1;
			
			for(var i=0,m=texts.length;i<m;i++){
				maxWidth = Math.max(maxWidth,this.context2d.measureText(texts[i]).width);
			}
			var maxMin = maxWidth;
			for(var i=0,m=texts.length;i<m;i++){
				minWidth = Math.min(maxWidth,this.context2d.measureText(texts[i]).width);
			}
			
			return {"width":maxWidth,"maxWidth":maxWidth,"minWidth":minWidth};
		}
	}
})();