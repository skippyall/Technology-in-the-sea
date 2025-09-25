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

    event.shaped(
        "minecraft:netherite_upgrade_smithing_template",
        [
            "DND",
            "DND",
            "DDD"
        ],
        {
            "D": "minecraft:diamond",
            "N": "minecraft:netherrack"
        }
    )

    event.shapeless(
        "minecraft:budding_amethyst",
        [
            "ae2:flawed_budding_quartz",
            "minecraft:purple_dye"
        ]
    )
})