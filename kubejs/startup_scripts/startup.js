Platform.getMods().get("kubejs").setName("Technology in the Sea")

StartupEvents.registry("fluid", event => {
    event.create("technologyinthesea:void_essence")
        .noBlock()
        .thinTexture(0x000066)
        .bucketColor(0x000066)
        .displayName("Void Essence")
})

StartupEvents.registry("mob_effect", event => {
    event.create("technologyinthesea:sun_protection")
        .beneficial()
        .displayName("Sun Protection")
})

StartupEvents.registry("item", event => {
    event.create("technologyinthesea:sunscreen")
        .useAnimation("drink")
        .food(builder => {
            builder
                .alwaysEdible()
                .effect("technologyinthesea:sun_protection", 1200, 0, 1)
        })
    
    event.create("technologyinthesea:aqua_shard")
    event.create("technologyinthesea:liquidest_bottle_of_liquids")

    event.create("technologyinthesea:diamond_wire")
})

StartupEvents.registry("enchantment", event => {
    event.create("technologyinthesea:sun_protection")
        .maxLevel(1)
        .displayName("Sun Protection")
        .veryRare()
        .undiscoverable()
        .untradeable()
        .wearable()
})