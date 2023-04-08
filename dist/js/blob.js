
(function(){

//IMPORT JSBAND FUNCTIONS AND CLASSES

	var
	trace = jsband.trace,	
	Metronome = jsband.Metronome,
	Ease = jsband.Ease,
	Tween = jsband.Tween,	
	CssProp = jsband.CssProp,
	Queue = jsband.Queue,
	Swing = jsband.Swing,
	Wave = jsband.Wave,
	Motion = jsband.Motion;
	
	
	
//GLOBAL VARIABLES

	var easingTypes = 
	{
		linear: Ease.lin(),
		quad: Ease.pow(2),
		cubic: Ease.pow(3),
		quart: Ease.pow(4),
		quint: Ease.pow(5),
		circ: Ease.circ(),
		sine: Ease.sin(),
		expo: Ease.exp(),
		elastic: Ease.osc2Out(),
		bounce: Ease.bncOut(),
		back: Ease.backOut()
	},
	
	swingTypes = 
	{
		sine: Wave.sin,
		linear: Wave.triangle,
		pulse: Wave.pulse
	},
	
	shapeProps = {amp1: 1, freq1: 1, pha1: 1, amp2: 1, freq2: 1, pha2: 1, amp3: 1, freq3: 1, pha3: 1},
	
	wavePropShortenings = {amplitude: "amp", frequency: "freq", phase: "pha"};
	
	
	
//UTILS
	
	//Print object properties
		function traceObject(obj){ for(var propName in obj) trace("*." + propName + " = " + obj[propName])}
		
	//Create web element
		function create(elementType){ return document.createElement(elementType) }
	
	//Validate number
		function validateNumber(value, defaultValue, minValue, maxValue)//returns new value
		{
			if(isNaN(value)) return defaultValue
			if(value < minValue) return minValue
			if(value > maxValue) return maxValue
			return value
		}
	
	//Validate numeric property of an object
		function validateNumericProperty(object, propName, defaultValue, minValue, maxValue)//returns new value
		{
			return validateNumber(object[propName], defaultValue, minValue, maxValue)
		}
	
	//Multiply two 3x3 matrices
		function multiplyMatrices(a, b)
		{
			var c = [], i, j;
			for(i = 0; i < 3; i++)
			{
				c[i] = [];
				for(j = 0; j < 3; j++) c[i][j] = a[i][0]*b[0][j] + a[i][1]*b[1][j] + a[i][2]*b[2][j]
			}
			return c		
		}
	
	//Multiply matrix by vector
		function applyMatrix(a, x, y, z)//a - matrix, x,y,z - point coordinates
		{
			return {
				x: a[0][0]*x + a[0][1]*y + a[0][2]*z,
				y: a[1][0]*x + a[1][1]*y + a[1][2]*z,
				z: a[2][0]*x + a[2][1]*y + a[2][2]*z
			}		
		}
	
	//Parse shape data
		function getShapeData(shapeValue, setZeroForUndefinedProps)
		{
			var data = {};
			for(var i = 1; i < 4; i++)
			{
				var wave = shapeValue["wave" + i];
			    if(wave)
			    {
			    	for(var propName in wave)
			    	{
			    		if(!isNaN(wave[propName]) && (propName in wavePropShortenings)) data[wavePropShortenings[propName] + i] = wave[propName]
			    	} 
			    }
			}
			if(setZeroForUndefinedProps){ for(var propName in shapeProps){ if(!(propName in data)) data[propName] = 0 } }
			return data
		}
	
	
	
	
//CLASS BlobAnimation

	function BlobAnimation(divID, settings)
	{
		//CHECKING ARGUMENTS. AVOIDING CONFLICTS WITH OTHER BlobAnimation INSTANCES.
		
			//Check availability of the specified div
				var divBlob = document.getElementById(divID);
				if(!divBlob)
				{
					 alert('BlobAnimation ERROR: There is no element with the specified id');
					 return
				}
			
			//Check if some BlobAnimation instance already associated with divID. If yes, destroy it.
				if(BlobAnimation.instances[divID]) BlobAnimation.instances[divID].destroy();
				
			//Register instance
				BlobAnimation.instances[divID] = this;
			
			//If settings are not specified, create an empty settings object
				if(!settings) settings = {};		
			
					
		
		//CONSTANTS

			//Numeric constants
				var INF = Number.POSITIVE_INFINITY;
				var NINF = Number.NEGATIVE_INFINITY;
				var MOUSE_MOVE_FPS = 30;
				var MOUSE_MOVE_SPEED_LIMIT = 100;		
				var PI = Math.PI,
					PI2 = PI / 2;
			
			//Settings validation
				var DETALIZATION = "DETALIZATION" in settings ? 
									validateNumericProperty(settings, "DETALIZATION", 60, 1, INF) :
									validateNumericProperty(settings, "DETALISATION", 60, 1, INF);			
				var BLOB_SIZE = validateNumericProperty(settings, "BLOB_SIZE", 220, 1, INF);
				var BLOB_DISTANCE = validateNumericProperty(settings, "BLOB_DISTANCE", 1000, 0, INF)
				var ROTATION_SPEED = validateNumericProperty(settings, "ROTATION_SPEED", 5, 0, INF) / 1000 ;
				var PERSPECTIVE_DISTORTION = validateNumericProperty(settings, "PERSPECTIVE_DISTORTION", 1, 0.001, INF);
				var OFFSET_X = validateNumericProperty(settings, "OFFSET_X", 0, NINF, INF);
				var OFFSET_Y = validateNumericProperty(settings, "OFFSET_Y", 0, NINF, INF);
				var PERCENTAGE_OFFSET_X = validateNumericProperty(settings, "PERCENTAGE_OFFSET_X", 0, NINF, INF) / 100;
				var PERCENTAGE_OFFSET_Y = validateNumericProperty(settings, "PERCENTAGE_OFFSET_Y", 0, NINF, INF) / 100;
				
				var DOT_SIZE = validateNumericProperty(settings, "DOT_SIZE", 2, 0, INF);
				var DOT_COLOR = settings.DOT_COLOR || "black";

				var AUTO_SCALE = settings.AUTO_SCALE;
				var VIEWPORT_WIDTH = validateNumericProperty(settings, "VIEWPORT_WIDTH", 800, 100, INF);
				var VIEWPORT_HEIGHT = validateNumericProperty(settings, "VIEWPORT_HEIGHT", 800, 100, INF);
				
				var MOUSE_DISTANCE_MIN = validateNumericProperty(settings, "MOUSE_DISTANCE_MIN", 20, 0, INF);
				var MOUSE_DISTANCE_MAX = validateNumericProperty(settings, "MOUSE_DISTANCE_MAX", MOUSE_DISTANCE_MIN + 400, MOUSE_DISTANCE_MIN + 0.001, INF);
				var MOUSE_SENSITIVITY = validateNumericProperty(settings, "MOUSE_SENSITIVITY", 1, 0, INF) / 1000;
				var INERTIAL_TIME = validateNumericProperty(settings, "INERTIAL_TIME", 2, 0, INF) * 1000 ;
				
				var INITIAL_SHAPE = settings.INITIAL_SHAPE || {
															  	wave1: {amplitude: 70, frequency: 3, phase: 0},
															  	wave2: {amplitude: 60, frequency: 2, phase: 0},
															  	wave3: {amplitude: 50, frequency: 2, phase: 0} 
														     };
				var USE_MORPHING = settings.USE_MORPHING;
				var USE_WAVE_MOTION = settings.USE_WAVE_MOTION;
				var USE_WAVE_SWING = settings.USE_WAVE_SWING;
				
				var MORPHING_AUTOPLAY = ("MORPHING_AUTOPLAY" in settings) ? settings.MORPHING_AUTOPLAY : true ;
				var MORPHING_DURATION = validateNumericProperty(settings, "MORPHING_DURATION", 2, 0, INF);
				var MORPHING_DELAY = validateNumericProperty(settings, "MORPHING_DELAY", 1, 0, INF);
				var MORPHING_TRANSITION_TYPE = settings.MORPHING_TRANSITION_TYPE || "cubic";
				var MORPHING_SHAPES = settings.MORPHING_SHAPES || [];			
				
					if(USE_WAVE_MOTION && USE_MORPHING && MORPHING_SHAPES.length)
					{
						for(var waveIndex = 1; waveIndex < 4; waveIndex++)
						{
							if(settings["WAVE_" + waveIndex + "_MOTION_SPEED"])
							{
								for(var i = MORPHING_SHAPES.length; i--;)
								{
									var wave = MORPHING_SHAPES[i]["wave" + waveIndex];
									if(wave && ("phase" in wave)) delete wave.phase
								}						
							}
						} 
					}
					
					if(USE_WAVE_SWING)
					{
						for(var waveIndex = 1; waveIndex < 4; waveIndex++)
						{							
							var swingSettings = settings["WAVE_" + waveIndex + "_SWING_SETTINGS"]; 
							if(swingSettings)
							{
								for(var propName in swingSettings)
								{
									var swingSetting = swingSettings[propName];
									if(swingSetting)
									{										
										if(USE_MORPHING)
										{										
											for(var i = MORPHING_SHAPES.length; i--;)
											{
												var wave = MORPHING_SHAPES[i]["wave" + waveIndex];
												if(wave && (propName in wave)) delete wave[propName]
											}
										}
										if("type" in swingSetting)
										{
											swingSetting.wave = (typeof(swingSetting.type) === "function" ? swingSetting.type : swingTypes[swingSetting.type]) || Wave.sin;
											delete swingSetting.type
										}
										if( ("amplitude" in swingSetting) && isNaN(swingSetting.amplitude)) delete swingSetting.amplitude
										if( ("frequency" in swingSetting) && isNaN(swingSetting.frequency)) delete swingSetting.frequency
										if( ("phase" in swingSetting) && isNaN(swingSetting.phase)) delete swingSetting.phase
									}
								}
								if(swingSettings.phase && USE_WAVE_MOTION) settings["WAVE_" + waveIndex + "_MOTION_SPEED"] = 0					
							}
						}
					}
					
				var WAVE_1_MOTION_SPEED = settings.WAVE_1_MOTION_SPEED;
				var WAVE_2_MOTION_SPEED = settings.WAVE_2_MOTION_SPEED;
				var WAVE_3_MOTION_SPEED = settings.WAVE_3_MOTION_SPEED;
				
				var WAVE_1_SWING_SETTINGS = settings.WAVE_1_SWING_SETTINGS;
				var WAVE_2_SWING_SETTINGS = settings.WAVE_2_SWING_SETTINGS;
				var WAVE_3_SWING_SETTINGS = settings.WAVE_3_SWING_SETTINGS;
				
			//Other constants	
				var BLOB_DISTORTED_DISTANCE = BLOB_DISTANCE / PERSPECTIVE_DISTORTION;			
				var BLOB_INIT_DISTORTED_DISTANCE = 1000 / PERSPECTIVE_DISTORTION;				
					
					
			
		//PRIVATE VARIABLES
			
			var 
			body = document.body,
			divDataContainer = (function()
			{
				var div = create("div");
				CssProp.set(div,
				{
					position:"relative", width:"100%", height:"100%", top: 0, left: 0, margin: 0,
					userSelect: "none",
				 	MozUserSelect: "none",
					WebkitUserSelect: "none",
					MsUserSelect: "none",
					KhtmlUserSelect: "none",
					userDrag: "none", 
			 		WebkitUserDrag: "none",			 		
			 		overflow: "hidden", 
			 		cursor: "default"
				});
				div.setAttribute("unselectable", "on");
				divBlob.appendChild(div);
				return div
			})(),
			canvas = (function()
			{
				var cnv = create("canvas");
				CssProp.set(cnv, 
				{
					position: "absolute", width: "100%", height: "100%", top: 0, left: 0, margin: 0
				});
				// cnv.width = divDataContainer.clientWidth;
				// cnv.height = divDataContainer.clientHeight;
				divDataContainer.appendChild(cnv);
				return cnv
			})(),
			ctx = canvas.getContext("2d"),
			metronome = new Metronome();
		
			var shape = (function()
			{
				var data = {
							set: function(obj){ for(var name in obj) this[name] = obj[name] },
							angle: ROTATION_SPEED
						  },
					shapeProps = getShapeData(INITIAL_SHAPE, true);
				for(var propName in shapeProps) data[propName] = shapeProps[propName]
				return data				
			})(),
			vx = 5,
			vy = 5,
			angleSign = 1,
			angleTween = {stop: function(){}},
			sin = Math.sin(shape.angle), 
			cos = Math.cos(shape.angle),
			uvNorm = Math.sqrt(vy*vy + vx*vx), 
			u = vy/uvNorm,
			v = -vx/uvNorm,
			matrix = [
			[1, 0, 0],
			[0, 1, 0],
			[0, 0, 1]
			],
			dist, k, p, dx = 0, dy = 0, dxy = 0, dxNew, dyNew, dxyNew, mx, my, tNew, t = (new Date()).getTime(),
			morphingQueue,
			scale,
			offsetX = 0,
			offsetY = 0,
			hasOffset = OFFSET_X || OFFSET_Y || PERCENTAGE_OFFSET_X || PERCENTAGE_OFFSET_Y,
			viewportRatio = VIEWPORT_HEIGHT / VIEWPORT_WIDTH;
			
		
		
		//PRIVATE METHODS
			
			//Adapt canvas to the new page layout
				function onContainerResize(e)
				{
					var w = canvas.width = divDataContainer.clientWidth;
					var h = canvas.height = divDataContainer.clientHeight;
					if(AUTO_SCALE) scale = h / w > viewportRatio ? w / VIEWPORT_WIDTH : h / VIEWPORT_HEIGHT;
					if(hasOffset) 
					{
						offsetX = OFFSET_X + PERCENTAGE_OFFSET_X * w; 
						offsetY = OFFSET_Y + PERCENTAGE_OFFSET_Y * h
					}
				}				
			
			//Get 2D projection by 3D coordinates
				function projection(x, y, z)//returns {x:_, y:_, alpha:_, scale:_}
				{
					// var k = BLOB_DISTORTED_DISTANCE / (BLOB_DISTORTED_DISTANCE + z);		//
					var k = BLOB_INIT_DISTORTED_DISTANCE / (BLOB_DISTORTED_DISTANCE + z);
					return {x: k*x, y: k*y, alpha: k < 1 ? k*k : 1, scale: k}
				}	
			
			//Redraw canvas
				function update()
				{
					var p, t, f, dot, x, y, z, p3d, jDetalization, size;
					
					uvNorm = Math.sqrt(vy*vy + vx*vx); 
					u = vy/uvNorm || 0.0001;  
					v = -vx/uvNorm || 0.0001; 
					sin = Math.sin(shape.angle);
					cos = Math.cos(shape.angle);
					
					matrix = multiplyMatrices(
					[
					[u*u+v*v*cos, 	    u*v*(1-cos), 		v*sin		  ],
					[u*v*(1-cos),       v*v+u*u*cos,        -u*sin		  ],
					[-v*sin, 	        u*sin, 		        (u*u+v*v)*cos ]
					],
					matrix	
					);
					
					canvas.width = canvas.width;
					ctx.fillStyle = DOT_COLOR;					
					if(hasOffset) ctx.translate(canvas.width/2 + offsetX, canvas.height/2 + offsetY)
					else ctx.translate(canvas.width/2, canvas.height/2);
					if(AUTO_SCALE) ctx.scale(scale, scale);
					
					for(var i = DETALIZATION; i--;)
					{
						t =  i/DETALIZATION * PI - PI2;
						jDetalization = Math.round(DETALIZATION * Math.cos(t) * 2);
						for(var j = jDetalization; j--;)
						{
							f =  j/jDetalization * 2 * PI - PI;
							
							//complex surface
								x = (BLOB_SIZE + shape.amp1 * Math.sin(shape.freq1 * t + shape.pha1)) * Math.cos(t) * Math.cos(f);
								y = (BLOB_SIZE + shape.amp2 * Math.sin(shape.freq2 * f + shape.pha2)) * Math.cos(t) * Math.sin(f);
								z = (BLOB_SIZE + shape.amp3 * Math.sin(shape.freq3 * t + shape.pha3)) * Math.sin(t);
							
							//ball				
								// x = BLOB_SIZE * Math.cos(t) * Math.cos(f);
								// y = BLOB_SIZE * Math.cos(t) * Math.sin(f);
								// z = BLOB_SIZE * Math.sin(t);
							
							//plane
								// x = t*100;
								// y = f*100;
								// z = 0;
							
							p3d = applyMatrix(matrix, x, y, z);				
							p = projection(p3d.x, p3d.y, p3d.z);
							size = DOT_SIZE * p.scale;
							ctx.globalAlpha = p.alpha;
							if(size > 0) ctx.fillRect(p.x, p.y, size, size);
						}
					}	
				}
			
			//Get relative mouse position 
				function getMousePoint(e)
				{
				    var rect = canvas.getBoundingClientRect();
				    //trace(offsetX)
				    return {
				      x: e.clientX - rect.left - offsetX,
				      y: e.clientY - rect.top - offsetY
				    }
				}
			
			//React to mouse movement
				function onMove(e)
				{
					tNew = (new Date()).getTime();
					if(tNew - t > 1000/MOUSE_MOVE_FPS)
					{
						p = getMousePoint(e);		
						dxNew = p.x - mx; dyNew = p.y - my;
						dxyNew = Math.sqrt(dxNew*dxNew + dyNew*dyNew);		
						dist = Math.sqrt((p.x - canvas.width/2)*(p.x - canvas.width/2) + (p.y - canvas.height/2)*(p.y - canvas.height/2));
						if(dxyNew && dist < MOUSE_DISTANCE_MAX)
						{
							k = dist < MOUSE_DISTANCE_MIN ? 1 : (MOUSE_DISTANCE_MAX - dist)/(MOUSE_DISTANCE_MAX - MOUSE_DISTANCE_MIN);			
							if(Math.abs(Math.acos((dxNew * dx + dyNew * dy) / (dxy * dxyNew))) > Math.PI/2) angleSign *= -1;
							if(Math.min(dxyNew, MOUSE_MOVE_SPEED_LIMIT) * MOUSE_SENSITIVITY * k > Math.abs(shape.angle))
							{
								angleTween.stop(); shape.angle = angleSign * Math.min(dxyNew, MOUSE_MOVE_SPEED_LIMIT) * MOUSE_SENSITIVITY * k;
								vx = angleSign * dxNew; vy = angleSign * dyNew;
								angleTween = Tween.run(shape, {angle: angleSign * ROTATION_SPEED}, Ease.powOut(3), INERTIAL_TIME, metronome)
							}			
							dx = dxNew;
							dy = dyNew;
							dxy = dxyNew
						}
						mx = p.x; my = p.y;
						t = tNew		
					}
				}
				
			//React to first mouse movement
				function onInitMove(e)
				{
					document.removeEventListener("mousemove", onInitMove)
					p = getMousePoint(e);
					mx = p.x; my = p.y;
					document.addEventListener("mousemove", onMove)
				}
			
		
			
		//PUBLIC METHODS
		
			//Adapt layout to the new screen size
				this.resize = function(){ onContainerResize() }	;
			
			//Stop all animations, free memory, delete everything related to BlobAnimation instance			
				this.destroy = function()
				{
					//Unregister instance
						BlobAnimation.instances[divID] = null;
						
					//Stop all animations
						metronome.removeAllListeners();
						if(morphingQueue) morphingQueue.clear();
					
					//Remove all DOM event listeners
						window.removeEventListener("resize", onContainerResize);
						document.removeEventListener("mousemove", onInitMove);
						document.removeEventListener("mousemove", onMove);
					
					//Remove dynamically created web elements
						divDataContainer.removeChild(canvas);
						divBlob.removeChild(divDataContainer);
					
					//Remove everything from memory
						divBlob = divID = settings = 
						INF = MOUSE_MOVE_FPS = MOUSE_MOVE_SPEED_LIMIT = PI = PI2 = DETALIZATION = BLOB_SIZE = ROTATION_SPEED = PERSPECTIVE_DISTORTION = 
						DOT_SIZE = DOT_COLOR = MOUSE_DISTANCE_MIN = MOUSE_DISTANCE_MAX = MOUSE_SENSITIVITY = INERTIAL_TIME = INITIAL_SHAPE = 
						USE_MORPHING = USE_WAVE_MOTION = USE_WAVE_SWING = AUTO_SCALE = VIEWPORT_WIDTH = VIEWPORT_HEIGHT = 
						MORPHING_AUTOPLAY = MORPHING_DURATION = MORPHING_DELAY = MORPHING_TRANSITION_TYPE = MORPHING_SHAPES = 
						WAVE_1_MOTION_SPEED = WAVE_2_MOTION_SPEED = WAVE_3_MOTION_SPEED = WAVE_1_SWING_SETTINGS = WAVE_2_SWING_SETTINGS = WAVE_3_SWING_SETTINGS = 
						BLOB_DISTANCE = BLOB_DISTORTED_DISTANCE = BLOB_INIT_DISTORTED_DISTANCE = OFFSET_X = OFFSET_Y = PERCENTAGE_OFFSET_X = PERCENTAGE_OFFSET_Y = 
						body = divDataContainer = canvas = ctx = metronome = shape = vx = vy = angleSign = angleTween = sin = cos = uvNorm = u = v = matrix = 
						dist = k = p = dx = dy = dxy = dxNew = dyNew = dxyNew = mx = my = tNew = t = morphingQueue = viewportRatio = scale = 
						onContainerResize = projection = update = getMousePoint = onMove = onInitMove = hasOffset = offsetX = offsetY = null;					
						
					//Delete public properties
						for (propName in this) { delete this[propName]}
					
					//Redefine public methods	
						this.resize = this.destroy = this.morphTo = function(){}
				}
			
			// Manual morphing
				this.morphTo = function(v)
				{
					if(USE_MORPHING && MORPHING_SHAPES.length)
					{
						var sourceShapeData;
						if(v && typeof(v) === "object")
						{
							sourceShapeData = v
						}
						else if(!isNaN(v) && v >= 0 && v < MORPHING_SHAPES.length && !(v - Math.floor(v)))
						{
							sourceShapeData = MORPHING_SHAPES[v]
						}
						if(sourceShapeData)
						{
							Tween.run
							(
								shape, 
								getShapeData(sourceShapeData),
								typeof(MORPHING_TRANSITION_TYPE) === "function" ? MORPHING_TRANSITION_TYPE : easingTypes[MORPHING_TRANSITION_TYPE], 
								MORPHING_DURATION * 1000, 
								metronome
							);
						}						
					}
				}
				
				
			
		//PUBLIC PROPERTIES

			Object.defineProperties(this,
			{
				// BLOB_SIZE
				"blobSize": {
					get: function() { return BLOB_SIZE },   
					set: function(v) { BLOB_SIZE = validateNumber(v, 220, 1, INF) }, 
					configurable: true
				},
				
				// BLOB_DISTANCE
				"blobDistance": {
					get: function() { return BLOB_DISTANCE },   
					set: function(v) 
					{
						BLOB_DISTANCE = validateNumber(v, 1000, 0, INF);
						BLOB_DISTORTED_DISTANCE = BLOB_DISTANCE / PERSPECTIVE_DISTORTION;
						BLOB_INIT_DISTORTED_DISTANCE = 1000 / PERSPECTIVE_DISTORTION
					}, 
					configurable: true
				},
				
				// ROTATION_SPEED
				"rotationSpeed": {
					get: function() { return ROTATION_SPEED },   
					set: function(v) { shape.angle = ROTATION_SPEED = validateNumber(v, 5, 0, INF) / 1000 }, 
					configurable: true
				},
				
				// PERSPECTIVE_DISTORTION
				"perspectiveDistortion": {
					get: function() { return PERSPECTIVE_DISTORTION },   
					set: function(v) 
					{
						PERSPECTIVE_DISTORTION = validateNumber(v, 1, 0.001, INF);
						BLOB_DISTORTED_DISTANCE = BLOB_DISTANCE / PERSPECTIVE_DISTORTION;
						BLOB_INIT_DISTORTED_DISTANCE = 1000 / PERSPECTIVE_DISTORTION
					}, 
					configurable: true
				},

				// OFFSET_X 
				"offsetX": {
					get: function() { return OFFSET_X },   
					set: function(v) 
					{
						OFFSET_X = validateNumber(v, 0, NINF, INF);
						hasOffset = OFFSET_X || OFFSET_Y || PERCENTAGE_OFFSET_X || PERCENTAGE_OFFSET_Y;						
						offsetX = OFFSET_X + PERCENTAGE_OFFSET_X * canvas.width
					}, 
					configurable: true
				},

				// OFFSET_Y 
				"offsetY": {
					get: function() { return OFFSET_Y },   
					set: function(v) 
					{
						OFFSET_Y = validateNumber(v, 0, NINF, INF);
						hasOffset = OFFSET_X || OFFSET_Y || PERCENTAGE_OFFSET_X || PERCENTAGE_OFFSET_Y;
						offsetY = OFFSET_Y + PERCENTAGE_OFFSET_Y * canvas.height
					}, 
					configurable: true
				},

				// PERCENTAGE_OFFSET_X 
				"percentageOffsetX": {
					get: function() { return PERCENTAGE_OFFSET_X * 100 },   
					set: function(v) 
					{
						PERCENTAGE_OFFSET_X = validateNumber(v, 0, NINF, INF) / 100;
						hasOffset = OFFSET_X || OFFSET_Y || PERCENTAGE_OFFSET_X || PERCENTAGE_OFFSET_Y;
						offsetX = OFFSET_X + PERCENTAGE_OFFSET_X * canvas.width
					}, 
					configurable: true
				},

				// PERCENTAGE_OFFSET_Y  
				"percentageOffsetY": {
					get: function() { return PERCENTAGE_OFFSET_Y * 100 },   
					set: function(v) 
					{
						PERCENTAGE_OFFSET_Y = validateNumber(v, 0, NINF, INF) / 100;
						hasOffset = OFFSET_X || OFFSET_Y || PERCENTAGE_OFFSET_X || PERCENTAGE_OFFSET_Y;
						offsetY = OFFSET_Y + PERCENTAGE_OFFSET_Y * canvas.height;
					}, 
					configurable: true
				},
				
				// DOT_SIZE
				"dotSize": {
					get: function() { return DOT_SIZE },   
					set: function(v) { DOT_SIZE = validateNumber(v, 2, 0, INF) }, 
					configurable: true
				},
				
				// DOT_COLOR
				"dotColor": {
					get: function() { return DOT_COLOR },   
					set: function(v) { DOT_COLOR = v || "black" }, 
					configurable: true
				},
				
				// MOUSE_DISTANCE_MIN
				"mouseDistanceMin": {
					get: function() { return MOUSE_DISTANCE_MIN },   
					set: function(v) { MOUSE_DISTANCE_MIN = validateNumber(v, 20, 0, MOUSE_DISTANCE_MAX - 0.0001) }, 
					configurable: true
				},
				
				// MOUSE_DISTANCE_MAX
				"mouseDistanceMax": {
					get: function() { return MOUSE_DISTANCE_MAX },   
					set: function(v) { MOUSE_DISTANCE_MAX = validateNumber(v, MOUSE_DISTANCE_MIN + 400, MOUSE_DISTANCE_MIN + 0.001, INF) }, 
					configurable: true
				},
				
				// MOUSE_SENSITIVITY
				"mouseSensitivity": {
					get: function() { return MOUSE_SENSITIVITY },   
					set: function(v) 
					{
						var prevValue = MOUSE_SENSITIVITY;
						MOUSE_SENSITIVITY = validateNumber(v, 1, 0, INF) / 1000;
						if(MOUSE_SENSITIVITY && !prevValue) document.addEventListener("mousemove", onInitMove)
						else if(prevValue && !MOUSE_SENSITIVITY)
						{
							document.removeEventListener("mousemove", onInitMove)
							document.removeEventListener("mousemove", onMove)
						}
					}, 
					configurable: true
				},
				
				// INERTIAL_TIME
				"inertialTime": {
					get: function() { return INERTIAL_TIME },   
					set: function(v) { INERTIAL_TIME = validateNumber(v, 2, 0, INF) * 1000 }, 
					configurable: true
				},
				
				//SHAPE PROPERTIES
				"wave1Amplitude": { get: function() { return shape.amp1 },  set: function(v) { shape.amp1 = v },  configurable: true },
				"wave2Amplitude": { get: function() { return shape.amp2 },  set: function(v) { shape.amp2 = v },  configurable: true },
				"wave3Amplitude": { get: function() { return shape.amp3 },  set: function(v) { shape.amp3 = v },  configurable: true },
				"wave1Frequency": { get: function() { return shape.freq1 },  set: function(v) { shape.freq1 = v },  configurable: true },
				"wave2Frequency": { get: function() { return shape.freq2 },  set: function(v) { shape.freq2 = v },  configurable: true },
				"wave3Frequency": { get: function() { return shape.freq3 },  set: function(v) { shape.freq3 = v },  configurable: true },
				"wave1Phase": { get: function() { return shape.pha1 },  set: function(v) { shape.pha1 = v },  configurable: true },
				"wave2Phase": { get: function() { return shape.pha2 },  set: function(v) { shape.pha2 = v },  configurable: true },
				"wave3Phase": { get: function() { return shape.pha3 },  set: function(v) { shape.pha3 = v },  configurable: true }
			})
			
			
			
	//START APP
		
		//Define response to the window resize
			window.addEventListener("resize", onContainerResize);
			onContainerResize()
	
		//Start morphing
			if(USE_MORPHING && MORPHING_AUTOPLAY && MORPHING_SHAPES.length)
			{
				var morphingQueue = new Queue();
				morphingQueue.delay = MORPHING_DELAY;
				for(var i = 0, len = MORPHING_SHAPES.length; i < len; i++) 
				{
					morphingQueue.addTween(shape, getShapeData(MORPHING_SHAPES[i]), typeof(MORPHING_TRANSITION_TYPE) === "function" ? MORPHING_TRANSITION_TYPE : easingTypes[MORPHING_TRANSITION_TYPE], MORPHING_DURATION, metronome);
				}
				morphingQueue.addQueue(morphingQueue);
				morphingQueue.run();
			}
		
		//Start wave motion	
			if(USE_WAVE_MOTION)
			{		
				var motion = (function()
				{
					var speed = {}, totalSpeedProps = 0;
					if(WAVE_1_MOTION_SPEED && !isNaN(WAVE_1_MOTION_SPEED)) {speed.pha1 = WAVE_1_MOTION_SPEED; totalSpeedProps++};
					if(WAVE_2_MOTION_SPEED && !isNaN(WAVE_2_MOTION_SPEED)) {speed.pha2 = WAVE_2_MOTION_SPEED; totalSpeedProps++};
					if(WAVE_3_MOTION_SPEED && !isNaN(WAVE_3_MOTION_SPEED)) {speed.pha3 = WAVE_3_MOTION_SPEED; totalSpeedProps++};
					return totalSpeedProps ? new Motion(shape, speed, metronome) : 0
				})();
				if(motion) motion.play();
			}	
		
		//Start wave swing
			if(USE_WAVE_SWING)
			{
				for(var i = 1; i < 4; i++)
				{
					var swingSettings = settings["WAVE_" + i + "_SWING_SETTINGS"];
					if(swingSettings)
					{
						for(var propName in swingSettings)
					    {
					   		var shortenedPropName = wavePropShortenings[propName];
					   		if(shortenedPropName)
					   		{
					   			var swing = new Swing(shape, shortenedPropName + i, swingSettings[propName], metronome)
								swing.play();
					   		}			   		
					    }
					}
				}				
			}	
		
		metronome.addListener(update);
		if(MOUSE_SENSITIVITY) document.addEventListener("mousemove", onInitMove)		
	}

//Create a repository for BlobAnimation instances
	BlobAnimation.instances = {};
	
//Set global variable 'BlobAnimation'
	window.BlobAnimation = BlobAnimation 
	// if(!window.hasOwnProperty('BlobAnimation')) window.BlobAnimation = BlobAnimation 
	// else alert('Unable to load "blob.js". Make sure that the document does not contain a global variable with the name "BlobAnimation"');
	
})();





