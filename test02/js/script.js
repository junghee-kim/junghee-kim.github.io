(function () {

  var controller = new ScrollMagic.Controller({
		globalSceneOptions: {triggerHook: "onEnter"}
	});
	
	
	new ScrollMagic
		.Scene({triggerElement: "#parallax1", duration: "200%"})
		.setTween("#parallax1 > div", {y: "40%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);
	
	new ScrollMagic
		.Scene({triggerElement: "#parallax2", duration: "175%"})
		.setTween("#parallax2 > div", {y: "30%", ease: Linear.easeNone})
		.addIndicators()
		.addTo(controller);

	
	
}())