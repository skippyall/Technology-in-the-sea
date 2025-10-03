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

    event.custom({
        "type": "create_bic_bit:deep_frying",
        "heatRequirement": "heated",
        "ingredients": [
            {
                "item": "technologyinthesea:raw_kibbeling"
            },
            {
                "amount": 10125,
                "fluid": "create_bic_bit:frying_oil"
            }
        ],
        "results": [
            {
                "item": "technologyinthesea:kibbeling"
            }
        ]
    })

    createRecipe(
        event,
        "create:mixing",
        [
            Ingredient.of("c:foods/raw_fishes").toJson(),
            Item.of("create:wheat_flour", 2),
            Fluid.of("milk:still_milk", FluidAmounts.BUCKET * 0.25)
        ]
    )

    event.shapeless(
        "technologyinthesea:kibbeling_bucket",
        [
            "minecraft:bucket",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling",
            "technologyinthesea:kibbeling"
        ]
    )
})