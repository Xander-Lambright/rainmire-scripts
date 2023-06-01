var API = Java.type('noppes.npcs.api.NpcAPI').Instance();

"use strict";
//Runon's Stuff
var _GUI_IDS = {
    counter: 1,
    ids: {},
    lookup: {}
}

function id(name) {
    if (!name) {
        name = Math.random().toString(36).substring(7) + Math.random().toString(36).substring(7);
    }

    var _id = _GUI_IDS.ids[name] || (_GUI_IDS.ids[name] = _GUI_IDS.counter++);

    _GUI_IDS.lookup[_id] = name;
    return _id;
}

function idname(_id) {
    return _GUI_IDS.lookup[_id];
}

function removeid(name) {
    var _id = id(name);

    delete _GUI_IDS.lookup[_id];
    delete _GUI_IDS.ids[name];
}

;

var perk_id, npc, setterGUI, type, taken

function init(e) {
    if (!e.npc.storeddata.has("perkID")) {
        e.npc.storeddata.put("perkID", "empty")
    }
    if (!e.npc.storeddata.has("type")) {
        e.npc.storeddata.put("type", "Good Perk")
    }
    if (!e.npc.storeddata.has("hasBeenTaken")) {
        e.npc.storeddata.put("hasBeenTaken", 0)
    }
    if (!e.npc.storeddata.has("XP")) {
        e.npc.storeddata.put("XP", 0)
    }
    perk_id = e.npc.storeddata.get("perkID")
    type = e.npc.storeddata.get("type")
    npc = e.npc
    taken = e.npc.storeddata.get("hasBeenTaken")
    e.npc.timers.forceStart(1, 20, true)
}

function interact(e) {
    if (e.player.gamemode == 1 && e.player.isSneaking()) {
        e.setCanceled(true)
        createPerkSetterGUI(e)
    }
    else if (type == "Dampening Perk") {
        e.player.message("&5The Remnant resists you. Weaken it.")
        e.npc.executeCommand("playsound minecraft:entity.guardian.hurt player @a[distance=..4] ~ ~ ~")
    }
}

function timer(e) {
    if (type == "Dampening Perk" && !taken) {
        e.npc.world.spawnParticle("minecraft:crimson_spore", e.npc.x, e.npc.y, e.npc.z, 6, 10, 6, .00004, 1200)
    }
}

function createPerkSetterGUI(e) {
    setterGUI = e.API.createCustomGui(id(e.player.name + "perkSetter"), 256, 256, false)
    var id_text = setterGUI.addTextField(1, 50, 50, 150, 18)
    id_text.setText(perk_id)
    setterGUI.addLabel(2, "Perk ID", 0, 50, 1, 1)
    setterGUI.addButton(3, e.npc.storeddata.get("type"), 30, 80, 80, 20)
    setterGUI.addLabel(5, "===Dampening Perks Only===", 30, 110, 1, 1)
    setterGUI.addButton(4, "Reset Taken Status", 100, 120, 140, 20)
    setterGUI.addLabel(7, "XP", 0, 120, 1, 1)
    var xp = setterGUI.addTextField(6, 30, 120, 40, 20)
    xp.setText(e.npc.storeddata.get("XP"))
    e.player.showCustomGui(setterGUI)
}

function customGuiButton(e) {
    if (e.buttonId == 3) {
        switch (type) {
            case "Good Perk":
                type = "Dampening Perk"
                break;
            case "Dampening Perk":
                type = "Good Perk"
                break;

        }
        npc.storeddata.put("type", type)
        setterGUI.getComponent(3).setLabel(type)
        setterGUI.update(e.player)
    }
    if (e.buttonId == 4) {
        npc.storeddata.put("hasBeenTaken", 0)
        npc.getAdvanced().setSound(0, "minecraft:ambient.crimson_forest.mood")
        npc.job.setSong("minecraft:ambient.crimson_forest.loop")
        taken = 0
    }

}

function customGuiClosed(e) {
    npc.storeddata.put("perkID", setterGUI.getComponent(1).getText())
    npc.storeddata.put("XP", setterGUI.getComponent(6).getText())
    perk_id = npc.storeddata.get("perkID")
}

function dialog(e) {
    if (type == "Good Perk") {
        e.player.trigger(210, [perk_id])
        e.npc.executeCommand("/particle minecraft:dust 1 1 0 1 ~ ~1 ~ 1 1 1 .000005 150")
        e.npc.executeCommand("/playsound minecraft:block.bell.use player @a[distance=..4] ~ ~ ~")
        e.npc.executeCommand("/playsound minecraft:block.beacon.power_select player @a[distance=..4] ~ ~ ~")
        e.player.message("&e&lYou have been blessed with an enhancement...")
    }
    else {
        e.player.trigger(220, [perk_id])
        e.npc.executeCommand("stopsound " + e.player.name)

        e.npc.executeCommand("/playsound minecraft:block.bell.use player @a[distance=..4] ~ ~ ~")
        e.npc.executeCommand("/playsound minecraft:entity.zombie_villager.converted player @a[distance=..4] ~ ~ ~")
        e.npc.executeCommand("/playsound minecraft:entity.evoker.prepare_summon player @a[distance=..4] ~ ~ ~")

        e.npc.storeddata.put("hasBeenTaken", 1)
        taken = 1
        e.npc.job.setSong("aa")
        e.npc.advanced.setSound(0, "aa")

        e.npc.executeCommand("/particle create:soul ~ ~1 ~ 4 4 4 .5 1000")
        e.npc.executeCommand("/xp add " + e.player.name + " " + e.npc.storeddata.get("XP") + " points")
        e.player.message("&5&lYou have found a dampening perk...")
    }
}