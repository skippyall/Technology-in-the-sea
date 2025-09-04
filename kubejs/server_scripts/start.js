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

    createRecipe(
        event,
        "create:milling",
        [
            Item.of("minecraft:grass")
        ],
        [
            {
                "item": "minecraft:pumpkin_seed",
                "chance": 0.1
            }
        ]
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
})