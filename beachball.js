"use strict";

import { gsap } from "gsap";
/** 
gsap.to(".ball", { duration: 2, x: 400, rotate: 200 });
gsap.to(".ball", { delay: 2, scaleY: 0, yPercent: 50 });
*/

const timeline = gsap.timeline();
timeline.to(".ball", { duration: 2, x: 400, rotate: 200 });
timeline.to(".ball", { scaleY: 0.1, yPercent: 50 });
timeline.to(".ball", { scaleY: 0.1, x: 1000, y: -600 });
