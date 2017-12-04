export 
function animateDots() {
	$('<div></div>').attr('id', 'container').appendTo($('#teste'));
	$('<img src="' + require('../images/foto-desktop.jpg') +'">').attr('id', 'img').css({ 'z-index': '-1' ,'width': '1920px', 'height': '1330px','position': 'absolute','top': '-600px', 'left': '-150px'}).appendTo('#teste');

	const $container = $("#container");

	for (var i = 0; i < 28; i++) {
		$container.append($('<div></div>').addClass('dot').attr('id', 'dot'+i).css({ 'z-index': '-1', 'width': '226px','height': '295px', 'background-image': 'url('+ require('../images/icone_Sat.png') +')'}));
	}

	var dot = { 
			a: $('#dot0'),
			b: $('#dot1'),
			c: $('#dot2'),
			d: $('#dot3'),
			e: $('#dot4'),
			f: $('#dot5'),
			g: $('#dot6'),
			r: $('#dot7'), //dot r 
			h: $('#dot8'),
			i: $('#dot9'),
			j: $('#dot10'),
			k: $('#dot11'),
			l: $('#dot12'),
			m: $('#dot13'),
			n: $('#dot14'),
			o: $('#dot15'),
			p: $('#dot16'),
			q: $('#dot17'),
			s: $('#dot18'),
			t: $('#dot19'),
			u: $('#dot20'),
			v: $('#dot21'),
			w: $('#dot22'),
			x: $('#dot23'),
			y: $('#dot24'),
			z: $('#dot25'),
			aa: $('#dot26'),
			ab: $('#dot27')
		}
	
	$container.css({'position': 'absolute', 'top': '-560px', 'z-index': '1', 'left': '-150px'});
	
	const sequence1 = [
		///////////////////////////////////////////Dots with animation////////////////////////////////////////////////
		//Begin of dot0
		{ e: dot.a, p: { translateX: 75, translateY: 586 }, o: { duration: 0, begin: () => {
			 dot.a.velocity({ translateX: 45, translateY: 1090 }, { duration: 0 });
		} } },
		//Begin of dot1
		{ e: dot.b, p: { translateX: 125, translateY: 496 }, o: { duration: 0, begin: () => {
			 dot.b.velocity({ translateX: -100, translateY: 340 }, { duration: 0 });
		} } },
		//Begin of dot2
		{ e: dot.c, p: { translateX: 33, translateY: -33 }, o: { duration: 0, begin: () => {
			 dot.c.velocity({ translateX: 810, translateY: 500 }, { duration: 0 });
		} } },
		// Begin of dot3
		{ e: dot.d, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.d.velocity({ translateX: 50, translateY: 210 }, { duration: 0 });
		} } },
		// Begin of dot4
		{ e: dot.e, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.e.velocity({ translateX: -100, translateY: -550 }, { duration: 0 });
		} } },
		// Begin of dot17
		{ e: dot.r, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.r.velocity({ translateX: 1380, translateY: -970 }, { duration: 0 });
		} } },
		// Begin of dot18
		{ e: dot.s, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.s.velocity({ translateX: 950, translateY: -4910 }, { duration: 0 });
		} } },
		// Begin of dot20
		{ e: dot.u, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.u.velocity({ translateX: 1020, translateY: -5560 }, { duration: 0 });
		} } },
		// Begin of dot21
		{ e: dot.v, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.v.velocity({ translateX: 15, translateY: -5400 }, { duration: 0 });
		} } },
		// Begin of dot22
		{ e: dot.w, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.w.velocity({ translateX: 30, translateY: -5690 }, { duration: 0 });
		} } },
		// Begin of dot23
		{ e: dot.x, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.x.velocity({ translateX: 1800, translateY: -5970 }, { duration: 0 });
		} } },
		// Begin of dot24
		{ e: dot.y, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.y.velocity({ translateX: 1740, translateY: -6800 }, { duration: 0 });
		} } },
		// Begin of dot25
		{ e: dot.z, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.z.velocity({ translateX: 400, translateY: -6850 }, { duration: 0 });
		} } },
		// Begin of dot26
		{ e: dot.aa, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.aa.velocity({ translateX: 282, translateY: -7100 }, { duration: 0 });
		} } },
		// Begin of dot27
		{ e: dot.ab, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			dot.ab.velocity({ translateX: 580, translateY: -7300 }, { duration: 0, complete: () => {
				runAnimation(sequence1);
			}
		});
		} } },

		///////////////////////////////////////////Dots statics////////////////////////////////////////////////

		// Begin of dot5
		{ e: dot.f, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.f.velocity({ translateX: 1200, translateY: -1250 }, { duration: 0 });
		} } },
		// Begin of dot6
		{ e: dot.g, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.g.velocity({ translateX: 1300, translateY: -1650 }, { duration: 0 });
		} } },
		// Begin of dot8
		{ e: dot.h, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.h.velocity({ translateX: 900, translateY: -1850 }, { duration: 0 });
		} } },
		// Begin of dot9
		{ e: dot.i, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.i.velocity({ translateX: 600, translateY: -2350 }, { duration: 0 });
		} } },
		// Begin of dot10
		{ e: dot.j, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.j.velocity({ translateX: 200, translateY: -2750 }, { duration: 0 });
		} } },
		// Begin of dot11
		{ e: dot.k, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.k.velocity({ translateX: 800, translateY: -3150 }, { duration: 0 });
		} } },
		// Begin of dot12
		{ e: dot.l, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.l.velocity({ translateX: 480, translateY: -3335 }, { duration: 0 });
		} } },
		// Begin of dot13
		{ e: dot.m, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.m.velocity({ translateX: 25, translateY: -3670 }, { duration: 0 });
		} } },
		// Begin of dot14
		{ e: dot.n, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.n.velocity({ translateX: -50, translateY: -3870 }, { duration: 0 });
		} } },
		// Begin of dot15
		{ e: dot.o, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.o.velocity({ translateX: 1170, translateY: -3350 }, { duration: 0 });
		} } },
		// Begin of dot16
		{ e: dot.p, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			 dot.p.velocity({ translateX: 1730, translateY: -3970 }, { duration: 0 });
		} } },

		////////dot17, dot18, dot20, dot21, dot22, dot23, dot24, dot25, dot26, dot27 is between dot4 and dot5////////

		// Begin of dot19
		{ e: dot.t, p:{ translateX: 20, translateY: -20 }, o: { duration: 0, begin: () => {
			dot.t.velocity({ translateX: 1430, translateY: -5070 }, { duration: 0 });
		} } }
	]
	const sequence2 = [
		{ e: dot.a, p: { translateX: 920, translateY: 430 },    o: { duration: 20000, sequenceQueue: false } },
		{ e: dot.b, p: { translateX: -50, translateY: 448 },    o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.c, p: { translateX: 1100, translateY: 310 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 390, translateY: -50 },    o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.e, p: { translateX: -50, translateY: -430 },   o: { duration: 10000 } },
		{ e: dot.r, p: { translateX: 1590, translateY: -1150 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.s, p: { translateX: 780, translateY: -4790 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.u, p: { translateX: 800, translateY: -5400 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.v, p: { translateX: 265, translateY: -5315 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.w, p: { translateX: 280, translateY: -5630 },  o: { duration: 10000 } },
		{ e: dot.x, p: { translateX: 1650, translateY: -5900 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 1750, translateY: -6710 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.z, p: { translateX: 350, translateY: -6720 },  o: { duration: 5000, sequenceQueue: false  } },
		{ e: dot.aa, p: { translateX: 205, translateY: -7010 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.ab, p: { translateX: 348, translateY: -7120 }, o: { duration: 10000, sequenceQueue: false, complete: () => {
			runAnimation(sequence2);
		} } },
		
	]
	const sequence3 = [
		{ e: dot.a, p: { translateX: 1470, translateY: 700 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.b, p: { translateX: -200, translateY: 520 },   o: { duration: 10000, visibility: "hidden", sequenceQueue: false  } },
		{ e: dot.c, p: { translateX: 1750, translateY: 20 },    o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 600, translateY: 10 },     o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.e, p: { translateX: 150, translateY: -500 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.r, p: { translateX: 1720, translateY: -1090 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.s, p: { translateX: 1000, translateY: -4650 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.u, p: { translateX: 400, translateY: -5100 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.v, p: { translateX: 270, translateY: -5290 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.w, p: { translateX: 460, translateY: -5720 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.x, p: { translateX: 1500, translateY: -5800 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 1750, translateY: -6610 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.z, p: { translateX: 200, translateY: -6620 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.aa, p: { translateX: 25, translateY: -6940 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.ab, p: { translateX: 180, translateY: -7120 }, o: { duration: 10000, sequenceQueue: false } },
	]
	const sequence4 = [
		{ e: dot.a, p: { translateX: 1040, translateY: 900 },    o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.c, p: { translateX: 1770, translateY: -200 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 1000, translateY: -140 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.r, p: { translateX: 1820, translateY: -980 },   o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.u, p: { translateX: 150, translateY: -4900 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.v, p: { translateX: -50, translateY: -5040 },   o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.w, p: { translateX: 590, translateY: -5820 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.x, p: { translateX: 1300, translateY: -5600 },  o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 1740, translateY: -6510 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.z, p: { translateX: 80, translateY: -6570 },    o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.aa, p: { translateX: -130, translateY: -6895 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.ab, p: { translateX: 20, translateY: -7175 },   o: { duration: 10000, sequenceQueue: false } },
	]
	const sequence5 = [
		{ e: dot.a, p: { translateX: 800, translateY: 1040 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.c, p: { translateX: 1740, translateY: -300 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 1300, translateY: -250 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.u, p: { translateX: -90, translateY: -4740 },  o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.w, p: { translateX: 830, translateY: -6000 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 1635, translateY: -6420 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.z, p: { translateX: 30, translateY: -6590 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.ab, p: { translateX: 25, translateY: -7223 },  o: { duration: 10000, sequenceQueue: false } }
	]
	const sequence6 = [
		{ e: dot.a, p: { translateX: 680, translateY: 1155 },   o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.c, p: { translateX: 1830, translateY: -350 },  o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 1150, translateY: -350 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.w, p: { translateX: 1100, translateY: -6200 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 1335, translateY: -6320 }, o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.z, p: { translateX: 22, translateY: -6630 },   o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.ab, p: { translateX: -75, translateY: -7203 }, o: { duration: 10000, sequenceQueue: false } }
	]
	const sequence7 = [
		{ e: dot.a, p: { translateX: 0, translateY: 0 }, o: { duration: 0, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 930, translateY: -460 },    o: { duration: 10000 } },
		{ e: dot.y, p: { translateX: 925, translateY: -6120 },   o: { duration: 10000 } },
		{ e: dot.z, p: { translateX: -32, translateY: -6635 },   o: { duration: 10000 } },
		{ e: dot.ab, p: { translateX: -157, translateY: -7188 }, o: { duration: 10000, complete: () => {
			runAnimation(sequences);
		} } }
	]
	const sequence8 = [
		{ e: dot.a, p: { translateX: 0, translateY: 0 }, o: { duration: 0, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.d, p: { translateX: 530, translateY: -180 },  o: { duration: 10000, sequenceQueue: false } },
		{ e: dot.y, p: { translateX: 645, translateY: -5880 }, o: { duration: 10000, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.z, p: { translateX: -140, translateY: -6755}, o: { duration: 10000, sequenceQueue: false } }
	]
	const sequence9 = [
		{ e: dot.a, p: { translateX: 0, translateY: 0 }, o: { duration: 0, visibility: "hidden", sequenceQueue: false } },
		{ e: dot.d, p: { translateX: -200, translateY: 400 }, o: { duration: 10000, sequenceQueue: false } } 
	]

	const sequences = [
		sequence1,
		sequence2,
		sequence3,
		sequence3,
		sequence4,
		sequence5,
		sequence6,
		sequence7,
		sequence8,
		sequence9,
	];
	
	function runAnimation(sequences) {
		if (Array.isArray(sequences)) {
			sequences.forEach(sequence => {
				$.Velocity.RunSequence(sequence);
			});
		}
	}
	runAnimation(sequences);
	return;
}
