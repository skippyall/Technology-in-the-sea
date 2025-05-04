//priority: 0
ServerEvents.recipes(event => {
    event.remove({output: "createutilities:void_steel_ingot"})
    event.recipes.createoreexcavation.vein("Void Steel Vein", "createutilities:void_steel_ingot")
        .placement(384, 64, 65087256)
        .biomeWhitelist("technologyinthesea:orbit_biomes")
        .id("technologyinthesea:void_steel_vein")

    event.recipes.createoreexcavation.drilling("createutilities:void_steel_ingot", "technologyinthesea:void_steel_vein", 2000)
        .fluid(Fluid.of("technologyinthesea:void_essence", 4050))

    createRecipe(
        event, 
        "create:mixing", 
        [
            Item.of("botania:mana_pearl"),
            Fluid.of("ad_astra:oil", 40500).toJson(),
            Item.of("ad_astra:cheese"),
            Item.of("ad_astra:steel_ingot")
        ],
        [
            Fluid.of("technologyinthesea:void_essence", 40500).toJson()
        ]
    )
})