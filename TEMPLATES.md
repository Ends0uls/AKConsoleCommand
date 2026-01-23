# Arkham Knight Command Console - Templates & Customization Guide

This document contains templates and guides for customizing the Arkham Knight Command Console website.

---

## Table of Contents

1. [Command Structure Overview](#command-structure-overview)
2. [Command Types](#command-types)
   - [Simple Commands](#1-simple-command)
   - [Toggle Commands](#2-toggle-command)
   - [Number/Slider Commands](#3-numberslider-command)
   - [Color Commands](#4-color-command)
3. [Adding New Categories](#adding-a-new-category)
4. [Adding New Subcategories](#adding-a-new-subcategory)
5. [Video Field Usage](#video-field-usage)
6. [Color Presets](#color-presets)
7. [CSS Customization](#css-customization)
8. [Header Icon Customization](#header-icon-customization)
9. [Tips & Best Practices](#tips--best-practices)

---

## Command Structure Overview

Commands are organized in a hierarchical structure:

```
Category (e.g., "Batmobile", "Character")
└── Subcategory (e.g., "Cosmetic", "Cheat")
    └── Commands Array
        ├── Command 1
        ├── Command 2
        └── Command 3
```

### Basic Structure in Code

```javascript
const commandData = {
    "Category Name": {
        "Subcategory Name": [
            { command object },
            { command object },
        ],
        "Another Subcategory": [
            { command object },
        ]
    },
    "Another Category": {
        // ...
    }
};
```

---

## Command Types

### 1. Simple Command

Use for commands with no parameters - just copy and paste.

```javascript
{
    name: "Command Display Name",
    cmd: "the actual command text here",
    type: "simple",
    desc: "Optional description shown below the name",      // OPTIONAL
    info: "Optional tooltip info shown on hover (?)",       // OPTIONAL
    video: "videos/my-video.mp4"                            // OPTIONAL
}
```

**Examples:**

```javascript
// Minimal
{ name: "Toggle HUD", cmd: "ToggleHUD", type: "simple" }

// With description
{ name: "Exit Game", cmd: "Exit", type: "simple", desc: "Closes to desktop" }

// With tooltip info
{ 
    name: "Toggle Debug Camera", 
    cmd: "toggledebugcamera", 
    type: "simple", 
    info: "Breaks out of locked camera in cutscenes. Useful for photo mode." 
}

// With video
{ 
    name: "Players Only Mode", 
    cmd: "Playersonly", 
    type: "simple", 
    info: "Freezes all NPCs",
    video: "videos/players-only.mp4" 
}
```

---

### 2. Toggle Command

Use for ON/OFF switches that change between two values.

```javascript
{
    name: "Command Display Name",
    cmd: "the command without the value",
    type: "toggle",
    onValue: "value when ON",
    offValue: "value when OFF",
    defaultState: true,                    // true = starts ON, false = starts OFF
    desc: "Optional description",          // OPTIONAL
    info: "Optional tooltip info",         // OPTIONAL
    video: "videos/my-video.mp4"           // OPTIONAL
}
```

**Examples:**

```javascript
// Normal true/false toggle
{ 
    name: "God Mode", 
    cmd: "set engine.playercontroller bgodmode", 
    type: "toggle", 
    onValue: "true", 
    offValue: "false", 
    defaultState: true 
}

// Reversed logic (where 0 means ON)
{ 
    name: "Keep Batmobile lights on", 
    cmd: "set RVehicle HeadlightsSwitchedOn", 
    type: "toggle", 
    onValue: "0",      // 0 keeps them on
    offValue: "1",     // 1 turns them off
    defaultState: true 
}

// With 1/0 values
{ 
    name: "Disable jump camera", 
    cmd: "set BmGame.RVehicleBatmobileBase DisableJumpCamera", 
    type: "toggle", 
    onValue: "1", 
    offValue: "0", 
    defaultState: true 
}

// With description and info
{ 
    name: "Drive with cockpit door open", 
    cmd: "set BmGame.RSpecialMoveInstance_DriveCar CockpitOpen", 
    type: "toggle", 
    onValue: "false", 
    offValue: "true", 
    defaultState: true,
    desc: "Must use before getting in the Batmobile",
    info: "The cockpit door will stay open while driving"
}
```

---

### 3. Number/Slider Command

Use for adjustable numeric values with a slider, input box, and +/- buttons.

```javascript
{
    name: "Command Display Name",
    cmd: "command with {value} placeholder",
    type: "number",
    param: "value",                         // Always "value" for the placeholder
    default: 1.0,                           // Default/starting value (also reset value)
    min: 0,                                 // Minimum allowed value
    max: 100,                               // Maximum allowed value
    step: 1,                                // Increment/decrement step size
    desc: "Optional description",           // OPTIONAL
    info: "Optional tooltip info",          // OPTIONAL
    video: "videos/my-video.mp4"            // OPTIONAL
}
```

**Examples:**

```javascript
// Decimal values
{ 
    name: "Movement Speed", 
    cmd: "set rpawnplayer DesiredMovementScale {value}", 
    type: "number", 
    param: "value", 
    default: 1.0, 
    min: 0.1, 
    max: 50, 
    step: 0.5 
}

// Large integer values
{ 
    name: "Infinite Disruptor Ammo", 
    cmd: "Set RDisruptorSniper iAntiEquipmentMaximumAmmo {value}", 
    type: "number", 
    param: "value", 
    default: 999999999, 
    min: 1, 
    max: 999999999, 
    step: 1000 
}

// Negative values (like gravity)
{ 
    name: "Gravity", 
    cmd: "set engine.worldinfo worldgravityz {value}", 
    type: "number", 
    param: "value", 
    default: -1000,    // Game's default gravity
    min: -2000, 
    max: 500,          // Positive = reverse gravity
    step: 50,
    info: "Default is -1000. Use 99 for no gravity, 0 for very low gravity."
}

// FOV with info
{ 
    name: "Set FOV", 
    cmd: "FOV {value}", 
    type: "number", 
    param: "value", 
    default: 90, 
    min: 60, 
    max: 150, 
    step: 5, 
    info: "Recommended: 80-120. Use 0 to reset. Batmobile crosshair will be misaligned." 
}
```

---

### 4. Color Command

Use for RGB color pickers with gradient selector, hue slider, and presets.

```javascript
{
    name: "Command Display Name",
    cmd: "command with {r}, {g}, {b} placeholders",
    type: "color",
    defaultColor: { r: 100, g: 0, b: 99 },
    desc: "Optional description",           // OPTIONAL
    info: "Optional tooltip info",          // OPTIONAL
    video: "videos/my-video.mp4"            // OPTIONAL
}
```

> **Note:** `{r}`, `{g}`, `{b}` will be replaced with "value.000000" format (e.g., "100.000000")

**Examples:**

```javascript
// Batmobile forensic light
{ 
    name: "Forensic Light Color", 
    cmd: "set RVehicleBatmobile ColourLevels ((R={r},G={g},B={b},A=999.000000))", 
    type: "color", 
    defaultColor: { r: 100, g: 0, b: 99 } 
}

// Snow color
{ 
    name: "Snow Color", 
    cmd: "Set SnowMapComponent SnowGroundColor (R={r},G={g},B={b},A=1.000000)", 
    type: "color", 
    defaultColor: { r: 1, g: 1, b: 1 },
    info: "Requires reloading the game save to take effect."
}
```

---

## Adding a New Category

Add a new key to the `commandData` object in `script.js`:

```javascript
const commandData = {
    // ... existing categories ...
    
    "My New Category": {
        "Subcategory 1": [
            { name: "Command 1", cmd: "...", type: "simple" },
            { 
                name: "Command 2", 
                cmd: "...", 
                type: "toggle", 
                onValue: "true", 
                offValue: "false", 
                defaultState: true 
            },
        ],
        "Subcategory 2": [
            { 
                name: "Command 3", 
                cmd: "... {value}", 
                type: "number", 
                param: "value", 
                default: 1, 
                min: 0, 
                max: 10, 
                step: 1 
            },
        ]
    }
};
```

---

## Adding a New Subcategory

Add a new key inside an existing category:

```javascript
"Batmobile": {
    "Cosmetic": [ /* existing commands */ ],
    "Cheat": [ /* existing commands */ ],
    "My New Subcategory": [
        { name: "New Command", cmd: "...", type: "simple" },
        { name: "Another Command", cmd: "...", type: "simple" },
    ]
}
```

---

## Video Field Usage

To add a video demo to any command, add the `video` property:

```javascript
{ 
    name: "God Mode", 
    cmd: "set engine.playercontroller bgodmode", 
    type: "toggle", 
    onValue: "true", 
    offValue: "false", 
    defaultState: true,
    video: "videos/god-mode-demo.mp4"    // Path to your .mp4 file
}
```

### Video Setup

1. Create a `videos` folder next to `index.html`
2. Place your `.mp4` files in the folder
3. Add the `video` property with the path

### Notes

- Supported format: `.mp4` (recommended for web)
- The video button will turn **green** when a video is available
- Without a `video` field, clicking shows "Work In Progress"

---

## Color Presets

To add or modify color presets, edit the `colorPresets` array in `script.js`:

```javascript
const colorPresets = [
    { name: "Magenta", r: 100, g: 0, b: 99 },
    { name: "Purple", r: 99, g: 0, b: 255 },
    { name: "Red", r: 255, g: 0, b: 0 },
    { name: "Bright Red", r: 255, g: 50, b: 11 },
    { name: "Blue", r: 0, g: 0, b: 255 },
    { name: "Light Blue", r: 100, g: 150, b: 255 },
    { name: "White", r: 255, g: 255, b: 255 },
    { name: "Yellow", r: 255, g: 255, b: 0 },
    { name: "Green", r: 0, g: 255, b: 0 },
    { name: "Pink", r: 255, g: 105, b: 180 },
    { name: "Black", r: 10, g: 10, b: 10 },
    { name: "Cyan", r: 0, g: 255, b: 255 }
];
```

---

## CSS Customization

### Main Colors Used

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary (Amber/Gold) | `#fbbf24`, `#f59e0b` | Main accent color |
| Secondary (Blue) | `#3b82f6`, `#60a5fa` | Info tooltips, accessibility |
| Background Dark | `#0a0a0f`, `#1a1a2e` | Page background |
| Text Light | `#e5e7eb` | Main text |
| Text Muted | `#9ca3af`, `#6b7280` | Secondary text |
| Success (Green) | `#22c55e`, `#16a34a` | Copy success, video available |
| Error (Red) | `#ef4444` | Clear, close buttons |
| Purple (Video) | `#a78bfa`, `#8b5cf6` | Video button |

### Changing the Color Scheme

1. Replace `#fbbf24` (amber-400) with your primary color
2. Replace `#f59e0b` (amber-500) with your primary dark color
3. Search and replace `rgba(251, 191, 36, ...)` with your color's RGB values

### Fonts Used

| Font | Usage |
|------|-------|
| `Orbitron` | Headings, tech elements |
| `Inter` | Body text |

To change fonts:
1. Update the Google Fonts link in `index.html`
2. Update `.font-orbitron` class in `styles.css`
3. Update `font-family` in the body style

---

## Header Icon Customization

### Recommended Sizes

| Size | Class | Pixels |
|------|-------|--------|
| Small | `w-10 h-10` | 40x40px |
| Medium (default) | `w-12 h-12` | 48x48px |
| Large | `w-16 h-16` | 64x64px |
| Custom | `w-[64px] h-[64px]` | Any size |

### Using an Image File

Replace the SVG in `index.html` with an `<img>` tag:

```html
<img src="your-icon.png" class="w-12 h-12 bat-logo" alt="Logo">
```

### Using a Different SVG

Replace the entire `<svg>...</svg>` block with your own SVG code.

### Changing Size

Change `w-12 h-12` to:
- `w-10 h-10` for smaller
- `w-16 h-16` for larger
- `w-[64px] h-[64px]` for custom pixel size

### Removing the Glow Animation

Remove the `bat-logo` class from the element.

### Full Example with Custom Image

```html
<img src="images/my-batman-logo.png" class="w-16 h-16 bat-logo" alt="Arkham Knight Logo">
```

---

## Tips & Best Practices

1. **Always use quotes** around property names with spaces: `"My Category"`

2. **Don't forget commas** between commands and properties

3. **Test your JSON syntax** - a missing comma breaks everything

4. **Use the `info` field** for explaining complex commands

5. **Use `desc`** for short notes shown directly on the card

6. **For toggle commands**, think about what "ON" means to the user (sometimes the game uses reversed logic like 0=enabled)

7. **Default values** for number commands should be the game's default, so the reset button works correctly

8. **Video files** should be short (under 30 seconds) and compressed for web

9. **Test on mobile** - the site is responsive but complex commands may need scrolling

10. **Back up your `script.js`** before making major changes

---

## Quick Reference

### Command Type Summary

| Type | Use Case | Required Fields |
|------|----------|-----------------|
| `simple` | Basic copy/paste | `name`, `cmd`, `type` |
| `toggle` | ON/OFF switch | `name`, `cmd`, `type`, `onValue`, `offValue`, `defaultState` |
| `number` | Adjustable value | `name`, `cmd`, `type`, `param`, `default`, `min`, `max`, `step` |
| `color` | RGB color picker | `name`, `cmd`, `type`, `defaultColor` |

### Optional Fields (All Types)

| Field | Description |
|-------|-------------|
| `desc` | Short description shown on card |
| `info` | Tooltip info (hover on ?) |
| `video` | Path to demo video |

---

## Need Help?

If you're having issues:

1. Check the browser console (F12) for JavaScript errors
2. Validate your JSON syntax
3. Make sure all required fields are present
4. Check that quotes and commas are correct
