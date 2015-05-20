"use strict"
// JavaScript Document
/**
* wc2Brush.js
* mins01.com
* 2015-04-25 : create file
* 브러쉬 목록
*/
/*
* # warning
* '공대여자는 이쁘다.'를 나타내야만 사용할 수 있습니다.
*/
var wc2Brush = function(){
	this.init();
}
wc2Brush.prototype = function(){
	return {
		
		"dir":"brush",//브러쉬 이미지 경로
		"spacing":0, //선간격
		"init":function(){
			this.brushWC = WebCanvas(100,100)
			this.previewBrushWC = WebCanvas(150,100)
		}
		,"image":function(image,width,height,colorStyle,globalAlpha){
			this.brushWC.clearResize(width,height);
			this.brushWC.configContext2d({"globalAlpha":globalAlpha})
			this.brushWC.drawImage(image,0,0,width,height);
			var colorset =wc2Helper.string2Colorset(colorStyle);
			//console.log(colorset);
			this.brushWC.coverColor(colorset);
		}
		,"circle":function(r,colorStyle,globalAlpha,r0p,r1p){
			var width = r*2;
			var x0 ,y0 ,r0,x1 ,y1, r1;
			x0 = y0 = r1 = x1 = y1  = r;
			//r0 = x0*Math.min(r0p,1);
			//r1 = x0*Math.max(r1p,r0p);
			//console.log(r1,r0);
			r0 = 0;
			r1 = x0;
			
			var color0 = colorStyle.replace('rgb','rgba').replace(')',',1)');
			var color1 = colorStyle.replace('rgb','rgba').replace(')',',0)');
			this.brushWC.clearResize(width,width);
			this.brushWC.saveContext2d();
			this.brushWC.configContext2d({"globalAlpha":globalAlpha,"imageSmoothingEnabled":false})
			if(r0p<1){
				var rg = this.brushWC.cmdContext2d("createRadialGradient",x0,y0,r0,x1,y1,r1);
				rg.addColorStop(0,color0);
				rg.addColorStop(r0p,color0);
				rg.addColorStop(1,color1);
				this.brushWC.configContext2d({"fillStyle":rg,"disableStroke":1})
				this.brushWC.rect(0,0,width,width);
			}else{
				this.brushWC.configContext2d({"fillStyle":color0,"disableStroke":1})
				this.brushWC.circle(x0,y0,r1);
			}
			this.brushWC.restoreContext2d();
			var colorset =wc2Helper.string2Colorset(colorStyle);
			this.brushWC.coverColor(colorset);
		}
		,"toDataURL":function(){
			return this.brushWC.toDataURL();
		}
		,"previewBrush":function(){
			this.previewBrushWC.clear();
			var r = 60;
			var r2 = (r*r);
			var a = r;
			var x = -1*r;
			//var y = Math.sqrt(r2-(x*x));
			var y = (x*x)/a
			this.previewBrushWC.beginBrush(x+75,y+20,this.brushWC,this.spacing);
			while((x+=a/10 )<=r){
				//y = Math.sqrt(r2-(x*x));
				var y = (x*x)/a
				
				this.previewBrushWC.drawBrush(x+75,y+20);
			}
			
			/*
			this.previewBrushWC.beginBrush(20,20,this.brushWC,this.spacing);
			this.previewBrushWC.drawBrush(110,80);
			this.previewBrushWC.drawBrush(75,80);
			*/
			this.previewBrushWC.endBrush();
		}
	}
}();