// priority: 10
/*const $ResourceKey = Java.loadClass(`net.minecraft.resources.ResourceKey`)
const $StructurePlaceSettings = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings')*/

const ores = [
    "minecraft:coal_ore",
    "minecraft:deepslate_coal_ore",
    "minecraft:iron_ore",
    "minecraft:deepslate_iron_ore",
    "minecraft:copper_ore",
    "minecraft:deepslate_copper_ore",
    "minecraft:gold_ore",
    "minecraft:deepslate_gold_ore",
    "minecraft:redstone_ore",
    "minecraft:deepslate_redstone_ore",
    "minecraft:emerald_ore",
    "minecraft:deepslate_emerald_ore",
    "minecraft:lapis_ore",
    "minecraft:deepslate_lapis_ore",
    "minecraft:diamond_ore",
    "minecraft:deepslate_diamond_ore",

    "minecraft:nether_gold_ore",
    "minecraft:nether_quartz_ore",
    "minecraft:ancient_debris",

    "create:zinc_ore",
    "create:deepslate_zinc_ore",
    "create_new_age:thorium_ore",
    "tconstruct:cobalt_ore",

    "ad_astra:moon_desh_ore",
    "ad_astra:moon_iron_ore",

    "ad_astra:mars_ostrum_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_diamond_ore",

    "ad_astra:venus_calorite_ore",
    "ad_astra:venus_coal_ore",
    "ad_astra:venus_gold_ore",
    "ad_astra:venus_diamond_ore",

    "ad_astra:glacio_coal_ore",
    "ad_astra:glacio_copper_ore",
    "ad_astra:glacio_iron_ore",
    "ad_astra:glacio_lapis_ore",
    
    "ad_astra:deepslate_calorite_ore",
    "ad_astra:deepslate_desh_ore",
    "ad_astra:deepslate_ostrum_ore",
]

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
            Item.of("ad_astra:ice_shard"),
            Fluid.of("ad_astra:cryo_fuel", FluidAmounts.BUCKET * 0.5).toJson()
        ],
        [
            Fluid.of("technologyinthesea:icy_essence", FluidAmounts.BUCKET * 0.5).toJson()
        ]
    )
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