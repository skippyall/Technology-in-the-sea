ServerEvents.recipes(event => {
    createRecipe(
        event, 
        "create:mixing", 
        [
            Item.of("botania:mana_pearl"),
            Fluid.of("ad_astra:oil", FluidAmounts.BUCKET * 0.5).toJson(),
            Item.of("ad_astra:steel_ingot")
        ],
        [
            Fluid.of("technologyinthesea:void_essence", FluidAmounts.BUCKET * 0.5).toJson()
        ]
    )
    createRecipe(
        event, 
        "create:mixing", 
        [
            Item.of("minecraft:blue_ice"),
            Item.of("minecraft:snow_block"),
            Item.of("botania:bifrost_perm"),
            Item.of("botania:rune_winter"),
            Fluid.of("ad_astra:cryo_fuel", FluidAmounts.BUCKET * 0.5).toJson()
        ],
        [
            Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET * 0.5).toJson()
        ]
    )

    createRecipe(
        event,
        "create:compacting",
        [
            Item.of("botania:manasteel_ingot"),
            Item.of("botania:life_essence"),
        ],
        [
            Fluid.of("technologyinthesea:mana_essence", FluidAmounts.BUCKET).toJson(),
            Item.of("botania:life_essence")
        ],
        {
            "heatRequirement": "superheated"
        }
    )

    event.remove({id: "constructionwand:core_destruction"})
    event.shaped(
        "constructionwand:core_destruction",
        [
            " GP",
            "GBG",
            "PG "
        ],
        {
            "P": "minecraft:iron_pickaxe",
            "G": "minecraft:glass_pane",
            "B": "minecraft:iron_block"
        }
    )

    event.remove({id: "botania:mana_infusion/cherry_sapling_to_oak_sapling"})
    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "botania:sapling_cycle",
        "input": {
            "item": "minecraft:cherry_sapling"
        },
        "mana": 120,
        "output": {
            "item": "vanillabackport:pale_oak_sapling"
        }
    })

    event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
            "type": "block",
            "block": "botania:alchemy_catalyst"
        },
        "group": "botania:sapling_cycle",
        "input": {
            "item": "vanillabackport:pale_oak_sapling"
        },
        "mana": 120,
        "output": {
            "item": "minecraft:oak_sapling"
        }
    })
})

ServerEvents.tags("item", event => {
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_tube_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_horn_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_fire_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_brain_coral_fan")
    event.add("technologyinthesea:dead_coral_fans", "minecraft:dead_bubble_coral_fan"),
    event.add("technologyinthesea:dead_corals", "minecraft:dead_tube_coral")
    event.add("technologyinthesea:dead_corals", "minecraft:dead_horn_coral")
    event.add("technologyinthesea:dead_corals", "minecraft:dead_fire_coral")
    event.add("technologyinthesea:dead_corals", "minecraft:dead_brain_coral")
    event.add("technologyinthesea:dead_corals", "minecraft:dead_bubble_coral")
    event.add("technologyinthesea:dead_corals_and_fans", "#technologyinthesea:dead_corals")
    event.add("technologyinthesea:dead_corals_and_fans", "#technologyinthesea:dead_coral_fans")

    event.add("technologyinthesea:sun_protection_armor", "#ad_astra:space_suit_items")
    event.add("technologyinthesea:sun_protection_armor", "#ad_astra:netherite_space_suit_items")
})

ServerEvents.tags("block", event => {
    event.add("cadmus:allows_claim_interactions", "yigd:grave")
});