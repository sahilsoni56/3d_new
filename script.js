const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
gsap.from("#visit",{
    y:100,
    opacity:0,
    duration:1.5,
    stagger:2,
})
gsap.from("#nav a",{
    y:15,
    opacity:0,
    
    stagger:0.3,
})

Shery.textAnimate("#headings h1", {
  style: 2,
  y: 10,
  duration: 1,
  delay:0.2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
});

Shery.imageEffect("#imgntext img", {
  style: 3, //Select Style
  config: {
    uFrequencyX: { value: 15.27, range: [0, 100] },
    uFrequencyY: { value: 16.79, range: [0, 100] },
    uFrequencyZ: { value: 21.37, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 19.27 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.75 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.37, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});
Shery.imageEffect(".imgff img", {
  style: 5,
  config: {
    uFrequencyX: { value: 28.24, range: [0, 100] },
    uFrequencyY: { value: 40.46, range: [0, 100] },
    uFrequencyZ: { value: 5.34, range: [0, 100] },
    geoVertex: { range: [1, 64], value: 15.91 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 0.8571261777024443 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: false },
    infiniteGooey: { value: false },
    growSize: { value: 4, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: true },
    maskVal: { value: 1.34, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2] },
    discard_threshold: { value: 0.5, range: [0, 1] },
    antialias_threshold: { value: 0.002, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
  preset: "./presets/wigglewobble.json",
});

gsap.from("#imgntext img", {
  y: "+=100",
  opacity: 0,
  duration: 2,
  ease: Expo.ease,
});

Shery.imageEffect("#bimg", {
  style: 5,
  gooey: true,
  config: {
    a: { value: 2, range: [0, 30] },
    b: { value: -0.95, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.0964644173546696 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 3.56, range: [1, 15] },
    durationOut: { value: 0.55, range: [0.1, 5] },
    durationIn: { value: 0.96, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.92, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 25 } },
    discard_threshold: { value: 0.6, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.5, range: [0, 2] },
    noise_scale: { value: 10, range: [0, 100] },
  },
});

document.querySelector("#ftext button").addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1.5,
        ease: Power4
    })
})

document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        ease: Power4
    })
})

