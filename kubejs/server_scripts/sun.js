ServerEvents.recipes(event => {
    event.shaped(
        "technologyinthesea:sunscreen",
        [
            "NSN",
            "N N",
            "NSN"
        ],
        {
            "N": "minecraft:iron_nugget",
            "S": "create:iron_sheet"
        }
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