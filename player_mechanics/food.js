function eatFood(e) {
    var food = e.player.getMainhandItem()
    var foodLevel = food.getFoodLevel()


    if (!isFoodValid(e, food)) {
        return
    }
    e.setCanceled(true)
    addToScore("perk_power", Math.floor(foodLevel / 2))
    setScore("restore_hydrate", 1)
    e.player.timers.forceStart(768080, 4, false)
    if (getScore("perk_power") > getScore("max_perk_power")) {
        setScore("perk_power", getScore("max_perk_power"))
    }
    produceFoodParticles(e)
    e.player.playSound("minecraft:entity.generic.eat", 1, 1)
    e.player.playSound("minecraft:entity.player.burp", 1, 1)
    e.player.playSound("minecraft:entity.witch.drink", 1, 1)
    if (e.player.gamemode != 1) { e.player.removeItem(food, 1) }
    e.player.setHealth(e.player.getHealth() + foodLevel)
    if (e.player.getHealth() > e.player.getMaxHealth()) {
        e.player.setHealth(e.player.getMaxHealth())
    }
}

function isFoodValid(e, food) {
    if (e.player.hasTag("pescetarian")) {
        var isFish = false
        var fish_food = ["minecraft:cod", "minecraft:cooked_cod", "minecraft:salmon", "minecraft:cooked_salmon", "minecraft:tropical_fish",
            "upgrade_aquatic:pike", "upgrade_aquatic:cooked_pike", "upgrade_aquatice:lionfish", "upgrade_aquatice:cooked_lionfish", "upgrade_aquatice:perch", , "upgrade_aquatice:cooked_perch"]
        for (var i = 0; i < fish_food.length; i++) {
            if (e.player.getMainhandItem().name == fish_food[i]) {
                isFish = true
            }

        }
        if (!isFish) {
            executeCommand('/title ' + e.player.name + ' actionbar {"text":"You can\'t eat that!","color":"purple"}')
        }
    }
    if (isFish) {
        return false
    }
    if (food.name == "aquamirae:esca") { return false }
    return true
}

function produceFoodParticles(e) {
    var angle = e.player.getRotation()
    var dx = -Math.sin(angle * Math.PI / 180)
    var dz = Math.cos(angle * Math.PI / 180)
    var dy = -Math.tan(e.player.getPitch() / 90)
    var pitch = (90 - (Math.abs(e.player.getPitch()))) * 0.011
    if (dy < 0) {
        dy = 0
    }
    var x = e.player.x + (dx * pitch)
    var y = e.player.y + 1 + dy
    var z = e.player.z + (dz * pitch)
    executeCommand("/particle minecraft:item " + e.player.getMainhandItem().name + " " + x + " " + y + " " + z + " .3 .2 .3 .00001 20")

}