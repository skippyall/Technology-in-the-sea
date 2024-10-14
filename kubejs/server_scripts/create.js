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
        "create:millstone",
        [
            " A ",
            "ALA",
            " S "
        ],
        {
            "A": "minecraft:andesite",
            "L": "#c:stripped_logs",
            "S": "#c:stones"
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