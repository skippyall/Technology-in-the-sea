ServerEvents.recipes(event => {
    createRecipe(event, 
        "create:mixing", 
        [
            Item.of("minecraft:diamond"),
            Item.of("minecraft:quartz"),
            Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET).toJson()
        ],
        [
            Item.of("ae2:certus_quartz_crystal")
        ]
    )
    press(event, "ae2:silicon_press", "ae2:silicon")
    press(event, "ae2:logic_processor_press", "minecraft:gold_ingot")
    press(event, "ae2:calculation_processor_press", "ae2:certus_quartz_crystal")
    press(event, "ae2:engineering_processor_press", "minecraft:diamond")
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