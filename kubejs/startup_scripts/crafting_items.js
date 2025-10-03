const items = [
    "crushed_dirty_desh",
    "crushed_clean_desh",
    "unfinished_desh_ingot",
    "crushed_dirty_ostrum",
    "crushed_clean_ostrum",
    "unfinished_ostrum_ingot",
    "crushed_dirty_calorite",
    "crushed_clean_calorite",
    "unfinished_calorite_ingot",
    "slightly_polished_diamond",
    "aqua_shard",
    "liquid_bottle",
    "liquidest_bottle_of_liquids",
    "not_enough_aqua_shard",
    "diamond_wire",
    "unpressed_press",
    "raw_kibbeling"
]

StartupEvents.registry("item", event => {
    for(const item of items) {
        event.create("technologyinthesea:" + item)
    }
})