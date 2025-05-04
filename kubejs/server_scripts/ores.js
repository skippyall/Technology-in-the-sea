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

    event.remove({"id": "create:crushing/tuff"})

    createRecipe(
        event,
        "create:milling",
        [
            {
                "item": "minecraft:tuff"
            }
        ],
        [
            {
                "item": "create:raw_zinc"
            }
        ]
    )

    event.remove({"input": "create:raw_zinc"})
    

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