ServerEvents.recipes(event => {
    event.remove({"input": "#c:ores"})
    event.remove({"id": "create:splashing/gravel"})
    createRecipe(
        event,
        "create:splashing",
        [
            {
                "item": "minecraft:gravel"
            }
            
        ],
        [
            {
                "item": "minecraft:iron_nugget",
                "chance": 0.15
            },
            {
                "item": "create:copper_nugget",
                "chance": 0.15
            }
        ]
    )
    createRecipe(
        event,
        "create:mixing",
        [
            {
                "item": "minecraft:dried_kelp",
            },
            {
                "item": "minecraft:dried_kelp",
            },
            {
                "item": "minecraft:andesite",
            }
        ],
        [
            {
                "item": "minecraft:tuff"
            }
        ]
    )
})

ServerEvents.blockLootTables(event => {
    event.modifyBlock("#c:ores", table => {
        table.clearPools()
    })
})