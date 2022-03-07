(function () {

  var controller = new ScrollMagic.Controller();
 	var wipeAnimation = new TimelineMax()
	// animate to 2
	.to("#slideContainer", 1, {z: -180} )
	.to("#slideContainer", 1, {x:"-10%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 3
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-20%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 4
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-30%"} )
	.to("#slideContainer", 1, {z: 0} )

  // animate to 5
	.to("#slideContainer", 1, {z: -180} )
	.to("#slideContainer", 1, {x:"-40%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 6
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-50%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 7
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-60%"} )
	.to("#slideContainer", 1, {z: 0} )

  // animate to 8
	.to("#slideContainer", 1, {z: -180} )
	.to("#slideContainer", 1, {x:"-70%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 9
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-80%"} )
	.to("#slideContainer", 1, {z: 0} )
	// animate to 10
	.to("#slideContainer", 1, {z: -180, delay: 1} )
	.to("#slideContainer", 1, {x:"-90%"} )
	.to("#slideContainer", 1, {z: 0} )


	var scene = new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "1000%"
	})
	.setPin("#pinContainer")
	.setTween(wipeAnimation)


	.addTo(controller);



}())
