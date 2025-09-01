ServerEvents.recipes(event => {
    event.shaped(
        "minecraft:cobblestone", 
        [
            "##",
            "##"
        ],
        {
            "#":"minecraft:gravel"
        }
    )

    event.shapeless(
        "minecraft:andesite", 
        [
            "minecraft:cobblestone",
            "minecraft:gravel",
            "minecraft:flint"
        ]
    )

    event.shapeless(
        "minecraft:campfire",
        [
            "minecraft:kelp",
            "minecraft:cobblestone",
            "minecraft:flint"
        ]
    )

    event.shaped(
        "minecraft:bamboo_block", 
        [
            "SK",
            "KS"
        ],
        {
            "K":"minecraft:dried_kelp",
            "S":"minecraft:sea_pickle"
        }
    )

    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "minecraft:dead_fire_coral"
        },
        "output": {
            "name": "minecraft:oak_sapling"
        }
    });

    createRecipe(
        event,
        "create:filling",
        [
            Item.of("technologyinthesea:empty_sunscreen"),
            Fluid.of("technologyinthesea:sunscreen", FluidAmounts.BUCKET).toJson()
        ],
        [
            Item.of("technologyinthesea:sunscreen")
        ],
        {}
    )

    createRecipe(
        event,
        "create:mixing",
        [
            {
                "tag": "technologyinthesea:dead_corals_and_fans"
            },
            Item.of("minecraft:sea_pickle"),
            Fluid.of("minecraft:water", FluidAmounts.BUCKET).toJson()
        ],
        [
            Fluid.of("technologyinthesea:sunscreen", FluidAmounts.BUCKET).toJson()
        ]
    )
})