// Arkham Knight Command Console - JavaScript

/*
 * For templates and documentation on how to add new commands,
 * see TEMPLATES.md in this project folder.
 */

const commandData = {
    "Batmobile": {
        "Cosmetic": [
            /* 
             * VIDEO FIELD EXAMPLE:
             * To add a video demo, add a "video" property with the path to your .mp4 file:
             * video: "videos/cockpit-door-open.mp4"
             * 
             * The video button will turn green when a video is available.
             * Leave the video field empty or remove it to show "Work In Progress"
             */
            { name: "Drive with cockpit door open", desc: "Must use before getting in the Batmobile", cmd: "set BmGame.RSpecialMoveInstance_DriveCar CockpitOpen", type: "toggle", onValue: "false", offValue: "true", defaultState: true /* , video: "videos/cockpit-door.mp4" */ },
            { name: "Keep Batmobile lights on", cmd: "set RVehicle HeadlightsSwitchedOn", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Disable jump camera zoom", cmd: "set BmGame.RVehicleBatmobileBase DisableJumpCamera", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Camera follows rotation in loops", cmd: "set BmGame.RVehicleBatmobileBase CameraFollowsRotationForLoopTheLoop", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable chaingun screen shake", cmd: "set BmGame.RBatmobileCannon bChainGunScreenShake", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Single fire spurt only", cmd: "set Engine.AkVehicleSoundInfo InfiniteGearOverrun", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Make headlights red", cmd: "set BmGame.RVehicleBatmobileBase ArmouredMode", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Mute afterburner during burnouts", cmd: "set Engine.AkVehicleSoundVar GetAllowExhaustEffect", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Stop camera transition on entry", cmd: "set BmGame.RPlayerController bBlockVehicleCameraTransition", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Remove road arrows", cmd: "set BmGame.RVehicleBatmobileBase SatNavChallengeActive", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Hide Batman tracker in Remote mode", cmd: "set BmGame.RVehicleBatmobileBase bRemoteDriveBatmanTrackerDisabled", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Hide compass", cmd: "set BmGame.RPlayerController bSimplifiedHUDForDemo", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable tank missile warnings", cmd: "set BmGame.RVehicleBatmobileBase DisableWeaponWarnings", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Hide Batmobile HUD", cmd: "set BmGame.RPlayerController bAlwaysShowVehicleRadar", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Disable RPM bursts", cmd: "set Engine.AkVehicleSoundInfo InfiniteGearOverrun", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Force headlights on", cmd: "set BmGame.RVehicleBatmobileBase ForceHeadlightsSwitchedOn", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Remove engine noise", cmd: "set Engine.AkVehicleSoundVar m_AudioSuspended", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Forensic Light Color", cmd: "set RVehicleBatmobile ColourLevels ((R={r},G={g},B={b},A=999.000000))", type: "color", defaultColor: { r: 100, g: 0, b: 99 } },
            { name: "Make car muddy", cmd: "set BmGame.RVehicleBatmobileBase MuddyCar {value}", type: "number", param: "value", default: 0, min: 0, max: 5000, step: 100 }
        ],
        "Cheat": [
            { name: "Lethal Batmobile rounds", cmd: "set BmGame.RPawn bAllowedToShootWithChainGun", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Unlimited afterburner", cmd: "set BmGame.RVehicleBatmobileBase InfiniteBoost", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Prevent chaingun overheating", cmd: "set BmGame.RBatmobileCannon bOverheating", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Extended Remote range", desc: "Must be in Remote Mode", cmd: "set BmGame.RVehicleBatmobileBase bFakeRemoteDrive", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Unlimited secondary weapons", cmd: "set BmGame.RVehicleBatmobileBase CheatBatmobilePower", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Enable charged 60mm shot", cmd: "set BmGame.RBatmobileHeavyCannon AllowChargedShot", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Enable shockwave on call", cmd: "set BmScript.RSpecialMoveConfig_ShockwaveLand bTriggerSecondaryShockwave", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Batmobile cannot be crushed", desc: "May fall through floor", cmd: "set BmGame.RVehicleBatmobileBase CanBeCrushed", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Lethal Riot Suppressor", cmd: "set BmGame.RBatmobileCannon bLoseAccuracyOverTime", type: "toggle", onValue: "false", offValue: "true", defaultState: true }
        ],
        "Misc": [
            { name: "Cannot call Batmobile", cmd: "set BmGame.RLevelVolume CanTeleportBatmobile", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Disable enemy zapping", cmd: "set BmGame.RPawnVillain bCanBeZappedByBatmobile", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Batman targetable in Remote", cmd: "set BmGame.RVehicleWeapon bBatmanProhibited", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Show NPC cars on radar", cmd: "set BmGame.RVehicle bShowOnLocalRadarInBatmobile", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable proximity pickup", cmd: "set BmGame.RVehicleBatmobileBase bDisableProximityPickup", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Drive through walls", cmd: "set BmGame.RVehicleBatmobileBase SceneryCollisionDisabled", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Battle Mode Camera FOV", cmd: "Set BmGame.R3rdPersonCamera BattleModeCamFOV {value}.000000", type: "number", param: "value", default: 60, min: 30, max: 120, step: 5 }
        ]
    },
    "Character": {
        "Cosmetic": [
            { name: "Make Batman static", cmd: "set rpawnplayerbm Bstatic", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "Remote Batarang size", cmd: "set rbatarangprojectile_controllable drawscale {value}", type: "number", param: "value", default: 1, min: 1, max: 100, step: 1 },
            { name: "Hide glide kick & Fear icons", cmd: "set BmGame.RPlayerController bHideGlideKickAndFearTakedowns", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Player scale", cmd: "Set BmGame.RPawnPlayer Drawscale {value}", type: "number", param: "value", default: 1.0, min: 0.1, max: 10, step: 0.1 },
            { name: "Counter kills enemies", cmd: "Set RCombatMove_BatmanCounter bShouldKill", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "Catwoman ceiling camera flip", cmd: "set BmGame.RPawnPlayerCatwomanBase bFlipCeilingCamera", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Gauntlet eyes mode", cmd: "set BmScript.RPawnPlayerBm bRadioModeEyes", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Keep gauntlet light beeping", cmd: "set BmGame.RPawnPlayerBmBase bGauntletLightRunning", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Stagg fingerprints on", cmd: "set RPawnPlayerBm TurningFingersOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Gauntlet screen stays on", cmd: "set BmGame.RGauntletProjector bDontStop", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Electrified Batarangs", cmd: "set BmGame.RBatarangProjectile bElectrified", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Show tank radar on foot", cmd: "set BmGame.RVehicleCombatManager bHeavyTankRadarActive", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Disable zoom DOF", cmd: "set BmGame.R3rdPersonCamera Debug_TurnOffZoomDof", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Change grate camera angle", cmd: "set BmGame.RRemoveableGrate UseLookOutCamera", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Remove attack slowdown", cmd: "set BmGame.RPersistentDebugData Debug_Combat_AlwaysSlowdownSimultaneousAttacks", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Turn off level notifications", cmd: "set BmGame.RHudModuleTargets LevelUpSuppressed", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable bat signal", cmd: "set BmGame.RBatSignalBase MaxScale", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Everyone deceased in DM", cmd: "Set BmGame.RBMPawnAI bReallyDead", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "No compass (HUD stays)", cmd: "set BmGame.RPawnPlayer bNoCompass", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Color in Detective Mode", cmd: "set BmGame.RForensicsDevice bXrayUseSpecialShading", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Teleport to counter", cmd: "set BmGame.RCombatMove_BatmanCounter bWillTeleport", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Flash teleport counter", cmd: "set BmGame.RCombatMove_BatmanCounter bCanFlashTeleport", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Cheat": [
            { name: "Movement speed", cmd: "set rpawnplayer DesiredMovementScale {value}", type: "number", param: "value", default: 1.0, min: 0.1, max: 50, step: 0.5 },
            { name: "Infinite Disruptor (Max)", cmd: "Set RDisruptorSniper iAntiEquipmentMaximumAmmo {value}", type: "number", param: "value", default: 999999999, min: 1, max: 999999999, step: 1000 },
            { name: "Infinite Disruptor (Current)", cmd: "Set RDisruptorSniper iAntiEquipmentRemainingAmmo {value}", type: "number", param: "value", default: 999999999, min: 1, max: 999999999, step: 1000 },
            { name: "Infinite Fear Takedowns", cmd: "Set RStealthTakedownStage bRefundFearTakedownCost", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "Control airship anywhere", cmd: "Set RSeqAct_AirshipBobbingBase bCanControlAirship", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "Disable weak counters", cmd: "set BmGame.RPawnCombat bForceHeavyCounter", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Allow front takedowns", cmd: "set BmGame.RPlayerController bDebugAllowFrontTakedowns", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Every stun is superstun", cmd: "set BmGame.RCombatMove_BatmanStunStrike bForceSuperStun", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Infinite Gel (Max)", cmd: "Set RGooSpray MaxAmmo {value}", type: "number", param: "value", default: 999999999, min: 1, max: 999999999, step: 1000 },
            { name: "Infinite Gel (Current)", cmd: "Set RGoospray Ammo {value}", type: "number", param: "value", default: 999999999, min: 1, max: 999999999, step: 1000 },
            { name: "Insta-kill gel damage", cmd: "Set RExplosiveGooMine GelDamage {value}", type: "number", param: "value", default: 999, min: 1, max: 99999, step: 100 },
            { name: "Always super combo gel", cmd: "set BmGame.RExplosiveGelBomb bSuperComboThrow", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "Death-reset God Mode", cmd: "set BmGame.RPersistentDebugData bDeathCountGodMode", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Double gun jammer", cmd: "set BmGame.RBMWeapon bWeaponDoubleJammed", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Always freeflow mode", cmd: "set BmGame.RPersistentDebugData Debug_Combat_AlwaysFreeflowFocusMode", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "One hit kills", cmd: "set BmGame.RPersistentDebugData Debug_Combat_OneHitKill", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Instant dual play", cmd: "set BmGame.RPersistentDebugData Debug_Combat_CanAlwaysDualPlay", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Instant combat takedowns", cmd: "set BmGame.RPersistentDebugData Debug_Combat_CanAlwaysTakedown", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Detective mode with gadgets", cmd: "set BmGame.RInventoryGadget bCanUseXRay", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Higher glide style", cmd: "set RPlayerController CapeGlideMinSpeed {value}", type: "number", param: "value", default: 99, min: 1, max: 500, step: 10 },
            { name: "Superman glide", cmd: "set BmGame.RPersistentDebugData Debug_PowerGlide", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "First person camera", desc: "Use 0 to disable", cmd: "Set BmGame.R3rdPersonCamera DoAdamsCrazyCam", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Punch through walls", cmd: "set BmGame.RDestructibleProp_FractureWall IsTakedownWall", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Add upgrade points", cmd: "Set RPersistentShared UpgradePointsAvailable {value}", type: "number", param: "value", default: 999, min: 1, max: 999, step: 10 },
            { name: "Instant smoke pellets", cmd: "set BmGame.RInventoryGadget bCanEquipWhileRecharging", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Extended Batclaw range", cmd: "set bmgame.rlevelvolume overridebatclawrange {value}", type: "number", param: "value", default: 999999999, min: 100, max: 999999999, step: 10000 },
            { name: "Extended grapple range", cmd: "set BmGame.RGrappleGun MaxGrappleHeight {value}", type: "number", param: "value", default: 999999999, min: 100, max: 999999999, step: 10000 },
            { name: "Extended glide attack range", cmd: "set BmGame.RPawnPlayer GlideAttackRange {value}", type: "number", param: "value", default: 9999999, min: 100, max: 9999999, step: 10000 },
            { name: "Use gadgets in vents", cmd: "set BmGame.RInventoryGadget bUsableFromCrawlSpace", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Use gadgets on vantage", cmd: "set BmGame.RInventoryGadget bUsableFromVantagePoints", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "One hit kill Batarangs", cmd: "set BmGame.RBMPawnAI bBatarangCanKill", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Predator combat takedowns", cmd: "set BmGame.RPawnPlayerCombat bCanDoComboTakedownOnPredator", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "God Mode / Invincibility", cmd: "set engine.playercontroller bgodmode", type: "toggle", onValue: "true", offValue: "false", defaultState: true /* , video: "videos/god-mode.mp4" */ },
            { name: "One hit counter attack", cmd: "set BmGame.RCombatMove_BatmanCounter bShouldKill", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Super powered combat", cmd: "set BmGame.RPawnPlayerCombat bIncreasedCombatPower", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Harley Mayhem Mode", cmd: "set BmGame.MPawnPlayerHarleyQuinnBase bDebugHarleyMayhemMode", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Freeze multiple thugs", cmd: "set BmGame.RBMBehaviour_FreezeBlastHit bCantUnFreeze", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Disable charge attacks", cmd: "set BmGame.RBMCombatManager bDisableChargeAttack", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable grab attacks", cmd: "set BmGame.RBMCombatManager bDisableGrabAttack", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Misc": [
            { name: "Enable dive boost", cmd: "Set RPawnPlayer bCanDiveBoost", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Enable cape gliding", cmd: "Set RPawnPlayer bCanCapeGlide", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Toggle combat camera", cmd: "set BmGame.RGameRI bBatmanInCombat", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Hide player character", cmd: "set R3rdPersonCamera bHidePlayer", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "No DM on smoke pellet", cmd: "set BmGame.RSmokeBomb bCanToggleDetectiveMode", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Remove DM noise", cmd: "set BmGame.RPlayerController bJammedDetectiveModeAudioActive", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Remove jammer audio", cmd: "set BmGame.RForensicsDevice bDetectiveModeJammingSoundActive", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Remove DM off sound", cmd: "set BmGame.RForensicsDevice bSuppressForensicsOffSound", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Always detective mode", cmd: "set Engine.LocalPlayer IsXrayEnabled", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Combat FOV", cmd: "Set RBMCombatManager MaxCombatFOV {value}", type: "number", param: "value", default: 35, min: 20, max: 120, step: 5 },
            { name: "Toggle filter view in DM", cmd: "set BmGame.RForensicsDevice bIsInFilterMode", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Disable grappling", cmd: "set BmGame.RGrappleGun bActive", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Thermal Vision", cmd: "set Engine.LocalPlayer IsThermalEnabled", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Wireframe mode", cmd: "set Engine.Material Wireframe", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Crime scene view", cmd: "set Engine.LocalPlayer IsScanModeEnabled", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Follow pelvis in combat", desc: "Don't use in Batmobile!", cmd: "set BmGame.R3rdPersonCamera bForceFollowFullPelvisZ", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable counters", cmd: "set BmGame.RPawnPlayerCombat bHandcuffed", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable combat takedowns", cmd: "set BmGame.RPawnCombat bCanBeTakenDown", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Constant final blow camera", cmd: "set BmGame.RPawnVillain bShouldPreventFinalBlowCam", type: "toggle", onValue: "0", offValue: "1", defaultState: true }
        ]
    },
    "Enemy Vehicles": {
        "Cosmetic": [
            { name: "No Cobra scan lasers", cmd: "set BmGame.RVehicleHeavyTank bNoScanLasers", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Tanks appear green on map", cmd: "set BmGame.RVehicleNPC DroneHacked", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "No tank explosion shake", cmd: "set BmGame.RVehicleNPC DoExplosionScreenShake", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "No APC takedown slowmo", cmd: "set BmGame.RVehicleCombatManager bDisableKOSlowMo", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "No final tank slowmo", cmd: "set BmGame.RSeqAct_VehicleEnemySpawner NoFinalSloMo", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Abandoned car headlights", cmd: "set BmGame.RAbandonedVehicle HeadlightsSwitchedOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Abandoned car interior lights", cmd: "set BmGame.RAbandonedVehicle InteriorLightsSwitchedOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Abandoned car AUX lights", cmd: "set BmGame.RAbandonedVehicle AuxLightsSwitchedOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Abandoned car hazards", cmd: "set BmGame.RAbandonedVehicle HazardLightsSwitchedOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Tank lights on", cmd: "set BmGame.RAbandonedVehicle TankLightsSwitchedOn", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Set taxis on fire", cmd: "set BmGame.RAbandonedVehicle bOnFire", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Always kill camera", cmd: "set BmGame.RVehicleNPC AlwaysDoKillCamera", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Turn tank lights off", cmd: "set BmGame.RVehicle TankLightsSwitchedOn", type: "toggle", onValue: "0", offValue: "1", defaultState: true }
        ],
        "Cheat": [
            { name: "Blind Cobra Tanks", cmd: "set BmGame.RVehicleHeavyTank DisallowEngageTarget", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Tanks explode on shot", cmd: "set BmGame.RVehicleNPC bDisrupted", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Invisible to tanks", cmd: "set BmGame.RPawnPlayer bInvisibleToDrones", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Destroy all tanks", cmd: "set BmGame.RVehicleNPC bWaitingToExplodeBecauseTriedToFireWhenDisrupted", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "All tanks dead", desc: "May break missions", cmd: "set BmGame.RSeqAct_VehicleEnemySpawner AllDead", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Freeze all vehicles (EMP)", cmd: "set BmGame.RVehicleSimNPC DisabledByEMP", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Misc": [
            { name: "APCs invincible until escorts die", cmd: "set BmGame.RVehicleNPC bInvincibleWhenEscorted", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "APCs ram-only takedown", cmd: "set BmGame.RVehicleNPC bOnlyVulnerableToBarge", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "All vehicles tracked", cmd: "set BmGame.RVehicle bBeingTracked", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Freeze cars and tanks", cmd: "set BmGame.RVehicleSimNPC DisabledByDroneDisruptor", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Tanks remain after death", cmd: "set BmGame.RVehicleNPC bFatallyDamaged", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "All vehicles targetable", cmd: "set BmGame.RVehicleNPC IsFriendly", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Cars have Riddler info", cmd: "set BmGame.RVehicleNPC bContainsRiddlerInformant", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ]
    },
    "Enemies": {
        "Cosmetic": [
            { name: "Hide hostile count", cmd: "set BmGame.RLevelVolume bDisableHostileCount", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Remove hit clouds", cmd: "set BmGame.RPersistentDebugData Debug_Combat_DisableImpactVFX", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Disable stun stars", cmd: "set BmGame.RPersistentDebugData Debug_Combat_DisableStunStars", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Thugs invisible in DM", cmd: "set BmGame.RPawnVillain bHiddenInXray", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Immune to Batclaw disarm", cmd: "set BmGame.RPawnVillain bImmuneToBatclawDisarm", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Immune to line takedown", cmd: "set BmGame.RPawnVillain bImmuneToLineLaunchTakedown", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "All enemies armored", cmd: "set BmGame.RPawnVillain bArmoured", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Cheat": [
            { name: "Thug pool size", cmd: "set RPopulationManager ThugPoolSize {value}", type: "number", param: "value", default: 50, min: 1, max: 9999, step: 50 },
            { name: "Max riot pawns", cmd: "Set RPopulationManager MaxRiotPawns {value}", type: "number", param: "value", default: 20, min: 1, max: 5000, step: 100 },
            { name: "Militia pool size", cmd: "set RPopulationManager MilitiaPoolSize {value}", type: "number", param: "value", default: 50, min: 1, max: 2000, step: 50 },
            { name: "Non-riot thugs in combat", cmd: "Set RPopulationManager NumNonRiotThugsInCombat {value}", type: "number", param: "value", default: 10, min: 1, max: 1000, step: 50 },
            { name: "No alert propagation", cmd: "set BmGame.RBMRoomAIState bDontPropagateRoomAlert", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Enemies know gun jammed", cmd: "set BmGame.RAIBrain_Pred bHasDiscoveredJammedGun", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "No DM detector", cmd: "set BmGame.RBMRoomAIState bNoDMD", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Grates don't alert AI", cmd: "Set BmGame.RRemoveableGrate bDontAlertAI", type: "toggle", onValue: "True", offValue: "False", defaultState: true },
            { name: "New Game+ attack mode", cmd: "set BmGame.RBMCombatManager bNewGamePlus", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Attack ASAP", cmd: "set BmGame.RBMPawnAI bAttackASAP", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Reset voice synth detect", cmd: "set BmGame.RBMRoomAIState bVoiceSynthUseDetected", type: "toggle", onValue: "0", offValue: "1", defaultState: true },
            { name: "Jam enemy guns", cmd: "set BmGame.RBMWeapon bWeaponJammed", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Double jam guns", cmd: "set BmGame.RBMWeapon bWeaponDoubleJammed", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Drop gun on first hit", cmd: "set BmGame.RBMWeapon DropOnFirstHit", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Drop weapon on beatdown", cmd: "Set BmGame.RBMWeapon DropOnBeatdown", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Unarmed thugs flee", cmd: "set BmGame.RBmPawnSpawner bPawnShouldFleeImmediately", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "One shot thugs", cmd: "set pawn health {value}", type: "number", param: "value", default: 1, min: 1, max: 1000, step: 1 },
            { name: "Some avoid combat", cmd: "set BmGame.RBMAIController bInShouldAvoidCombat", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Thugs don't engage", cmd: "set BmGame.RBMCombatManager bCanAttack", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Disable medic charges", cmd: "set BmGame.RBMCombatManager bDisableMedicChargeUpThug", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable medic revives", cmd: "set BmGame.RBMCombatManager bDisableMedicRevives", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Invisible to rioters", cmd: "set BmGame.RBMBehaviour bCannotPossiblyEnterCombatEver", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Misc": [
            { name: "Penguin thugs go to HQ", cmd: "set BmScript.RSeqAct_PenguinCarChase bForceStopFleeing", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Lower checkpoints", cmd: "set BmScript.RCheckpointBlockade bStartDown", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Unlimited interrogations", cmd: "Set BmGame.RSpecialMoveInstance_Interrogation bDontKOVictim", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "No writhing when ragdoll", cmd: "set BmGame.RPawnCombat bCanWritheWhenRagdoll", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Never ragdoll on hit", cmd: "set BmGame.RPawnCombat bNeverRagdollWhenHit", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "AI invulnerable", cmd: "set BmGame.RPersistentDebugData bAIInvulnerable", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Suppress start barks", cmd: "set BmGame.RVehicleCombatManager SuppressStartEncounterBarks", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Suppress end barks", cmd: "set BmGame.RVehicleCombatManager SuppressEndEncounterBarks", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Full attack mode", cmd: "set BmGame.RPawnCombat bFullOnAttack", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Riot wants to fight", cmd: "set BmGame.RRiotBrain bRiotWantsToFight", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Turrets": [
            { name: "Pause turret timer", cmd: "set BmGame.RTurretBase bDisruptionTimerPaused", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Destroy spinning turrets", cmd: "set BmGame.RSentryGunBase bBeenHitByBMBL", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Disable spinning turrets", cmd: "set BmGame.RSentryGunBase bShootCustom", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "Mines": [
            { name: "Remove all mines", cmd: "set BmGame.RThugMineBase bDestroyASAP", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Deactivate mines", cmd: "set BmGame.RThugMineBase bHasExploded", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ]
    },
    "Miscellaneous": {
        "Load Characters": [
            { name: "Load Batman", cmd: "LoadPC Playable_Batman", type: "simple", info: "Select your desired skin in the Showcase menu first. Running this command during loading screens will load that skin with the character." },
            { name: "Load Robin", cmd: "LoadPC Playable_Robin", type: "simple", info: "Select your desired skin in the Showcase menu first." },
            { name: "Load Robin (Alt)", cmd: "LoadPC Playable_Robin0", type: "simple", info: "Alternate Robin load command." },
            { name: "Load Nightwing", cmd: "LoadPC Playable_Nightwing", type: "simple", info: "Select your desired skin in the Showcase menu first." },
            { name: "Load Nightwing (Alt)", cmd: "LoadPC Playable_Nightwing0", type: "simple", info: "Alternate Nightwing load command." },
            { name: "Load Catwoman", cmd: "LoadPC Playable_Catwoman", type: "simple", info: "Select your desired skin in the Showcase menu first." },
            { name: "Load Catwoman (Alt)", cmd: "LoadPC Playable_Catwoman0", type: "simple", info: "Alternate Catwoman load command." },
            { name: "Load Azrael", cmd: "LoadPC Playable_Azrael", type: "simple", info: "Loads Azrael as playable character." },
            { name: "Load Harley Quinn", cmd: "LoadPC Playable_DLCHarleyQuinn", type: "simple", info: "Requires Harley Quinn DLC." },
            { name: "Load Red Hood", cmd: "LoadPC Playable_DLCRedHood", type: "simple", info: "Requires Red Hood DLC." },
            { name: "Load Gordon", cmd: "LoadPC Playable_Gordon", type: "simple", info: "Loads Commissioner Gordon." },
            { name: "Load Joker", cmd: "LoadPC Playable_Joker", type: "simple", info: "Loads playable Joker character." },
            { name: "Load Hush/Bruce", cmd: "LoadPC Playable_BruceWayne", type: "simple", info: "Loads Bruce Wayne / Hush character model." },
            { name: "Load Batgirl", cmd: "LoadPC Playable_DLCBatgirl", type: "simple", info: "Requires Batgirl: A Matter of Family DLC." }
        ],
        "Teleport Locations": [
            { name: "Wayne Manor", cmd: "TeleportTo -683 -2801 98 0 WayneManor_B1", type: "simple" },
            { name: "Batcave", cmd: "TeleportTo -4130 -64 -668 0 BatCave_B1", type: "simple" },
            { name: "WayneTech Track", cmd: "TeleportTo 15754 -20813 397 0 rtwaynetech_02", type: "simple" },
            { name: "WayneTech Loop", cmd: "TeleportTo -87318 -112771 -5864 0 RTWayneTech_01", type: "simple" },
            { name: "Crime Alley", cmd: "TeleportTo 69128 3332 389 0 CPAlley_01", type: "simple" },
            { name: "Monarch Theatre", cmd: "TeleportTo 13 328 -86922 0 CPTheatre_S2", type: "simple" },
            { name: "Iceberg Lounge", cmd: "TeleportTo 7583 328 59626 0 IcebergLounge_B1", type: "simple" },
            { name: "Seagate Amusement Park", cmd: "TeleportTo 6077 -462 11316 0 DLCOilrig_D1", type: "simple" },
            { name: "Arkham Mansion", cmd: "TeleportTo 33081 30462 98 0 JokerBoss_B1", type: "simple" },
            { name: "Arkham Medical", cmd: "TeleportTo -1203 -11340 1381 0 Medical_A", type: "simple" },
            { name: "Return To Gotham", cmd: "TeleportTo -131087 -62998 464 0 CityX_15", type: "simple" }
        ],
        "Bridge Controls": [
            { name: "Lower Mercy Bridge", cmd: "re Lower_Bridge_X_Z", type: "simple" },
            { name: "Raise Mercy Bridge", cmd: "re Raise_Bridge_X_Z", type: "simple" },
            { name: "Lower Perdition Bridge", cmd: "re Lower_Bridge_Z_Y", type: "simple" },
            { name: "Raise Perdition Bridge", cmd: "re Raise_Bridge_Z_Y", type: "simple" },
            { name: "Lower Penitence/Salvation", cmd: "re Lower_Bridge_X_Y", type: "simple" },
            { name: "Raise Penitence/Salvation", cmd: "re Raise_Bridge_X_Y", type: "simple" },
            { name: "Lower all bridges", desc: "Requires reload", cmd: "start batentry?area=CityZ_17,CityX_02,CityX_03,CityZ_13,CityZ_14,CityZ_16,CityZ_18,CityZ_T17?Flags=CityX_Alfred_Bridge_Lowered,Bridges_To_CityY_Lowered?Players=Playable_Batman", type: "simple" }
        ],
        "Camera & Display": [
            { name: "Set FOV", cmd: "FOV {value}", type: "number", param: "value", default: 90, min: 60, max: 150, step: 5, info: "Recommended: 80-120. Use 0 to reset to default. Note: Zooming doesn't work with non-default FOV and Batmobile crosshair will be misaligned." },
            { name: "Game speed", cmd: "set engine.worldinfo gamespeed {value}", type: "number", param: "value", default: 1.0, min: 0.1, max: 5, step: 0.1 },
            { name: "Time dilation", cmd: "set engine.worldinfo timedilation {value}", type: "number", param: "value", default: 1.0, min: 0.01, max: 2, step: 0.01 },
            { name: "All pawns size", cmd: "set pawn drawscale {value}", type: "number", param: "value", default: 1.0, min: 0.1, max: 10, step: 0.1 },
            { name: "Toggle debug camera", cmd: "toggledebugcamera", type: "simple", info: "Breaks out of locked camera in cutscenes. Useful for photo mode." },
            { name: "Players only mode", cmd: "Playersonly", type: "simple", info: "Freezes all NPCs. Useful with debug camera for screenshots." },
            { name: "Toggle HUD", cmd: "ToggleHUD", type: "simple" },
            { name: "Toggle GFX", cmd: "ToggleGFX", type: "simple" },
            { name: "Camera no collision", cmd: "set BmGame.R3rdPersonCamera bDisableCameraCollision", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Lock camera", cmd: "set bmgame.r3rdpersoncamera lockinplace", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "3D map view", desc: "Makes game unplayable", cmd: "set Engine.LocalPlayer IsMapViewEnabled", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Sharpen image", cmd: "set Engine.PostProcessEffect bAffectsLightingOnly", type: "toggle", onValue: "true", offValue: "false", defaultState: true }
        ],
        "World & Effects": [
            { name: "Gravity", cmd: "set engine.worldinfo worldgravityz {value}", type: "number", param: "value", default: -1000, min: -2000, max: 500, step: 50, info: "Default is around -1000. Use 99 for no gravity, 0 for very low gravity." },
            { name: "Heavy rain particles", cmd: "set engine.RRainComponent ParticleCount {value}", type: "number", param: "value", default: 10000, min: 1000, max: 9999999, step: 100000, info: "Must be entered on Continue Game screen for best effect." },
            { name: "Disable rain effects", cmd: "set Engine.RainMapComponent bHidden", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Disable snow", desc: "Requires reload", cmd: "set Engine.SnowMapComponent bHidden", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Remove Scarecrow projections", cmd: "set BmScript.RDestructibleProp_TakeoverVideoScreen bCanBeTakenOverByScarecrow", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Dark sky mode", cmd: "set BmGame.RForensicsDevice bIsInFilterMode", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Toggle physics grabber", cmd: "togglephysicsgrabber", type: "simple" }
        ],
        "Snow Colors": [
            { name: "Snow Color", cmd: "Set SnowMapComponent SnowGroundColor (R={r},G={g},B={b},A=1.000000)", type: "color", defaultColor: { r: 1, g: 1, b: 1 }, info: "Requires reloading the game save to take effect. Works best in snowy DLC areas." }
        ],
        "Other": [
            { name: "Vantage/grate size", cmd: "set rhidepoint drawscale {value}", type: "number", param: "value", default: 1, min: 0.1, max: 50, step: 1 },
            { name: "Add challenge score", cmd: "challengeadjustscore {value}", type: "number", param: "value", default: 1000, min: 0, max: 999999, step: 100 },
            { name: "Trigger save", cmd: "savegamehere", type: "simple" },
            { name: "Spawn all Joker rooftops", desc: "Works after story", cmd: "set BmGame.RPersistentDebugData bSpawnAllJokerRooftop", type: "toggle", onValue: "1", offValue: "0", defaultState: true },
            { name: "Laughing Jokers in world", cmd: "set BmGame.ROverworldPopulationVolume bIsGasJoker", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Hide subtitle names", cmd: "set Engine.AkDialogueType bShowCharacterNameInSubtitles", type: "toggle", onValue: "false", offValue: "true", defaultState: true },
            { name: "Allow skip cutscenes", cmd: "set BmGame.RSeqAct_CinematicMode bIsSkippable", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Joker laugh on map", cmd: "set BmGame.RPlayerController bJokerfiedBatman", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Lock pressure pads", cmd: "set BmScript.RPresurePad bDeactivateWhenPlayerTouchesGround", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "No trophy chime", cmd: "set BmScript.RRiddlerRewardCage bDontPlayRewardOpenAudio", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Hidden riddle hint", cmd: "set BmGame.RPlayerController ShowingOverworldRiddleHint", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Show all map icons", cmd: "set BmGame.RPersistentDebugData Debug_ShowAllMapIcons", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Cannot pause game", cmd: "set BmGame.RPlayerController bInCredits", type: "toggle", onValue: "true", offValue: "false", defaultState: true },
            { name: "Restore Robin scene", desc: "Use near computer", cmd: "re Film_B1_CH9_RobinForensicsStart", type: "simple", info: "Triggers the alternate scene with Robin in Panessa. Use when you return to Panessa after he gets kidnapped, near the computer." },
            { name: "Exit game", cmd: "Exit", type: "simple" }
        ]
    }
};

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

let copiedCount = 0;
let totalCommands = 0;
const commandStates = {};
let isExactSearch = true;
const colorPickerStates = {};
let commandCart = [];

function init() {
    renderCommands();
    setupSearch();
    updateStats();
}

function renderCommands() {
    const container = document.getElementById('commandsContainer');
    let html = '';

    for (const [category, subcategories] of Object.entries(commandData)) {
        html += `
            <div class="category-section mb-6" data-category="${category}">
                <div class="category-header rounded-lg px-5 py-4 mb-4 flex items-center justify-between" onclick="toggleCategory(this)">
                    <div class="flex items-center gap-3">
                        <span class="font-orbitron text-xl font-bold text-amber-400">${getCategoryIcon(category)} ${category}</span>
                        <span class="text-xs text-gray-500 bg-black/30 px-2 py-1 rounded">${countCategoryCommands(subcategories)} commands</span>
                    </div>
                    <svg class="w-6 h-6 text-amber-400 transform transition-transform category-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>
                <div class="category-content pl-2">
        `;

        for (const [subcategory, commands] of Object.entries(subcategories)) {
            html += `
                <div class="subcategory-section mb-4">
                    <div class="subcategory-header rounded-md px-4 py-2 mb-3">
                        <span class="font-semibold text-blue-400 text-sm uppercase tracking-wider">${subcategory}</span>
                    </div>
                    <div class="grid gap-3 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-start">
            `;

            // Separate special commands from regular commands
            const colorCommands = commands.filter(cmd => cmd.type === 'color');
            const numberCommands = commands.filter(cmd => cmd.type === 'number');
            const regularCommands = commands.filter(cmd => cmd.type !== 'color' && cmd.type !== 'number');
            
            regularCommands.forEach((cmd, index) => {
                totalCommands++;
                const id = `${category}-${subcategory}-${index}`.replace(/\s+/g, '_').replace(/&/g, 'and');
                commandStates[id] = cmd.defaultState !== undefined ? cmd.defaultState : true;
                html += renderCommandCard(cmd, id);
            });

            html += `</div>`;
            
            // Number/slider commands get their own full-width rows
            numberCommands.forEach((cmd, index) => {
                totalCommands++;
                const id = `${category}-${subcategory}-num-${index}`.replace(/\s+/g, '_').replace(/&/g, 'and');
                commandStates[id] = cmd.defaultState !== undefined ? cmd.defaultState : true;
                html += `<div class="mt-3">${renderCommandCard(cmd, id)}</div>`;
            });
            
            // Color commands get their own full-width row
            colorCommands.forEach((cmd, index) => {
                totalCommands++;
                const id = `${category}-${subcategory}-color-${index}`.replace(/\s+/g, '_').replace(/&/g, 'and');
                commandStates[id] = cmd.defaultState !== undefined ? cmd.defaultState : true;
                html += `<div class="mt-3">${renderCommandCard(cmd, id)}</div>`;
            });
            
            html += `</div>`;
        }

        html += `</div></div>`;
    }

    container.innerHTML = html;
    
    // Initialize color pickers after DOM is ready
    setTimeout(() => {
        initAllColorPickers();
    }, 100);
}

function getCategoryIcon(category) {
    return '';
}

function countCategoryCommands(subcategories) {
    let count = 0;
    for (const commands of Object.values(subcategories)) {
        count += commands.length;
    }
    return count;
}

function renderCommandCard(cmd, id) {
    const isToggle = cmd.type === 'toggle';
    const isNumber = cmd.type === 'number';
    const isColor = cmd.type === 'color';
    const hasInfo = cmd.info;
    
    let initialCmd = cmd.cmd;
    if (isToggle) {
        initialCmd = `${cmd.cmd} ${cmd.onValue}`;
    } else if (isNumber) {
        initialCmd = formatCommand(cmd.cmd, cmd.default);
    } else if (isColor) {
        const dc = cmd.defaultColor;
        initialCmd = cmd.cmd.replace('{r}', dc.r + '.000000').replace('{g}', dc.g + '.000000').replace('{b}', dc.b + '.000000');
    }
    
    return `
        <div class="command-card rounded-xl p-4 command-item" 
             data-name="${cmd.name.toLowerCase()}" 
             data-cmd="${cmd.cmd.toLowerCase()}" 
             data-id="${id}">
            <div class="flex items-start justify-between gap-2 mb-3">
                <div class="flex-1">
                    <div class="flex items-center gap-2 flex-wrap">
                        <h3 class="font-semibold text-white text-sm">${cmd.name}</h3>
                        ${hasInfo ? `
                            <div class="info-tooltip">
                                ?
                                <div class="tooltip-content">${cmd.info}</div>
                            </div>
                        ` : ''}
                    </div>
                    ${cmd.desc ? `<p class="text-xs text-gray-500 mt-1">${cmd.desc}</p>` : ''}
                </div>
                ${isToggle ? `
                    <div class="flex items-center gap-2">
                        <div class="status-indicator ${commandStates[id] ? 'active' : 'inactive'}" id="status-${id}">
                            <div class="status-dot"></div>
                            <span>${commandStates[id] ? 'ON' : 'OFF'}</span>
                        </div>
                        <label class="toggle-switch" title="Toggle command ON/OFF">
                            <input type="checkbox" ${commandStates[id] ? 'checked' : ''} onchange="toggleCommand('${id}', this.checked, '${escapeStr(cmd.cmd)}', '${cmd.onValue}', '${cmd.offValue}')">
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                ` : ''}
            </div>
            
            <div class="bg-black/40 rounded-lg p-3 mb-3 font-mono text-xs text-gray-300 break-all command-text" id="cmd-${id}">
                ${initialCmd}
            </div>

            ${isNumber ? `
                <div class="mb-3">
                    <div class="flex items-center gap-3 mb-2">
                        <input type="range" 
                               class="flex-1" 
                               id="range-${id}"
                               min="${cmd.min}" 
                               max="${cmd.max}" 
                               step="${cmd.step}" 
                               value="${cmd.default}"
                               oninput="updateParam('${id}', this.value, \`${escapeStr(cmd.cmd)}\`)">
                    </div>
                    <div class="flex items-center gap-2">
                        <button class="w-8 h-8 rounded-l-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/40 transition-colors flex items-center justify-center" 
                                onclick="adjustParam('${id}', -${cmd.step}, ${cmd.min}, ${cmd.max}, \`${escapeStr(cmd.cmd)}\`)">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/></svg>
                        </button>
                        <input type="number" 
                               class="param-input flex-1 h-8 text-center text-xs rounded-none" 
                               id="input-${id}"
                               min="${cmd.min}" 
                               max="${cmd.max}" 
                               step="${cmd.step}" 
                               value="${cmd.default}"
                               onchange="updateParam('${id}', this.value, \`${escapeStr(cmd.cmd)}\`)">
                        <button class="w-8 h-8 rounded-r-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/40 transition-colors flex items-center justify-center" 
                                onclick="adjustParam('${id}', ${cmd.step}, ${cmd.min}, ${cmd.max}, \`${escapeStr(cmd.cmd)}\`)">
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        </button>
                        <button class="reset-btn px-3 h-8 rounded-lg text-white text-xs font-semibold flex items-center gap-1" 
                                onclick="resetParam('${id}', ${cmd.default}, \`${escapeStr(cmd.cmd)}\`)"
                                title="Reset to default value (${cmd.default})">
                            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
                            Reset
                        </button>
                    </div>
                </div>
            ` : ''}

            ${isColor ? `
                <div class="color-picker-container" id="picker-${id}" data-cmd="${escapeStr(cmd.cmd)}" data-default-r="${cmd.defaultColor.r}" data-default-g="${cmd.defaultColor.g}" data-default-b="${cmd.defaultColor.b}">
                    <div class="color-canvas-wrapper" id="canvaswrap-${id}">
                        <canvas class="color-main-canvas" id="canvas-${id}" width="280" height="150"></canvas>
                        <div class="color-picker-marker" id="marker-${id}"></div>
                    </div>
                    <div class="color-hue-wrapper" id="huewrap-${id}">
                        <canvas class="color-hue-slider" id="hue-${id}" width="280" height="20"></canvas>
                        <div class="color-hue-marker" id="huemarker-${id}"></div>
                    </div>
                    <div class="color-preview-box" id="preview-${id}" style="background: rgb(${cmd.defaultColor.r}, ${cmd.defaultColor.g}, ${cmd.defaultColor.b})"></div>
                    <div class="color-presets" id="presets-${id}">
                        ${colorPresets.map((p, i) => `
                            <div class="color-preset" style="background: rgb(${Math.min(255, p.r)}, ${Math.min(255, p.g)}, ${Math.min(255, p.b)})" 
                                 title="${p.name}"
                                 onclick="selectPreset('${id}', ${i})"></div>
                        `).join('')}
                    </div>
                    <div class="color-inputs">
                        <div class="color-input-group">
                            <label>R</label>
                            <input type="number" id="r-${id}" value="${cmd.defaultColor.r}" min="0" max="9999" 
                                   onchange="updateColorFromInputs('${id}')">
                        </div>
                        <div class="color-input-group">
                            <label>G</label>
                            <input type="number" id="g-${id}" value="${cmd.defaultColor.g}" min="0" max="9999"
                                   onchange="updateColorFromInputs('${id}')">
                        </div>
                        <div class="color-input-group">
                            <label>B</label>
                            <input type="number" id="b-${id}" value="${cmd.defaultColor.b}" min="0" max="9999"
                                   onchange="updateColorFromInputs('${id}')">
                        </div>
                    </div>
                </div>
            ` : ''}

            <div class="flex gap-2">
                <button class="video-btn ${cmd.video ? 'has-video' : ''}" 
                        onclick="openVideoModal('${escapeStr(cmd.name)}', '${cmd.video || ''}')"
                        title="Watch video demo of this command">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                </button>
                <button class="add-to-list-btn" 
                        id="add-${id}"
                        onclick="addToCart('${id}')"
                        title="Add this command to the combined list">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                </button>
                <button class="copy-btn flex-1 py-2 px-4 rounded-lg text-black font-semibold text-sm flex items-center justify-center gap-2" 
                        onclick="copyCommand('${id}', this)"
                        title="Copy this command to clipboard">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <span>Copy Command</span>
                </button>
            </div>
        </div>
    `;
}

function escapeStr(str) {
    return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/`/g, '\\`');
}

function toggleCommand(id, isOn, cmdBase, onValue, offValue) {
    commandStates[id] = isOn;
    const cmdElement = document.getElementById(`cmd-${id}`);
    const statusElement = document.getElementById(`status-${id}`);
    
    if (cmdElement) {
        cmdElement.textContent = `${cmdBase} ${isOn ? onValue : offValue}`;
    }
    
    if (statusElement) {
        statusElement.className = `status-indicator ${isOn ? 'active' : 'inactive'}`;
        statusElement.innerHTML = `<div class="status-dot"></div><span>${isOn ? 'ON' : 'OFF'}</span>`;
    }
}

function formatCommand(cmd, value) {
    return cmd.replace('{value}', value !== undefined ? value : '');
}

function updateParam(id, value, cmdTemplate) {
    const cmdElement = document.getElementById(`cmd-${id}`);
    const inputElement = document.getElementById(`input-${id}`);
    const rangeElement = document.getElementById(`range-${id}`);
    
    if (cmdElement) {
        cmdElement.textContent = formatCommand(cmdTemplate, value);
    }
    if (inputElement && inputElement !== document.activeElement) {
        inputElement.value = value;
    }
    if (rangeElement) {
        rangeElement.value = value;
    }
}

function adjustParam(id, delta, min, max, cmdTemplate) {
    const inputElement = document.getElementById(`input-${id}`);
    if (inputElement) {
        let newValue = parseFloat(inputElement.value) + delta;
        newValue = Math.max(min, Math.min(max, newValue));
        newValue = Math.round(newValue * 1000) / 1000;
        updateParam(id, newValue, cmdTemplate);
    }
}

function resetParam(id, defaultValue, cmdTemplate) {
    updateParam(id, defaultValue, cmdTemplate);
    showToast('Reset to default value');
}

function initAllColorPickers() {
    document.querySelectorAll('[id^="canvas-"]').forEach(canvas => {
        const id = canvas.id.replace('canvas-', '');
        initColorPicker(id);
    });
}

function initColorPicker(id) {
    const canvas = document.getElementById(`canvas-${id}`);
    const hueCanvas = document.getElementById(`hue-${id}`);
    const marker = document.getElementById(`marker-${id}`);
    const hueMarker = document.getElementById(`huemarker-${id}`);
    const wrapper = document.getElementById(`canvaswrap-${id}`);
    const hueWrapper = document.getElementById(`huewrap-${id}`);
    
    if (!canvas || !hueCanvas || !wrapper || !hueWrapper) return;

    // Set canvas sizes based on container
    const containerWidth = wrapper.clientWidth || 280;
    canvas.width = containerWidth;
    canvas.height = 150;
    hueCanvas.width = containerWidth;
    hueCanvas.height = 20;

    const ctx = canvas.getContext('2d');
    const hueCtx = hueCanvas.getContext('2d');

    // Initialize state
    colorPickerStates[id] = {
        hue: 0,
        markerX: containerWidth / 2,
        markerY: 75
    };

    // Draw hue bar
    function drawHueBar() {
        const gradient = hueCtx.createLinearGradient(0, 0, hueCanvas.width, 0);
        for (let i = 0; i <= 360; i += 60) {
            gradient.addColorStop(i / 360, `hsl(${i}, 100%, 50%)`);
        }
        hueCtx.fillStyle = gradient;
        hueCtx.fillRect(0, 0, hueCanvas.width, hueCanvas.height);
    }

    // Draw saturation/value gradient
    function drawSVGradient(hue) {
        // Clear
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Base color
        const baseColor = `hsl(${hue}, 100%, 50%)`;
        
        // Horizontal: white to color
        const gradH = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradH.addColorStop(0, '#ffffff');
        gradH.addColorStop(1, baseColor);
        ctx.fillStyle = gradH;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Vertical: transparent to black
        const gradV = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradV.addColorStop(0, 'rgba(0,0,0,0)');
        gradV.addColorStop(1, 'rgba(0,0,0,1)');
        ctx.fillStyle = gradV;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    drawHueBar();
    drawSVGradient(0);

    // Position markers initially
    marker.style.left = (canvas.width / 2) + 'px';
    marker.style.top = '75px';
    hueMarker.style.left = '0px';

    function getColorAt(x, y) {
        x = Math.max(0, Math.min(canvas.width - 1, x));
        y = Math.max(0, Math.min(canvas.height - 1, y));
        const data = ctx.getImageData(Math.floor(x), Math.floor(y), 1, 1).data;
        return { r: data[0], g: data[1], b: data[2] };
    }

    function updateColor(r, g, b) {
        document.getElementById(`r-${id}`).value = r;
        document.getElementById(`g-${id}`).value = g;
        document.getElementById(`b-${id}`).value = b;
        document.getElementById(`preview-${id}`).style.background = `rgb(${r}, ${g}, ${b})`;
        updateColorCommand(id, r, g, b);
    }

    // Main canvas mouse handling
    let draggingMain = false;

    function handleMainMove(e) {
        const rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        // Clamp to canvas bounds
        x = Math.max(0, Math.min(canvas.width, x));
        y = Math.max(0, Math.min(canvas.height, y));
        
        marker.style.left = x + 'px';
        marker.style.top = y + 'px';
        
        colorPickerStates[id].markerX = x;
        colorPickerStates[id].markerY = y;
        
        const color = getColorAt(x, y);
        updateColor(color.r, color.g, color.b);
    }

    canvas.addEventListener('mousedown', (e) => {
        draggingMain = true;
        handleMainMove(e);
    });

    // Hue canvas mouse handling
    let draggingHue = false;

    function handleHueMove(e) {
        const rect = hueCanvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        x = Math.max(0, Math.min(hueCanvas.width, x));
        
        hueMarker.style.left = x + 'px';
        
        const hue = (x / hueCanvas.width) * 360;
        colorPickerStates[id].hue = hue;
        drawSVGradient(hue);
        
        // Get color at current marker position
        const color = getColorAt(colorPickerStates[id].markerX, colorPickerStates[id].markerY);
        updateColor(color.r, color.g, color.b);
    }

    hueCanvas.addEventListener('mousedown', (e) => {
        draggingHue = true;
        handleHueMove(e);
    });

    // Global mouse events
    document.addEventListener('mousemove', (e) => {
        if (draggingMain) handleMainMove(e);
        if (draggingHue) handleHueMove(e);
    });

    document.addEventListener('mouseup', () => {
        draggingMain = false;
        draggingHue = false;
    });
}

function updateColorCommand(id, r, g, b) {
    const picker = document.getElementById(`picker-${id}`);
    const cmdTemplate = picker.getAttribute('data-cmd');
    const cmdElement = document.getElementById(`cmd-${id}`);
    
    if (cmdElement && cmdTemplate) {
        const newCmd = cmdTemplate
            .replace('{r}', r + '.000000')
            .replace('{g}', g + '.000000')
            .replace('{b}', b + '.000000');
        cmdElement.textContent = newCmd;
    }
}

function updateColorFromInputs(id) {
    const r = parseInt(document.getElementById(`r-${id}`).value) || 0;
    const g = parseInt(document.getElementById(`g-${id}`).value) || 0;
    const b = parseInt(document.getElementById(`b-${id}`).value) || 0;
    
    document.getElementById(`preview-${id}`).style.background = `rgb(${Math.min(255, r)}, ${Math.min(255, g)}, ${Math.min(255, b)})`;
    updateColorCommand(id, r, g, b);
}

function selectPreset(id, presetIndex) {
    const preset = colorPresets[presetIndex];
    
    // Update inputs
    document.getElementById(`r-${id}`).value = preset.r;
    document.getElementById(`g-${id}`).value = preset.g;
    document.getElementById(`b-${id}`).value = preset.b;
    
    // Update preview
    document.getElementById(`preview-${id}`).style.background = `rgb(${Math.min(255, preset.r)}, ${Math.min(255, preset.g)}, ${Math.min(255, preset.b)})`;
    
    // Update command
    updateColorCommand(id, preset.r, preset.g, preset.b);
    
    // Calculate hue and position markers
    const r = Math.min(255, preset.r) / 255;
    const g = Math.min(255, preset.g) / 255;
    const b = Math.min(255, preset.b) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const d = max - min;
    
    let h = 0;
    if (d !== 0) {
        switch (max) {
            case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
            case g: h = ((b - r) / d + 2) / 6; break;
            case b: h = ((r - g) / d + 4) / 6; break;
        }
    }
    
    const s = max === 0 ? 0 : d / max;
    const v = max;
    
    const canvas = document.getElementById(`canvas-${id}`);
    const hueCanvas = document.getElementById(`hue-${id}`);
    const marker = document.getElementById(`marker-${id}`);
    const hueMarker = document.getElementById(`huemarker-${id}`);
    
    if (canvas && hueCanvas && marker && hueMarker) {
        // Position hue marker
        const hueX = h * hueCanvas.width;
        hueMarker.style.left = hueX + 'px';
        
        // Redraw gradient with new hue
        const ctx = canvas.getContext('2d');
        const hue = h * 360;
        colorPickerStates[id].hue = hue;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const baseColor = `hsl(${hue}, 100%, 50%)`;
        const gradH = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradH.addColorStop(0, '#ffffff');
        gradH.addColorStop(1, baseColor);
        ctx.fillStyle = gradH;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        const gradV = ctx.createLinearGradient(0, 0, 0, canvas.height);
        gradV.addColorStop(0, 'rgba(0,0,0,0)');
        gradV.addColorStop(1, 'rgba(0,0,0,1)');
        ctx.fillStyle = gradV;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Position main marker
        const markerX = s * canvas.width;
        const markerY = (1 - v) * canvas.height;
        marker.style.left = markerX + 'px';
        marker.style.top = markerY + 'px';
        colorPickerStates[id].markerX = markerX;
        colorPickerStates[id].markerY = markerY;
    }
    
    // Highlight active preset
    document.querySelectorAll(`#presets-${id} .color-preset`).forEach((el, i) => {
        el.classList.toggle('active', i === presetIndex);
    });
}

async function copyCommand(id, button) {
    const cmdElement = document.getElementById(`cmd-${id}`);
    if (cmdElement) {
        try {
            await navigator.clipboard.writeText(cmdElement.textContent.trim());
            
            button.classList.add('copied');
            button.innerHTML = `
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                <span>Copied!</span>
            `;
            
            showToast('Command copied to clipboard!');
            
            copiedCount++;
            document.getElementById('copiedCount').textContent = copiedCount;
            
            setTimeout(() => {
                button.classList.remove('copied');
                button.innerHTML = `
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
                    </svg>
                    <span>Copy Command</span>
                `;
            }, 2000);
        } catch (err) {
            showToast('Failed to copy', true);
        }
    }
}

function showToast(message, isError = false) {
    const toast = document.getElementById('toast');
    toast.querySelector('span').textContent = message;
    toast.className = `fixed bottom-6 right-6 px-6 py-3 rounded-lg ${isError ? 'bg-red-500' : 'bg-green-500'} text-white font-semibold transform translate-y-0 opacity-100 transition-all duration-300 z-50 flex items-center gap-2`;
    
    setTimeout(() => {
        toast.className = 'fixed bottom-6 right-6 px-6 py-3 rounded-lg bg-green-500 text-white font-semibold transform translate-y-20 opacity-0 transition-all duration-300 z-50 flex items-center gap-2';
    }, 2000);
}

function toggleCategory(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.category-arrow');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        arrow.style.transform = 'rotate(0deg)';
    } else {
        content.style.display = 'none';
        arrow.style.transform = 'rotate(-90deg)';
    }
}

function toggleSearchMode() {
    isExactSearch = !isExactSearch;
    const toggle = document.getElementById('searchToggle');
    const text = document.getElementById('searchModeText');
    
    if (isExactSearch) {
        toggle.classList.add('active');
        text.textContent = 'Exact';
    } else {
        toggle.classList.remove('active');
        text.textContent = 'Fuzzy';
    }
    
    // Re-run search with new mode
    const query = document.getElementById('searchInput').value;
    performSearch(query);
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        performSearch(e.target.value);
    });
}

function performSearch(query) {
    query = query.toLowerCase().trim();
    const items = document.querySelectorAll('.command-item');
    const noResults = document.getElementById('noResults');
    let visibleCount = 0;

    if (!query) {
        // Show everything
        items.forEach(item => {
            item.style.display = '';
        });
        document.querySelectorAll('.subcategory-section').forEach(s => s.style.display = '');
        document.querySelectorAll('.category-section').forEach(c => c.style.display = '');
        document.querySelectorAll('.category-content').forEach(c => c.style.display = '');
        noResults.classList.add('hidden');
        return;
    }

    items.forEach(item => {
        const name = item.getAttribute('data-name') || '';
        const cmd = item.getAttribute('data-cmd') || '';
        const searchText = name + ' ' + cmd;
        let matches = false;
        
        if (isExactSearch) {
            matches = searchText.includes(query);
        } else {
            const words = query.split(/\s+/);
            matches = words.every(word => searchText.includes(word));
        }
        
        if (matches) {
            item.style.display = '';
            visibleCount++;
        } else {
            item.style.display = 'none';
        }
    });

    // Update subcategory visibility
    document.querySelectorAll('.subcategory-section').forEach(section => {
        const visibleItems = section.querySelectorAll('.command-item:not([style*="display: none"])');
        section.style.display = visibleItems.length > 0 ? '' : 'none';
    });

    // Update category visibility
    document.querySelectorAll('.category-section').forEach(category => {
        const visibleSubs = category.querySelectorAll('.subcategory-section:not([style*="display: none"])');
        category.style.display = visibleSubs.length > 0 ? '' : 'none';
        if (visibleSubs.length > 0) {
            const content = category.querySelector('.category-content');
            if (content) content.style.display = '';
        }
    });

    // Show/hide no results message
    if (visibleCount === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

function updateStats() {
    document.getElementById('totalCommands').textContent = totalCommands;
}

function addToCart(id) {
    const cmdElement = document.getElementById(`cmd-${id}`);
    const addBtn = document.getElementById(`add-${id}`);
    
    if (cmdElement) {
        const cmd = cmdElement.textContent.trim();
        
        // Check if already in cart
        const existingIndex = commandCart.findIndex(c => c.id === id);
        if (existingIndex >= 0) {
            // Remove from cart
            commandCart.splice(existingIndex, 1);
            addBtn.classList.remove('added');
            addBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`;
            showToast('Removed from list');
        } else {
            // Add to cart
            commandCart.push({ id, cmd });
            addBtn.classList.add('added');
            addBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
            showToast('Added to list');
        }
        
        updateCart();
    }
}

function updateCart() {
    const cart = document.getElementById('commandCart');
    const content = document.getElementById('cartContent');
    const count = document.getElementById('cartCount');
    const a11yToggle = document.getElementById('a11yToggle');
    
    if (commandCart.length === 0) {
        cart.classList.remove('visible');
        content.textContent = 'No commands added yet';
        count.textContent = '0';
        if (a11yToggle) a11yToggle.style.bottom = '24px';
    } else {
        cart.classList.add('visible');
        const combinedCmd = commandCart.map(c => c.cmd).join(' | ');
        content.textContent = combinedCmd;
        count.textContent = commandCart.length;
        if (a11yToggle) a11yToggle.style.bottom = '200px';
    }
}

async function copyCart() {
    if (commandCart.length === 0) {
        showToast('No commands to copy', true);
        return;
    }
    
    const combinedCmd = commandCart.map(c => c.cmd).join(' | ');
    
    try {
        await navigator.clipboard.writeText(combinedCmd);
        showToast(`Copied ${commandCart.length} combined commands!`);
        copiedCount++;
        document.getElementById('copiedCount').textContent = copiedCount;
    } catch (err) {
        showToast('Failed to copy', true);
    }
}

function clearCart() {
    // Reset all add buttons
    commandCart.forEach(item => {
        const addBtn = document.getElementById(`add-${item.id}`);
        if (addBtn) {
            addBtn.classList.remove('added');
            addBtn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>`;
        }
    });
    
    commandCart = [];
    updateCart();
    showToast('List cleared');
}

function openVideoModal(commandName, videoUrl) {
    const modal = document.getElementById('videoModal');
    const title = document.getElementById('videoModalTitle');
    const container = document.getElementById('videoContainer');
    
    title.textContent = commandName + ' - Demo';
    
    if (videoUrl) {
        // If video URL exists, show the video
        container.innerHTML = `<video controls autoplay><source src="${videoUrl}" type="video/mp4">Your browser does not support the video tag.</video>`;
    } else {
        // Show WIP message
        container.innerHTML = `
            <svg class="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
            </svg>
            <span class="wip-text">Work In Progress</span>
            <span class="wip-subtext">Video demonstration coming soon</span>
        `;
    }
    
    modal.classList.add('visible');
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(event) {
    if (event && event.target !== event.currentTarget) return;
    
    const modal = document.getElementById('videoModal');
    const container = document.getElementById('videoContainer');
    
    modal.classList.remove('visible');
    document.body.style.overflow = '';
    
    // Stop any playing video
    container.innerHTML = `
        <svg class="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"/>
        </svg>
        <span class="wip-text">Work In Progress</span>
        <span class="wip-subtext">Video demonstration coming soon</span>
    `;
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
});

// Accessibility Functions
let a11ySettings = {
    fontSize: 100,
    highContrast: false,
    grayscale: false,
    largeCursor: false,
    dyslexia: false,
    textSpacing: false,
    readingGuide: false,
    highlightLinks: false,
    focusIndicator: false,
    reduceMotion: false
};

function loadA11ySettings() {
    const saved = localStorage.getItem('a11ySettings');
    if (saved) {
        a11ySettings = JSON.parse(saved);
        applyA11ySettings();
    }
}

function saveA11ySettings() {
    localStorage.setItem('a11ySettings', JSON.stringify(a11ySettings));
}

function applyA11ySettings() {
    // Font size
    document.documentElement.style.fontSize = a11ySettings.fontSize + '%';
    document.getElementById('fontSizeValue').textContent = a11ySettings.fontSize + '%';
    
    // Toggle classes
    document.documentElement.classList.toggle('a11y-high-contrast', a11ySettings.highContrast);
    document.documentElement.classList.toggle('a11y-grayscale', a11ySettings.grayscale);
    document.documentElement.classList.toggle('a11y-large-cursor', a11ySettings.largeCursor);
    document.documentElement.classList.toggle('a11y-dyslexia', a11ySettings.dyslexia);
    document.documentElement.classList.toggle('a11y-text-spacing', a11ySettings.textSpacing);
    document.documentElement.classList.toggle('a11y-reading-guide', a11ySettings.readingGuide);
    document.documentElement.classList.toggle('a11y-highlight-links', a11ySettings.highlightLinks);
    document.documentElement.classList.toggle('a11y-focus-indicator', a11ySettings.focusIndicator);
    document.documentElement.classList.toggle('a11y-reduce-motion', a11ySettings.reduceMotion);
    
    // Update checkboxes
    document.getElementById('a11yHighContrast').checked = a11ySettings.highContrast;
    document.getElementById('a11yGrayscale').checked = a11ySettings.grayscale;
    document.getElementById('a11yLargeCursor').checked = a11ySettings.largeCursor;
    document.getElementById('a11yDyslexia').checked = a11ySettings.dyslexia;
    document.getElementById('a11yTextSpacing').checked = a11ySettings.textSpacing;
    document.getElementById('a11yReadingGuide').checked = a11ySettings.readingGuide;
    document.getElementById('a11yHighlightLinks').checked = a11ySettings.highlightLinks;
    document.getElementById('a11yFocusIndicator').checked = a11ySettings.focusIndicator;
    document.getElementById('a11yReduceMotion').checked = a11ySettings.reduceMotion;
}

function toggleA11yPanel() {
    const panel = document.getElementById('a11yPanel');
    const isVisible = panel.classList.contains('visible');
    panel.classList.toggle('visible');
    
    // Set focus to close button when opening
    if (!isVisible) {
        panel.querySelector('.a11y-close').focus();
    }
}

function toggleA11yOption(option, enabled) {
    const optionMap = {
        'high-contrast': 'highContrast',
        'grayscale': 'grayscale',
        'large-cursor': 'largeCursor',
        'dyslexia': 'dyslexia',
        'text-spacing': 'textSpacing',
        'reading-guide': 'readingGuide',
        'highlight-links': 'highlightLinks',
        'focus-indicator': 'focusIndicator',
        'reduce-motion': 'reduceMotion'
    };
    
    a11ySettings[optionMap[option]] = enabled;
    applyA11ySettings();
    saveA11ySettings();
}

function adjustFontSize(delta) {
    a11ySettings.fontSize = Math.max(50, Math.min(200, a11ySettings.fontSize + delta));
    applyA11ySettings();
    saveA11ySettings();
}

function resetA11yOptions() {
    a11ySettings = {
        fontSize: 100,
        highContrast: false,
        grayscale: false,
        largeCursor: false,
        dyslexia: false,
        textSpacing: false,
        readingGuide: false,
        highlightLinks: false,
        focusIndicator: false,
        reduceMotion: false
    };
    applyA11ySettings();
    saveA11ySettings();
    showToast('Accessibility settings reset');
}

// Reading guide follows mouse
document.addEventListener('mousemove', (e) => {
    if (a11ySettings.readingGuide) {
        const guide = document.getElementById('readingGuide');
        guide.style.top = (e.clientY - 20) + 'px';
    }
});

// Close a11y panel with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const panel = document.getElementById('a11yPanel');
        if (panel.classList.contains('visible')) {
            toggleA11yPanel();
        }
        closeVideoModal();
    }
});

// Trap focus within a11y panel when open
document.getElementById('a11yPanel')?.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const panel = document.getElementById('a11yPanel');
        const focusable = panel.querySelectorAll('button, input, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    init();
    loadA11ySettings();
});
