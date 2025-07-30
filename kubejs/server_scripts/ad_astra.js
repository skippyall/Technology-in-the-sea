ServerEvents.tags("minecraft:worldgen/biome", event => {
    event.add("technologyinthesea:moon_biomes", "ad_astra:lunar_wastelands")
    event.add("technologyinthesea:mars_biomes", "ad_astra:martian_canyon_creek", "ad_astra:martian_polar_caps", "ad_astra:martian_wastelands")
    event.add("technologyinthesea:venus_biomes", "ad_astra:venus_wastelands", "ad_astra:infernal_venus_barrens")
    event.add("technologyinthesea:mercury_biomes", "ad_astra:mercury_deltas")
    event.add("technologyinthesea:calorite_vein_biomes", "#technologyinthesea:mercury_biomes", "#technologyinthesea:venus_biomes")
    event.add("technologyinthesea:orbit_biomes", "ad_astra:orbit")
})

ServerEvents.recipes(event => {
    oreVein(event, "desh", "Desh", "technologyinthesea:moon_biomes", 133023984)
    createRecipe(
        event,
        "create:crushing",
        [
            Item.of("ad_astra:raw_desh")
        ],
        [
            Item.of("technologyinthesea:crushed_dirty_desh")
        ]
    )
    createRecipe(
        event,
        "create:splashing",
        [
            Item.of("technologyinthesea:crushed_dirty_desh")
        ],
        [
            Item.of("technologyinthesea:crushed_clean_desh")
        ]
    )

    oreVein(event, "ostrum", "Ostrum", "technologyinthesea:mars_biomes", 496057027)
    oreVein(event, "calorite", "calorite", "technologyinthesea:calorite_vein_biomes", 759834809)

    event.recipes.createoreexcavation.vein("Oil Vein", "ad_astra:oil_bucket")
        .placement(384, 64, 636174428)
        .biomeWhitelist("c:in_overworld")
        .id("technologyinthesea:oil_vein")

    event.recipes.createoreexcavation.extracting(Fluid.of("ad_astra:oil", 810), "technologyinthesea:oil_vein", 20)
})

function oreVein(/** @type {Internal.RecipesEventJS}*/ event, name, displayName, biomes, salt) {
    event.recipes.createoreexcavation.vein(displayName + " Vein", "ad_astra:raw_" + name)
        .placement(384, 64, salt)
        .biomeWhitelist(biomes)
        .id("technologyinthesea:" + name + "_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:raw_" + name, "technologyinthesea:" + name + "_vein", 1500)

    event.remove({id: "ad_astra:smelting/" + name + "_ingot_from_smelting_raw_" + name})
    event.remove({id: "ad_astra:blasting/" + name + "_ingot_from_blasting_raw_" + name})
}