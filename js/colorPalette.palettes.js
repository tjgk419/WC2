/**
 * colorPalette.palettes 데이터 파일
 */
!function(colorPalette){
	if(!colorPalette){
		throw new Error("Fail : Required colorPalette");
	}
	//-- 2색
	colorPalette.palettes['white_black_1bit'] = [[0,0,0],[255,255,255]]
	//grayscale 4색
	var t = new Array(4),t2=256/4,t3;
	for(var i=0,m=t.length;i<m;i++){
		t3=i*t2;
		t[i]=[t3,t3,t3];
	}
	colorPalette.palettes['grayscale_2bit'] = t;
	//grayscale 16색
	t = new Array(16),t2=256/16;
	for(var i=0,m=t.length;i<m;i++){
		t3=i*t2;
		t[i]=[t3,t3,t3];
	}
	colorPalette.palettes['grayscale_4bit'] = t;
	//grayscale 32색
	t = new Array(32),t2=256/32;
	for(var i=0,m=t.length;i<m;i++){
		t3=i*t2;
		t[i]=[t3,t3,t3];
	}
	colorPalette.palettes['grayscale_8bit'] = t;

	//-- 4색
	colorPalette.palettes['color_2bit'] = [[0,0,0],[0, 255, 255],[255, 0, 255],[255,255,255]]
	//-- 16색
	colorPalette.palettes['color_4bit'] = [[0,0,0],
	[255,255,255],
	[255,0,0],
	[0,255,0],
	[0,0,255],
	[255,255,0],
	[0,255,255],
	[255,0,255],
	[192,192,192],
	[128,128,128],
	[128,0,0],
	[128,128,0],
	[0,128,0],
	[128,0,128],
	[0,128,128],
	[0,0,128]];
	//-- 256 색
	colorPalette.palettes['color_8bit'] = [[0,0,0],
	[128,0,0],
	[0,128,0],
	[128,128,0],
	[0,0,128],
	[128,0,128],
	[0,128,128],
	[192,192,192],
	[128,128,128],
	[255,0,0],
	[0,255,0],
	[255,255,0],
	[0,0,255],
	[255,0,255],
	[0,255,255],
	[255,255,255],
	[0,0,0],
	[0,0,95],
	[0,0,135],
	[0,0,175],
	[0,0,215],
	[0,0,255],
	[0,95,0],
	[0,95,95],
	[0,95,135],
	[0,95,175],
	[0,95,215],
	[0,95,255],
	[0,135,0],
	[0,135,95],
	[0,135,135],
	[0,135,175],
	[0,135,215],
	[0,135,255],
	[0,175,0],
	[0,175,95],
	[0,175,135],
	[0,175,175],
	[0,175,215],
	[0,175,255],
	[0,215,0],
	[0,215,95],
	[0,215,135],
	[0,215,175],
	[0,215,215],
	[0,215,255],
	[0,255,0],
	[0,255,95],
	[0,255,135],
	[0,255,175],
	[0,255,215],
	[0,255,255],
	[95,0,0],
	[95,0,95],
	[95,0,135],
	[95,0,175],
	[95,0,215],
	[95,0,255],
	[95,95,0],
	[95,95,95],
	[95,95,135],
	[95,95,175],
	[95,95,215],
	[95,95,255],
	[95,135,0],
	[95,135,95],
	[95,135,135],
	[95,135,175],
	[95,135,215],
	[95,135,255],
	[95,175,0],
	[95,175,95],
	[95,175,135],
	[95,175,175],
	[95,175,215],
	[95,175,255],
	[95,215,0],
	[95,215,95],
	[95,215,135],
	[95,215,175],
	[95,215,215],
	[95,215,255],
	[95,255,0],
	[95,255,95],
	[95,255,135],
	[95,255,175],
	[95,255,215],
	[95,255,255],
	[135,0,0],
	[135,0,95],
	[135,0,135],
	[135,0,175],
	[135,0,215],
	[135,0,255],
	[135,95,0],
	[135,95,95],
	[135,95,135],
	[135,95,175],
	[135,95,215],
	[135,95,255],
	[135,135,0],
	[135,135,95],
	[135,135,135],
	[135,135,175],
	[135,135,215],
	[135,135,255],
	[135,175,0],
	[135,175,95],
	[135,175,135],
	[135,175,175],
	[135,175,215],
	[135,175,255],
	[135,215,0],
	[135,215,95],
	[135,215,135],
	[135,215,175],
	[135,215,215],
	[135,215,255],
	[135,255,0],
	[135,255,95],
	[135,255,135],
	[135,255,175],
	[135,255,215],
	[135,255,255],
	[175,0,0],
	[175,0,95],
	[175,0,135],
	[175,0,175],
	[175,0,215],
	[175,0,255],
	[175,95,0],
	[175,95,95],
	[175,95,135],
	[175,95,175],
	[175,95,215],
	[175,95,255],
	[175,135,0],
	[175,135,95],
	[175,135,135],
	[175,135,175],
	[175,135,215],
	[175,135,255],
	[175,175,0],
	[175,175,95],
	[175,175,135],
	[175,175,175],
	[175,175,215],
	[175,175,255],
	[175,215,0],
	[175,215,95],
	[175,215,135],
	[175,215,175],
	[175,215,215],
	[175,215,255],
	[175,255,0],
	[175,255,95],
	[175,255,135],
	[175,255,175],
	[175,255,215],
	[175,255,255],
	[215,0,0],
	[215,0,95],
	[215,0,135],
	[215,0,175],
	[215,0,215],
	[215,0,255],
	[215,95,0],
	[215,95,95],
	[215,95,135],
	[215,95,175],
	[215,95,215],
	[215,95,255],
	[215,135,0],
	[215,135,95],
	[215,135,135],
	[215,135,175],
	[215,135,215],
	[215,135,255],
	[215,175,0],
	[215,175,95],
	[215,175,135],
	[215,175,175],
	[215,175,215],
	[215,175,255],
	[215,215,0],
	[215,215,95],
	[215,215,135],
	[215,215,175],
	[215,215,215],
	[215,215,255],
	[215,255,0],
	[215,255,95],
	[215,255,135],
	[215,255,175],
	[215,255,215],
	[215,255,255],
	[255,0,0],
	[255,0,95],
	[255,0,135],
	[255,0,175],
	[255,0,215],
	[255,0,255],
	[255,95,0],
	[255,95,95],
	[255,95,135],
	[255,95,175],
	[255,95,215],
	[255,95,255],
	[255,135,0],
	[255,135,95],
	[255,135,135],
	[255,135,175],
	[255,135,215],
	[255,135,255],
	[255,175,0],
	[255,175,95],
	[255,175,135],
	[255,175,175],
	[255,175,215],
	[255,175,255],
	[255,215,0],
	[255,215,95],
	[255,215,135],
	[255,215,175],
	[255,215,215],
	[255,215,255],
	[255,255,0],
	[255,255,95],
	[255,255,135],
	[255,255,175],
	[255,255,215],
	[255,255,255],
	[8,8,8],
	[18,18,18],
	[28,28,28],
	[38,38,38],
	[48,48,48],
	[58,58,58],
	[68,68,68],
	[78,78,78],
	[88,88,88],
	[98,98,98],
	[108,108,108],
	[118,118,118],
	[128,128,128],
	[138,138,138],
	[148,148,148],
	[158,158,158],
	[168,168,168],
	[178,178,178],
	[188,188,188],
	[198,198,198],
	[208,208,208],
	[218,218,218],
	[228,228,228],
	[238,238,238],];

}(colorPalette)
