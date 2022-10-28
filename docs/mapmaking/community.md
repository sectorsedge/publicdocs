---
title: "Community Guides"
---

# COMMUNITY GUIDES

We share here guides that the community has created if you would like to to get involved and discuss Map Making with others, please join our [Discord Server](https://discord.gg/sJA3cs4DEV)

## WORLD PAINTER

What you will need:
- World Painter - https://www.worldpainter.net/
- MagicaVoxel (Of course 😉 )
- Place the below height.txt in your shader folder

How you do it:
- Build world in world builder
- Export as PNG
- open in paint, save as PNG (Yes even though it was exported as a PNG)
- Change color pallet to grayscale (Very important)
- Drag your saved PNG into MV
- Select the object and change Height to 256
- Select the console at the bottom and type xs height

height.txt shader
```c
// console commands
// 'xs height'

// shader inputs
// uniform vec3 	iVolumeSize;	// volume size [1-126]
// uniform float	iColorIndex;	// current color index [1-255]
// uniform vec3		iMirror;	// current mirror mode [0-1]
// uniform vec3		iAxis;		// current axis mode [0-1]

// uniform float	iFrame;		// current anim frame index
// uniform float 	iNumFrames;	// total num of anim frames

// uniform float 	iIter;		// current iteration index

// uniform vec4		iRand;		// random number
// uniform float	iArgs[8];	// user args

// built-in functions
// float voxel( vec3 v );		// get voxel color index at position v

// generate new voxel color index at position v
float map( vec3 v ) {
	float height = 255.0 - voxel( vec3( v.xy, 0.0 ) ); //depends on palette

	height = height * 0.5f - 1.0; // map to range [0 - 126]

	return ( v.z <= height ? iColorIndex : 0.0 );
}
```

Guide created by `Vhauss`

## MAP MAKING

`Caspooky` and `Realkill` have created a guide for [Map Making](/MapMaking.pdf)