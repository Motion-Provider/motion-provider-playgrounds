### Motion Playground

Motion Provider Engine Manual Test #001

---

## Motion Controller Setup Test

```ts
{

/**
@mode represents an array contains the animations that will be used inside the motion provider component
@param: AnimationKeys | AnimationKeys[]
*/
"mode": [
"scaleZoomIn",
"fadeIn",
"slideLeft"
],
"transition": "cubicBounce",
"duration": 2.5,
"delayLogic": "linear",
"controller": {
"configView": {
"amount": 0.5,
"once": false
},

"isAnimationStopped": false,
"reverse": false,
"trigger": true
}
}
```

---
