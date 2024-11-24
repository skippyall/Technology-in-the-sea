function createRecipe(event,type,input,output,extra) {
    return event.custom(Object.assign({
        "type": type,
        "ingredients": input,
        "results": output
    },extra))
}

function getJsonAndRemove(recipe) {
    let json = recipe.json
    recipe.remove()
    return json
}

ServerEvents.recipes(event => {
    event.shaped(
        "create:encased_fan",
        [
            " A ",
            "ALA",
            " C "
        ],
        {
            "A": "minecraft:andesite",
            "L": "#c:stripped_logs",
            "C": "#technologyinthesea:dead_coral_fans"
        }
    )

    event.shaped(
        "create:hand_crank",
        [
            "PPP",
            "  A"
        ],
        {
            "P": "#minecraft:planks",
            "A": "minecraft:andesite"
        }
    )
})

ServerEvents.tags("item", event => {
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_tube_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_horn_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_fire_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_brain_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_bubble_coral_fan")
})