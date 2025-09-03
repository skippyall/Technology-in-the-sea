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
})