(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"solo_4_atlas_1", frames: [[0,0,1406,1453]]},
		{name:"solo_4_atlas_2", frames: [[0,0,1406,1453]]},
		{name:"solo_4_atlas_3", frames: [[0,0,1406,1453]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Design = function() {
	this.initialize(ss["solo_4_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.initialize(ss["solo_4_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Text = function() {
	this.initialize(ss["solo_4_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Tween2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Preservation", "24px 'Krungthep'", "#346C34");
	this.text.lineHeight = 33;
	this.text.lineWidth = 176;
	this.text.parent = this;
	this.text.setTransform(-87.75,-65.1);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.7,-67.1,179.5,67.1);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_psd
	this.instance = new lib.Text();
	this.instance.setTransform(321,346);

	this.instance_1 = new lib.Design();
	this.instance_1.setTransform(321,346);

	this.instance_2 = new lib.Logo();
	this.instance_2.setTransform(321,346);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(321,346,1406,1453);


(lib.Evergreen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Evergreen", "24px 'Krungthep'", "#346C34");
	this.text.lineHeight = 33;
	this.text.lineWidth = 240;
	this.text.parent = this;
	this.text.setTransform(-119.75,-32.55);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-121.7,-34.5,243.5,34.5);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Label
	this.text = new cjs.Text("Visit", "24px 'Krungthep'", "#9AB69A");
	this.text.textAlign = "center";
	this.text.lineHeight = 33;
	this.text.lineWidth = 151;
	this.text.parent = this;
	this.text.setTransform(0.3,-17.8);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},3).wait(1));

	// Button
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#006701").ss(5,1,1).p("Aq7jHIV3AAQAyAAAAAyIAAErQAAAygyAAIzhAAQhTAAg6g6QgHgIgHgHQgBgBgBgCQgrg1AAhHIAAiVQAAguArgEQABABABgBQACAAADAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#346C34").s().p("AolDIQhTAAg6g6IgOgPIgCgCQgrg2AAhHIAAiVQAAguArgDIACAAIAFgBIV3AAQAyAAAAAyIAAErQAAAygyAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#008204").ss(5,1,1).p("Aq7jHIV3AAQAyAAAAAyIAAErQAAAygyAAIzhAAQhTAAg6g6QgHgIgHgHQgBgBgBgCQgrg1AAhHIAAiVQAAguArgEQABABABgBQACAAADAAg");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#34983B").s().p("AolDIQhTAAg6g6IgOgPIgCgCQgrg2AAhHIAAiVQAAguArgDIACAAIAFgBIV3AAQAyAAAAAyIAAErQAAAygyAAg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#004200").ss(5,1,1).p("Aq7jHIV3AAQAyAAAAAyIAAErQAAAygyAAIzhAAQhTAAg6g6QgHgIgHgHQgBgBgBgCQgrg1AAhHIAAiVQAAguArgEQABABABgBQACAAADAAg");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#385333").s().p("AolDIQhTAAg6g6IgOgPIgCgCQgrg2AAhHIAAiVQAAguArgDIACAAIAFgBIV3AAQAyAAAAAyIAAErQAAAygyAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-22.5,155.3,64);


// stage content:
(lib.solo_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [59];
	// timeline functions:
	this.frame_59 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.visit.on('click', function(){
		/*
		Loads the URL in a new browser window.
		*/
		window.open('http://www.adobe.com', '_blank');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// Button
	this.instance = new lib.button();
	this.instance.setTransform(550,30);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.button(), 3);

	this.visit = new lib.button();
	this.visit.name = "visit";
	this.visit.setTransform(380.7,30.2);
	new cjs.ButtonHelper(this.visit, 0, 1, 2, false, new lib.button(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},52).to({state:[{t:this.visit}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(52).to({_off:false},0).to({_off:true,x:380.7,y:30.2},7).wait(1));

	// Preservation
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(580.25,56.6,1,1,0,0,0,0,-33.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:150.3,y:57},16).wait(10));

	// Evergreen
	this.instance_2 = new lib.Evergreen("synched",0);
	this.instance_2.setTransform(610,21,1,1,0,0,0,0,-17.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).to({x:182},20).wait(11));

	// Logo
	this.instance_3 = new lib.logo("synched",9);
	this.instance_3.setTransform(550,29,0.0357,0.0357,0,0,0,1025,1074);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:30,y:30,startPosition:5},20).wait(31));

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egp3ADIIAAmPMBTvAAAIAAGPg");
	this.shape.setTransform(258,30);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(60));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(224,33,507.79999999999995,57.5);
// library properties:
lib.properties = {
	id: '39D7D5CEE14547B09980131D07E971D5',
	width: 468,
	height: 60,
	fps: 24,
	color: "#00FF99",
	opacity: 1.00,
	manifest: [
		{src:"images/solo_4_atlas_1.png?1619463272088", id:"solo_4_atlas_1"},
		{src:"images/solo_4_atlas_2.png?1619463272088", id:"solo_4_atlas_2"},
		{src:"images/solo_4_atlas_3.png?1619463272088", id:"solo_4_atlas_3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['39D7D5CEE14547B09980131D07E971D5'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;