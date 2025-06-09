ServerEvents.recipes(event => {
    ores.forEach(ore => {
        event.remove({"input": ore})
    })

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
                "item": "botania:mana_steel",
            },
            {
                "item": "minecraft:andesite",
            }
        ],
        [
            {
                "item": "create:asurine"
            }
        ]
    )

    event.remove({"id": "create:crushing/tuff"})

    event.remove({"id": "create:smelting/zinc_ingot_from_raw_ore"})
    event.remove({"id": "create:blasting/zinc_ingot_from_raw_ore"})

})

ServerEvents.blockLootTables(event => {
    ores.forEach(ore => {
        event.modifyBlock(ore, table => {
            table.clearPools()
            table.addPool(pool => {
                pool.addItem(Item.getItem(ore))
            })
        })
    })
})