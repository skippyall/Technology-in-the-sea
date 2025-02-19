// priority: 10
const $ResourceKey = Java.loadClass(`net.minecraft.resources.ResourceKey`)
const $StructurePlaceSettings = Java.loadClass('net.minecraft.world.level.levelgen.structure.templatesystem.StructurePlaceSettings')

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
    "tconstruct:cobalt_ore",

    "ad_astra:moon_desh_ore",
    "ad_astra:moon_iron_ore",
    "ad_astra:moon_ice_shard_ore",

    "ad_astra:mars_ice_shard_ore",
    "ad_astra:mars_ostrum_ore",
    "ad_astra:mars_iron_ore",
    "ad_astra:mars_diamond_ore",

    "ad_astra:venus_calorite_ore",
    "ad_astra:venus_coal_ore",
    "ad_astra:venus_gold_ore",
    "ad_astra:venus_diamond_ore",

    "ad_astra:glacio_ice_shard_ore",
    "ad_astra:glacio_coal_ore",
    "ad_astra:glacio_copper_ore",
    "ad_astra:glacio_iron_ore",
    "ad_astra:glacio_lapis_ore",
    
    "ad_astra:deepslate_calorite_ore",
    "ad_astra:deepslate_desh_ore",
    "ad_astra:deepslate_ostrum_ore",
    "ad_astra:deepslate_ice_shard_ore"
]