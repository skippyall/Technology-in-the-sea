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
    oreProcessing(event, "desh", true, Fluid.of("minecraft:lava", FluidAmounts.BUCKET * 0.2).toJson(), 3)

    oreVein(event, "ostrum", "Ostrum", "technologyinthesea:mars_biomes", 496057027)
    oreProcessing(event, "ostrum", false, Fluid.of("technologyinthesea:void_essence", FluidAmounts.BUCKET * 0.2).toJson(), 5)

    oreVein(event, "calorite", "Calorite", "technologyinthesea:calorite_vein_biomes", 759834809)
    oreProcessing(event, "calorite", false, Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET * 0.2).toJson(), 7)

    event.recipes.createoreexcavation.vein("Oil Vein", "ad_astra:oil_bucket")
        .placement(384, 64, 636174428)
        .biomeWhitelist("c:in_overworld")
        .id("technologyinthesea:oil_vein")

    event.recipes.createoreexcavation.extracting(Fluid.of("ad_astra:oil", FluidAmounts.BUCKET * 0.01), "technologyinthesea:oil_vein", 20)

    event.recipes.createoreexcavation.vein("Ice Shard Vein", "ad_astra:ice_shard")
        .placement(384, 64, 699779059)
        .biomeWhitelist("technologyinthesea:mars_biomes")
        .id("technologyinthesea:ice_shard_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:ice_shard", "technologyinthesea:ice_shard_vein", 1500)
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

function oreProcessing(event, ore, blasting, fluid, loops) {
    createRecipe(
        event,
        "create:crushing",
        [
            Item.of("ad_astra:raw_" + ore)
        ],
        [
            Item.of("technologyinthesea:crushed_dirty_" + ore)
        ]
    )
    createRecipe(
        event,
        "create:splashing",
        [
            Item.of("technologyinthesea:crushed_dirty_" + ore)
        ],
        [
            Item.of("technologyinthesea:crushed_clean_" + ore)
        ]
    )

    if(blasting) {
        createRecipe(
            event,
            "create:haunting",
            [
                Item.of("technologyinthesea:crushed_clean_" + ore)
            ],
            [
                {
                    "item": "ad_astra:" + ore + "_nugget",
                    "count": 3
                },
                {
                    "item": "ad_astra:" + ore + "_nugget",
                    "chance": 0.5
                },
                {
                    "item": "ad_astra:" + ore + "_nugget",
                    "chance": 0.5
                }
            ]
        )
    }

    sequencedAssembly(
        event,
        Item.of("technologyinthesea:crushed_clean_" + ore),
        [
            Item.of("ad_astra:" + ore + "_ingot")
        ],
        [
            createRecipe(
                event,
                "create:filling",
                [
                    Item.of("technologyinthesea:unfinished_" + ore + "_ingot"),
                    fluid
                ],
                [
                    Item.of("technologyinthesea:unfinished_" + ore + "_ingot")
                ]
            ),
            createRecipe(
                event,
                "create:pressing",
                [
                    Item.of("technologyinthesea:unfinished_" + ore + "_ingot")
                ],
                [
                    Item.of("technologyinthesea:unfinished_" + ore + "_ingot")
                ]
            ),
        ],
        loops,
        Item.of("technologyinthesea:unfinished_" + ore + "_ingot")
    )
}