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

    event.remove({"id": "create:crushing/tuff"})

    event.remove({"id": "create:smelting/zinc_ingot_from_raw_ore"})
    event.remove({"id": "create:blasting/zinc_ingot_from_raw_ore"})

    event.remove({output: "ad_astra:steel_ingot"})
    event.remove({output: "createnuclear:steel_ingot"})
    createRecipe(
        event,
        "create:mixing",
        [
            Fluid.of("tconstruct:molten_iron", 9000).toJson(),
            Item.of("createnuclear:coal_dust")
        ],
        [
            Fluid.of("tconstruct:molten_steel", 9000).toJson()
        ]
    )

})

ServerEvents.tags("item", event => { 
    event.add("c:steel_ingots", "ad_astra:steel_ingot", "createnuclear:steel_ingot")
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