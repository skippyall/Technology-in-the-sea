ServerEvents.recipes(event => {
    createRecipe(event, 
        "create:mixing", 
        [
            Item.of("minecraft:diamond"),
            Item.of("minecraft:quartz")
        ],
        [
            Item.of("ae2:certus_quartz_crystal")
        ]
    )
    press(event, "ae2:silicon_press", "ae2:silicon")
    press(event, "ae2:logic_processor_press", "minecraft:gold_ingot")
    press(event, "ae2:calculation_processor_press", "ae2:certus_quartz_crystal")
    press(event, "ae2:engineering_processor_press", "minecraft:diamond")

    event.remove({id:"ae2:misc/fluixpearl"})
    createRecipe(
        event,
        "create:mixing",
        [
            Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET * 0.1).toJson(),
            Ingredient.of("#c:fluix_dusts"),
            Ingredient.of("#ae2:all_fluix"),
            Ingredient.of("#c:ender_pearls")
        ],
        [
            Item.of("ae2:fluix_pearl")
        ]
    )

    event.shapeless(
        "ae2:sky_dust",
        [
            "botania:mana_powder",
            "minecraft:gunpowder",
            "minecraft:black_dye"
        ]
    )
})

function press(event, press, deploy) {
    sequencedAssembly(
        event,
        Item.of("create:iron_sheet"),
        [
            {
                "item": press,
                "chance": 0.1
            }
        ],
        [
            createRecipe(
                event,
                "create:deploying",
                [
                    Item.of("technologyinthesea:unpressed_press"),
                    Item.of(deploy)
                ],
                [
                    Item.of("technologyinthesea:unpressed_press")
                ]
            ),
            createRecipe(
                event,
                "create:pressing",
                [
                    Item.of("technologyinthesea:unpressed_press")
                ],
                [
                    Item.of("technologyinthesea:unpressed_press")
                ]
            ),
            createRecipe(
                event,
                "create:pressing",
                [
                    Item.of("technologyinthesea:unpressed_press")
                ],
                [
                    Item.of("technologyinthesea:unpressed_press")
                ]
            )
        ],
        1,
        Item.of("technologyinthesea:unpressed_press")
    )
}

ServerEvents.tags("worldgen/biome", event => {
    event.removeAll("ae2:has_meteorites")
})