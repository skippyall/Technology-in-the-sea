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

    /*event.shaped(
        "createoreexcavation:raw_diamond",
        [
            "###",
            "###",
            "###"
        ],
        {
            "#": "technologyinthesea:diamond_shard"
        }
    )*/

    event.shaped(
        "technologyinthesea:netherite_vein_creator",
        [
            "424",
            "212",
            "424"
        ],
        {
            "4": "createoreexcavation:diamond_drill",
            "2": "minecraft:diamond_block",
            "1": "botania:mana_diamond",
        }
    )

    event.shaped(
        "technologyinthesea:zinc_vein_creator",
        [
            "424",
            "212",
            "424"
        ],
        {
            "4": "createoreexcavation:iron_drill",
            "2": "minecraft:iron_block",
            "1": "minecraft:gold_block",
        }
    )

    event.shaped(
        "technologyinthesea:redstone_vein_creator",
        [
            "424",
            "212",
            "424"
        ],
        {
            "4": "createoreexcavation:iron_drill",
            "2": "minecraft:gunpowder",
            "1": "minecraft:redstone",
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

const ores = [
    "minecraft:coal_ore",
    "minecraft:deepslate_coal_ore",
    "ad_astra:venus_coal_ore",
    "ad_astra:glacio_coal_ore",

    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore",
    "ad_astra:moon_iron_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:glacio_iron_ore",

    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
    "ad_astra:glacio_copper_ore",

    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "ad_astra:venus_gold_ore",

    "minecraft:redstone_ore",
    "minecraft:deepslate_redstone_ore",

    "minecraft:emerald_ore",
    "minecraft:deepslate_emerald_ore",

    "minecraft:lapis_ore",
    "minecraft:deepslate_lapis_ore",
    "ad_astra:glacio_lapis_ore",

    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",
    "ad_astra:mars_diamond_ore",
    "ad_astra:venus_diamond_ore",

    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",

    "create:zinc_ore",
    "create:deepslate_zinc_ore",

    "create_new_age:thorium_ore",
    "tconstruct:cobalt_ore",

    "ad_astra:moon_desh_ore",
    "ad_astra:deepslate_desh_ore",

    "ad_astra:mars_ostrum_ore",
    "ad_astra:deepslate_ostrum_ore",

    "ad_astra:venus_calorite_ore",
    "ad_astra:deepslate_calorite_ore",

    "ad_astra:moon_ice_shard_ore",
    "ad_astra:mars_ice_shard_ore",
    "ad_astra:glacio_ice_shard_ore",
    "ad_astra:deepslate_ice_shard_ore"
]