Platform.getMods().get("kubejs").setName("Technology in the Sea")

StartupEvents.registry("fluid", event => {
    event.create("technologyinthesea:void_essence")
        .noBlock()
        .thinTexture(0x000066)
        .bucketColor(0x000066)
        .displayName("Void Essence")

    event.create("technologyinthesea:icy_essence")
        .noBlock()
        .thinTexture(0x58c0fc)
        .bucketColor(0x58c0fc)
        .displayName("Icy Essence")
    event.create("technologyinthesea:sunscreen")
        .noBlock()
        .thinTexture(0xf0bc6e)
        .bucketColor(0xf0bc6e)
        .displayName("Sunscreen")
    event.create("technologyinthesea:mana_essence")
        .noBlock()
        .thinTexture(0x0000FF)
        .bucketColor(0x0000FF)
        .displayName("Mana Essence")
})


StartupEvents.registry("item", event => {
    event.create("technologyinthesea:diamond_shard")
        .tooltip(Text.literal("Shards bring luck"))

    event.create("technologyinthesea:kibbeling")
        .food(builder => {
            builder.hunger(4)
                .saturation(1)
        })
    event.create("technologyinthesea:kibbeling_bucket")
        .food(builder => {
            builder.hunger(20)
                .saturation(1)
                .effect("minecraft:saturation", 400, 0, 1)
                .eaten(e => e.getPlayer().getInventory().insertItem(Item.of("minecraft:bucket"), false))
        })
})