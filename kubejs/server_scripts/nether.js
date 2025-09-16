ServerEvents.recipes(event => {
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

    event.shaped("minecraft:coal_block",
        [
            "###",
            "###",
            "###"
        ],
        {
            "#": "minecraft:charcoal"
        }
    )

    event.shapeless(
        "minecraft:wither_skeleton_spawn_egg",
        [
            "botania:cocoon",
            "minecraft:coal_block"
        ]
    )

    event.shapeless(
        "minecraft:ghast_spawn_egg",
        [
            "botania:cocoon",
            "minecraft:bone_block"
        ]
    )
})