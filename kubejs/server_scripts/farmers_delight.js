ServerEvents.recipes(event => {
    event.remove({id: "botania:mana_infusion/cocoa_beans_to_wheat_seeds"})

    cropCycle(event, "minecraft:cocoa_beans", "farmersdelight:onion")
    cropCycle(event, "farmersdelight:onion", "farmersdelight:rice")
    cropCycle(event, "farmersdelight:rice", "farmersdelight:cabbage_seeds")
    cropCycle(event, "farmersdelight:cabbage_seeds", "farmersdelight:tomato_seeds")
    cropCycle(event, "farmersdelight:tomato_seeds", "vegandelight:soybean")
    cropCycle(event, "vegandelight:soybean", "minecraft:wheat_seeds")
})

function cropCycle(event, input, output) {
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "botania:crop_cycle",
        "input": {
            "item": input
        },
        "mana": 6000,
        "output": {
            "item": output
        }
    })
}