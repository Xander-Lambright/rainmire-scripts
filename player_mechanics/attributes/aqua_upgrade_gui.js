var giveBack = true

function aquacustomGuiButton(e) {
    if (e.player.getCustomGui() == AQUA_GUI) {
        if (e.buttonId == 1) {
            player.storeddata.put("airDecreaseRate", player.storeddata.get("airDecreaseRate") - 0.2)
            giveBack = false
            player.closeGui()
            player.playSound("minecraft:block.respawn_anchor.charge", 1, 1)
            player.playSound("iob:ui.breath", 1, 1)
            player.playSound("minecraft:block.enchantment_table.use", 1, .6)
            displayTitle(e, "Your Lung Capacity Has Increased!", "aqua")
            player.world.spawnParticle("splash", player.x, player.y + 1.2, player.z, .2, .2, .2, .2, 100)
            player.world.spawnParticle("supplementaries:air_burst", player.x, player.y + 1.2, player.z, .2, .2, .2, .2, 100)
            //player.removeItem("aquamirae:esca", 1)

        }
        if (e.buttonId == 2) {
            addToScore("swmspd", 1)
            giveBack = false
            player.closeGui()
            player.playSound("minecraft:block.respawn_anchor.charge", 1, 1)
            player.playSound("minecraft:ambient.underwater.enter", 1, 1)
            player.playSound("minecraft:block.enchantment_table.use", 1, .6)
            displayTitle(e, "Your Swim Speed Has Increased!", "aqua")
            player.world.spawnParticle("splash", player.x, player.y + 1.2, player.z, .2, .2, .2, .2, 100)
            player.world.spawnParticle("cloud", player.x, player.y + 1.2, player.z, .2, .2, .2, .2, 100)
            //player.removeItem("aquamirae:esca", 1)

        }
        if (e.buttonId == 4) {
            player.closeGui()

        }
    }
}

function aquaCustomGuiClosed(e) {
    if (e.gui == AQUA_GUI) {
        if (giveBack) {
            executeCommand('/summon minecraft:item ' + player.x + ' ' + player.y + ' ' + player.z + ' {Item:{id:"aquamirae:esca",Count:1b,tag:{display:{Lore:[\'{"italic":false,"color":"white","extra":[{"text":""},{"color":"dark_aqua","text":"Use at a Power or Dampening Remnant"}],"text":""}\', \'{"italic":false,"color":"white","extra":[{"text":""},{"color":"dark_aqua","text":"to obtain a perk. Or ingest it to"}],"text":""}\', \'{"italic":false,"color":"white","extra":[{"text":""},{"color":"dark_aqua","text":"enhance your aquatic abilities"}],"text":""}\'],Name:\'{"italic":false,"extra":[{"text":""},{"underlined":true,"obfuscated":true,"color":"aqua","text":"a"},{"underlined":true,"color":"aqua","text":"Remnant Vessel"},{"underlined":true,"obfuscated":true,"color":"aqua","text":"K"}],"text":""}\'}}}}')
            player.playSound("minecraft:entity.llama.spit", 1, 1)
        }
    }
}

var AQUA_GUI
function openAquaticGUI() {
    giveBack = true
    AQUA_GUI = API.createCustomGui(10, 256, 256, false, player)
    AQUA_GUI.addTexturedButton(1, "", -20, 10, 125, 128, "iob:textures/customgui/perks/good/cards/dash.png", 0, 0)
        .setHoverText("Improve your air supply")
    AQUA_GUI.addTexturedButton(2, "", 140, 10, 125, 128, "iob:textures/customgui/perks/good/cards/groundpound.png", 0, 0)
        .setHoverText("Improve your swim speed")
    player.playSound("minecraft:block.enchantment_table.use", 1, .4)
    player.playSound("minecraft:item.trident.return", 1, .4)
    AQUA_GUI.addButton(4, "Cancel", 20, 200, 200, 20)
    player.showCustomGui(AQUA_GUI)

}