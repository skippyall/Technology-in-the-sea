//priority: 0
ServerEvents.recipes(event => {
    event.remove({output: "createutilities:void_steel_ingot"})
    createRecipe(
        event,
        "create:compacting",
        [
            Fluid.of("technologyinthesea:void_essence", FluidAmounts.BUCKET * 0.5).toJson()
        ],
        [
            Item.of("createutilities:void_steel_ingot")
        ]
    )
})