// priority: 1
function createRecipe(
    /** @type {Internal.RecipesEventJS} */ event, /** @type {string} */ type, /** @type {Ingredient[]} */ input, /** @type {(OutputItem | Fluid)[]} */ output, /** @type {{}} */ extra) {
    return event.custom(Object.assign({
        "type": type,
        "ingredients": input,
        "results": output
    },extra))
}

function sequencedAssembly(
    /** @type {Internal.RecipesEventJS} */ event, 
    /** @type {Ingredient} */ input,
    /** @type {OutputItem[]} */ outputs,
    /** @type {Internal.RecipeJS[]} */ steps,
    /** @type {number}*/ loops,
    transitionalItem
    
) {
    steps = steps.map(getJsonAndRemove)
    return event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": input,
        "loops": loops,
        "results": outputs,
        "sequence": steps,
        "transitionalItem": transitionalItem
    })
}

function getJsonAndRemove(/** @type {Internal.RecipeJS} */ recipe) {
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

    event.remove({output:"create:empty_blaze_burner"})
    event.shaped(
        "create:empty_blaze_burner",
        [
            " B ",
            "BNB",
            " B "
        ],
        {
            "B": "create:brass_sheet",
            "N": "minecraft:netherrack"
        }
    )
})