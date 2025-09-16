ServerEvents.recipes(event => {
    event.shaped(
        "ducky-periphs:duck_block",
        [
            "  S",
            "SSS",
            "SYS"
        ],
        {
            "S": "minecraft:slime_ball",
            "Y": "minecraft:yellow_dye"
        }
    )

    event.shaped(
        "minecraft:sponge",
        [
            " K ",
            "KYK",
            " K "
        ],
        {
            "K": "minecraft:dried_kelp_block",
            "Y": "minecraft:yellow_dye"
        }
    )
})