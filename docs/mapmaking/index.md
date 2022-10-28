---
title: "Getting Started"
---

# GETTING STARTED

## STEAM WORKSHOP

Sector's Edge is now integrated with the [Steam Workshop](https://steamcommunity.com/app/1024890/workshop/)! Players can create and upload maps to the Workshop for other players to view, and public Workshop maps can be accessed by official game servers.

Sector's Edge currently only supports `.vox` files created with [MagicaVoxel](https://ephtracy.github.io/). The program is quite easy to learn, but it takes a lot of time and patience to create a map.

Maps must also have an accompanying `.json` file, which contains metadata for textures, lights, spawn regions, etc.

## PREPARING MAPS

Once you have created a map and wish to view it in-game, you must place it in the `workshop/maps/MAP_NAME` (Create a folder with your map name) folder in your Steam directory. If you are unable to locate this directory, run Sector's Edge, go to the `Customise > Mapping` tab and click on the folder icon.

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/workshopfolder.png" alt="Steam Workshop Folder" width="100"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>WORKSHOP DIRECTORY ICON</span>
</div>

The game will then search for a `.json` file with the same name. For example, if your map is called `caspooky.vox`, it will search for a matching `caspooky.json` file.

The corner of your map must be aligned with the center of the grid in MagicaVoxel, with the green arrow pointing upwards and the red arrow pointing to the right:

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/magicavoxelalignment.png" alt="MagicaVoxel Alignment" width="450"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>MAP ALIGNMENT IN MAGICAVOXEL</span>
</div>

A `preview.jpg` file is also required to upload a map to the Workshop. This is not required to test a map locally.

If there are any errors or missing fields in your `json` metadata file, they will appear in game on the map list. Clicking the refresh icon will cause all files to be reloaded and the error list will update.

## UPLOADING MAPS

Workshop map submissions require these three files. Note that your map may not be called 'caspooky' and the image file must be named `preview.jpg`.

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/workshopexample.png" alt="Workshop Example" width="600"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>WORKSHOP DIRECTORY EXAMPLE</span>
</div>

When you have these files ready, refresh the local map list in-game and the outline should turn green:

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/workshopuploadready.png" alt="Workshop Example" width="600"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>VALID WORKSHOP SUBMISSION</span>
</div>

Click the upload button on the far-right of the map box and you will be presented with an upload summary.

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/workshopupload.png" alt="Workshop Example" width="100"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>WORKSHOP UPLOAD ICON</span>
</div>

The upload summary displays the map name, description and the game modes that the map supports (as defined in the JSON file, more details are in the sections below). Note that all fields and map metadata can be changed after your map is uploaded to the workshop. When you are ready to submit your map, click the upload button at the bottom of the screen.

<div style="justify-content: center; display: flex; margin-top: 40px;">
    <img src="/workshopuploadsummary.png" alt="Workshop Example" width="600"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>WORKSHOP UPLOAD SUMMARY</span>
</div>

## CREATE YOUR FIRST MAP

Special thank you to `@TotallyPorff [She/Her]` and `@PadreToto` for creating these assets!

Please download the [Map_Template.vox](/Map_Template.vox) template.

Map_Template.json
```json
{
	//BASIC DETAILS
	"Name": "Template Json",
	"Description": "A template json file",

	"MapSize": [256, 128, 768],
	"WorldEdgeIndex": 1,
	"WaterLevel": 0,
	
	//TEXTURES
	"BlockTextures": [
		{
			"Note": "Test",
			"Index": 9
		}
	],

	//GAMEMODE DETAILS
	"TeamSpawns": [
		{
			"Gamemode": "all",
			"Type": "box",
			"Team": 0,
			"Min": [0, 0, 0],
			"Max": [256, 90, 100]
		},
		{
			"Gamemode": "all",
			"Type": "box",
			"Team": 1,
			"Min": [0, 0, 668],
			"Max": [256, 90, 768]
		}
	],

	//CAMERA DETAILS
	"MapPreviewCameras": [
		{
		}
	]
}
```
Save this into a file called Map_Template.json

Using the instructions in the previous sections above please use these assets to create your first map within Sector's Edge

Continue reading to learn more about map making