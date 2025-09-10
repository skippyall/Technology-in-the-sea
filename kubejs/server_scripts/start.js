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
    })

    event.shaped(
        "minecraft:blaze_rod",
        [
            " BB",
            "BBB",
            "BB "
        ],
        {
            "B": "minecraft:blaze_powder"
        }
    )

    event.shapeless(
        "minecraft:dirt",
        [
            "minecraft:gravel",
            "#technologyinthesea:dead_corals_and_fans",
            "minecraft:bone_meal"
        ]
    )

    event.shapeless(
        "botania:grass_seeds",
        [
            "minecraft:seagrass"
        ]
    )

    event.remove({id: "create:milling/grass"})

    createRecipe(
        event,
        "create:milling",
        [
            Item.of("minecraft:grass")
        ],
        [
            {
                "item": "minecraft:pumpkin_seeds",
                "chance": 0.1
            }
        ],
        {
            "processingTime": 250
        }
    )

    event.custom({
        "type": "tconstruct:melting",
        "ingredient": {
            "tag": "c:cobblestone"
        },
        "result": {
            "amount": 81000,
            "fluid": "minecraft:lava"
        },
        "temperature": 750,
        "time": 133
    })

    event.remove({id: "create:milling/gravel"})

    createRecipe(
        event,
        "create:milling",
        [
            Item.of("minecraft:gravel")
        ],
        [
            {
                "item": "minecraft:sand"
            }
        ],
        {
            "processingTime": 250
        }
    )
    event.custom({
        "type": "botania:pure_daisy",
        "input": {
            "type": "block",
            "block": "minecraft:sand"
        },
        "output": {
            "name": "minecraft:soul_sand"
        }
    })
    createRecipe(
        event,
        "create:mixing",
        [
            Item.of("minecraft:soul_sand"),
            Fluid.of("minecraft:lava", FluidAmounts.BUCKET).toJson()
        ],
        [
            Item.of("minecraft:netherrack")
        ],
        {}
    )

    createRecipe(
        event,
        "create:splashing",
        [
            Item.of("minecraft:dirt")
        ],
        [
            {
                "item": "minecraft:sugar_cane",
                "chance": 0.1
            },
            {
                "item": "minecraft:bamboo",
                "chance": 0.1
            },
            {
                "item": "minecraft:brown_mushroom",
                "chance": 0.1
            },
            {
                "item": "minecraft:moss",
                "chance": 0.1
            }
        ]
    )
})