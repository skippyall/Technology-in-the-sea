function castingRecipe(/** @type {Internal.RecipesEventJS} */ event, /** @type {string} */ type, /** @type {Internal.Ingredient} */ item, /** @type {Internal.FluidStackJS} */ fluid, /** @type {Internal.ItemStack} */ output, /** @type {boolean} */ castConsumed, /** @type {number} */ coolingTime ) {
    return event.custom({
        type: type,
        cast: item.toJson(),
        fluid: fluid,
        result: output,
        cast_consumed: castConsumed,
        cooling_time: coolingTime
    })
}

ServerEvents.recipes(event => {
    event.remove({output: "tconstruct:smeltery_controller"})
    castingRecipe(
        event,
        "tconstruct:retextured_casting_basin", 
        Ingredient.of("#tconstruct:smeltery_bricks"),
        {
            "name": "hephaestusplus:molten_manasteel",
            "amount": 36000
        },
        "tconstruct:smeltery_controller", 
        true, 
        100
    )
})