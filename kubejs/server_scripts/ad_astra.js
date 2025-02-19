ServerEvents.tags("minecraft:worldgen/biome", event => {
    event.add("technologyinthesea:moon_biomes", "ad_astra:lunar_wastelands")
    event.add("technologyinthesea:mars_biomes", "ad_astra:martian_canyon_creek", "ad_astra:martian_polar_caps", "ad_astra:martian_wastelands")
    event.add("technologyinthesea:venus_biomes", "ad_astra:venus_wastelands", "ad_astra:infernal_venus_barrens")
    event.add("technologyinthesea:mercury_biomes", "ad_astra:mercury_deltas")
    event.add("technologyinthesea:calorite_vein_biomes", "#technologyinthesea:mercury_biomes", "#technologyinthesea:venus_biomes")
    event.add("technologyinthesea:orbit_biomes", "ad_astra:orbit")
})

ServerEvents.recipes(event => {
    event.remove({output: "ad_astra:steel_ingot"})
    createRecipe(
        event,
        "create:mixing",
        [
            Fluid.of("tconstruct:molten_iron", 9000).toJson(),
            Item.of("minecraft:coal")
        ],
        [
            Fluid.of("tconstruct:molten_steel", 9000).toJson()
        ]
    )

    event.recipes.createoreexcavation.vein("Desh Vein", "ad_astra:raw_desh")
        .placement(384, 64, 133023984)
        .biomeWhitelist("technologyinthesea:moon_biomes")
        .id("technologyinthesea:desh_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:raw_desh", "technologyinthesea:desh_vein", 1500)

    event.recipes.createoreexcavation.vein("Ostrum Vein", "ad_astra:raw_ostrum")
        .placement(384, 64, 496057027)
        .biomeWhitelist("technologyinthesea:mars_biomes")
        .id("technologyinthesea:ostrum_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:raw_ostrum", "technologyinthesea:ostrum_vein", 1500)

    event.recipes.createoreexcavation.vein("Calorite Vein", "ad_astra:raw_calorite")
        .placement(384, 64, 759834809)
        .biomeWhitelist("technologyinthesea:calorite_vein_biomes")
        .id("technologyinthesea:calorite_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:raw_calorite", "technologyinthesea:calorite_vein", 1500)

    event.recipes.createoreexcavation.vein("Oil Vein", "ad_astra:oil_bucket")
        .placement(384, 64, 636174428)
        .biomeWhitelist("c:in_overworld")
        .id("technologyinthesea:oil_vein")

    event.recipes.createoreexcavation.extracting(Fluid.of("ad_astra:oil", 810), "technologyinthesea:oil_vein", 20)
})