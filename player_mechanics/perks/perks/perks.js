var good_perks = {
    groundpound: { id: "groundpound", type: 0, name: "Ground Pound", cost: 3, description: "Does a ground pound!" },
    dash: { id: "dash", type: 0, name: "Dash", cost: 3, description: "Does a dash!" },
    levitate: { id: "levitate", type: 0, name: "Levitation", cost: 1, description: "While held, levitate!" },
    resurface: { id: "resurface", type: 0, name: "Resurface", cost: 1, description: "Expell all your air for a quick boost upward while in water" },
    low_health_damage: { id: "low_health_damage", type: 1, name: "What Doesn't Kill You...", cost: 4, description: "Your damage is increased the lower your health is." },
    barter: { id: "barter", type: 0, name: "Bartering", cost: 4, description: "Manipulate the emotions of a target trader, using your heart skills to net lower costs, and more rewards." },
    summon: { id: "summon", type: 0, name: "Summon Water Creature", cost: 6, description: "Form a warrior made of water. Sends enemies flying back, but can't survive much damage." },
    companion_buff: { id: "companion_buff", type: 0, name: "Encouragement!", cost: 12, description: "Scraaaeam out a battle cry and rally your friends! Give your companions a health boost. The cost is lowered depending on your Heart Skills." },
    blood_cost: { id: "blood_cost", type: 1, name: "Blood Cost", cost: 0, description: "When out of hydration, supplement your own blood to use perks. You take damage equivalent to the cost." },
    animal_lover: { id: "animal_lover", type: 0, name: "Animal Lover", cost: 6, description: "Secrete phermones that make wild animals trust you. It's duration is affected by your §cCharm" },
    repair: { id: "repair", type: 0, name: "Repair", cost: 4, description: "Once per item, use your soul's regenerative power to restore some durability" },
    early_bird: { id: "early_bird", type: 1, name: "Early Bird", cost: 6, description: "During the night, you conserve energy and suffer a -1 to all stats, but gain a +1 during the day" },
    night_owl: { id: "night_owl", type: 1, name: "Night Owl", cost: 6, description: "During the day, you conserve energy and suffer a -1 to all stats, but gain a +1 during the night" },
    not_yet: { id: "not_yet", type: 1, name: "Not Yet", cost: 6, description: "You store a reserve of blessed water. Once per revive, defy death and restore half of your heatlh, and send out a blast of water to push enemies away" },
    hurricane: { id: "hurricane", type: 0, name: "Hurricane", cost: 10, description: "Create a small hurricane, that sucks in enemies nearby" },
    oxygenate: { id: "reoxygenate", type: 0, name: "Re-oxygenate", cost: 6, description: "Filter the air out of your hydration, and use it to refill half of your air" },
    electric_eel: { id: "electric_eel", type: 0, name: "Electric Eel", cost: 6, description: "While in water, send electricty out and shock nearby entities." },
    revenge_attack: { id: "revenge_attack", type: 0, name: "Backsplash", cost: 0, description: "When active, one hydration is used every time you take damage. Once deactivated, the total amount of hydration used is added to your next attack's damage" },
    flood_lockpick: { id: "flood_lockpick", type: 0, name: "Flood Lockpick", cost: 2, description: "Activate, and then interact with a locked object to pick the lock. The percentage picked is based on the sum of Deftness, Aptitude, and Intellect" },
    broken_rage: { id: "broken_rage", type: 1, name: "Broken Rage", cost: 4, description: "Whenever a weapon breaks, you gain +1 Deftness and +1 Brawn for 10 seconds." },
    lifesteal: { id: "lifesteal", type: 0, name: "Blood Siphon", cost: 2, description: "While active, your attack damage is halved. You restore the other half amount as health, and use up hydration at the same rate." },
    invisibility: { id: "refraction", type: 0, name: "Refraction", cost: 2, description: "While active, you use water to refract light around you, rendering you invisible" },
    conservationist: { id: "conservationist", type: 1, name: "Conservationist", cost: 6, description: "At the cost of losing 6 hydration, all powers cost 50% less." },
    ripple_effect: { id: "ripple_effect", type: 0, name: "Ripple Effect", cost: 4, description: "When in water, send out a large ripple, pushing enemies back and slightly damaging them" },
    birthday_armor: { id: "birthday_armor", type: 1, name: "Birthday Armor", cost: 8, description: "You do +2 damage for each empty slot of armor" },
    icicle: { id: "icicle", type: 0, name: "Icicile", cost: 6, description: "If a suitable ceiling is above you by (Deftness*4) blocks or less, form an icicle that you latch on to." }
}

var dampening_perks = {
    fragile_feet: { id: "fragile_feet", cost: 2, name: "Fragile Feet", description: "You take additional damage when you fall" },
    frail_fingers: { id: "frail_fingers", cost: 2, name: "Frail Fingers", description: "Your grip on the bow string occasionally falters." },
    social_anxiety: { id: "social_anxiety", cost: 4, name: "Social Anxiety", description: "-1 to all attributes while in dialog" },
    winded: { id: "winded", name: "Winded", cost: 4, description: "Your sprint is slower" },
    pescetarian: { id: "pescetarian", cost: 3, name: "Pescetarian", description: "Fish is the only food that restores health and hydration" },
    reckless: { id: "reckless", cost: 4, name: "Reckless", description: "You don't handle your tools with care. Items take extra durability damage" },
    sloth: { id: "sloth", cost: 4, name: "Sloth", description: "Your limbs feel a little heavier. Your attack speed is lowered." },
    glass_frame: { id: "glass_frame", cost: 10, name: "Glass Frame", description: "A gust of wind would tear you down. Your grit is always set to 1" },
    bouncy: { id: "bouncy", cost: 5, name: "Bouncy", description: "Getting damaged causes additional knockback to you" },
    hydrophobic: { id: "hydrophobic", cost: 10, name: "Hydrophobic", description: "Damage caused by drowning is doubled." },
    ugly_mug: { id: "ugly_mug", cost: 6, name: "Ugly Mug", description: "Shopkeepers will increase prices." },
    vegetarian: { id: "Vegetarian", cost: 8, name: "Vegetarian", description: "Meat based food items provide no healing or hydration" },
    dilution: { id: "dilution", cost: 4, name: "Dilution", description: "Items can only have 2 jelly strikes." },
    cannibal: { id: "cannibal", cost: 12, name: "Cannibal", description: "If it isn't human flesh, you can't eat it." },
    weighed_down: { id: "weighed_down", cost: 7, name: "Weighed Down", description: "Each piece of armor slows you down" },
    water_weight: { id: "water_weight", cost: 4, name: "Water Weight", description: "You fall slightly faster" },
    uninspiring: { id: "uninspiring", cost: 10, name: "Uninspiring", description: "Your followers just, feel unmotivated around you. Companions have lower health." }
}