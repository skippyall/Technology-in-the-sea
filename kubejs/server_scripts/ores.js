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
                "chance": 0.30
            },
            {
                "item": "create:copper_nugget",
                "chance": 0.15
            }
        ]
    )

    event.remove({"id": "create:crushing/tuff"})
    event.remove({"id": "create:crushing/ochrum"})
    event.remove({"id": "create:crushing/crimsite"})
    event.remove({"id": "create:crushing/asurine"})
    event.remove({"id": "create:crushing/veridium"})

    createRecipe(
        event,
        "create:mixing",
        [
            Fluid.of("tconstruct:molten_iron", 9000).toJson(),
            Item.of("minecraft:coal")
        ],
        [
            Fluid.of("tconstruct:molten_steel", 9000).toJson()
        ]
    )

    event.remove({input: "createoreexcavation:raw_diamond"})
    sequencedAssembly(
        event,
        Item.of("createoreexcavation:raw_diamond"),
        [
            {
                "item": "minecraft:diamond",
                "chance": 0.4
            },
            {
                "item": "technologyinthesea:diamond_shard",
                "chance": 0.6
            }
        ],
        [
            createRecipe(
                event,
                "create:cutting",
                [
                    Item.of("technologyinthesea:slightly_polished_diamond")
                ],
                [
                    Item.of("technologyinthesea:slightly_polished_diamond")
                ],
                {}
            ),
            createRecipe(
                event,
                "create:filling",
                [
                    Item.of("technologyinthesea:slightly_polished_diamond"),
                    Fluid.of("minecraft:water", 8100).toJson()
                ],
                [
                    Item.of("technologyinthesea:slightly_polished_diamond")
                ],
                {}
            ),
            createRecipe(
                event,
                "create:deploying",
                [
                    Item.of("technologyinthesea:slightly_polished_diamond"),
                    Item.of("minecraft:paper")
                ],
                [
                    Item.of("technologyinthesea:slightly_polished_diamond")
                ],
                {}
            ),
        ],
        1,
        Item.of("technologyinthesea:slightly_polished_diamond")
    )

    event.shaped(
        "createoreexcavation:raw_diamond",
        [
            "###",
            "###",
            "###"
        ],
        {
            "#": "technologyinthesea:diamond_shard"
        }
    )
})

ServerEvents.tags("item", event => { 
    event.add("c:steel_ingots", "ad_astra:steel_ingot")
    event.remove("c:copper_blocks", "minecraft:cut_copper")
})

ServerEvents.tags("block", event => {
    ores.forEach(ore => {
        event.add("technologyinthesea:disable_experience_drop", ore)
    })
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