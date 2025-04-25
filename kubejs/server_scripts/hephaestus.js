function castingRecipe(/** @type {Internal.RecipesEventJS} */ event, /** @type {string} */ type, /** @type {Internal.Ingredient} */ item, /** @type {Internal.FluidStackJS} */ fluid, /** @type {Internal.ItemStack} */ output, /** @type {boolean} */ castConsumed, /** @type {number} */ coolingTime ) {
    return event.custom({
        type: type,
        cast: item.toJson(),
        fluid: fluid.toJson(),
        result: output,
        cast_consumed: castConsumed,
        cooling_time: coolingTime
    })
}

ServerEvents.recipes(event => {
    event.remove({output: "tconstruct:smeltery_controller"})
    castingRecipe(event, "tconstruct:casting_basin", Ingredient.of("#tconstruct:seared_blocks"), Fluid.of("tconstruct:molten_brass"), "tconstruct:smeltery_controller", true, 100)
})