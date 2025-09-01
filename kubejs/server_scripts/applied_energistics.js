ServerEvents.recipes(event => {
    createRecipe(event, 
        "create:mixing", 
        [
            Item.of("minecraft:diamond"),
            Item.of("minecraft:quartz"),
            Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET).toJson()
        ],
        [
            Item.of("ae2:certus_quartz_crystal")
        ]
    )
})