---
title: "Getting Started"
---

# GETTING STARTED

## REQUIREMENTS

The first step is to download the voxel editor [Magicavoxel](https://ephtracy.github.io/). That's it!

## Preparing maps

The corner of your map must be aligned with the center of the grid in MagicaVoxel, with the green arrow pointing upwards and the red arrow pointing to the right:

<img src="/alignment.png" alt="MagicaVoxel Alignment"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>Top-down view of a map</span>
</div>

## Testing maps

To view a map in-game, go to the `Play > Mapping` tab and click on the folder icon. This will open the workshop folder.

Create a new folder and give it a name, then place your `.vox` file in it.

Maps must also have an accompanying `.json` file, which contains metadata for textures, lights, spawn regions, etc. This file is [avaialble here](https://google.com)


<img src="/folderbutton.png" alt="In-game workshop folder icon"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>In-game workshop folder icon</span>
</div>


If there are any errors or missing fields in your `json` metadata file, they will appear in game on the map list. Clicking the refresh icon will cause all files to be reloaded and the error list will update.

<img src="/errors.png" alt="JSON errors"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>JSON errors</span>
</div>


## Uploading maps

To upload a map folder to the workshop, it must have a `.json`, `.vox` and `preview.jpg` file. The `preview.jpg` file should be a screenshot you've taken of your map.

<div style="justify-content: center; display: flex;">
    <img src="/folderexample.png" alt="Map folder example"/>
</div>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>Map folder example</span>
</div>

When you have these files ready, the **upload** button will light up. Select a visibility (private, friends only, public) and then click the upload button.

<img src="/uploadbutton.png" alt="Upload button"/>
<div style="justify-content: center; display: flex; margin-top:10px; font-size: 13px; margin-bottom: 40px">
    <span>Upload button</span>
</div>

Note that each map file can be changed after your map is uploaded to the workshop. To re-upload your map, simply click the upload button again.

## Create your first map

Download these template files and place them in the `/workshop/maps/myFirstMap` folder:

* [map_template.vox](/map_template.vox)
* [map_template.json](/map_template.json)