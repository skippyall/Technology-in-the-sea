ServerEvents.tags("minecraft:worldgen/biome", event => {
    event.add("technologyinthesea:moon_biomes", "ad_astra:lunar_wastelands")
})

ServerEvents.recipes(event => {
    event.remove({output: "createoreexcavation:drilling_machine"})
    event.remove({output: "createoreexcavation:extractor"})
    event.shaped(
        "createoreexcavation:drilling_machine",
        [
            "MCM",
            "CRP",
            "GDG"
        ],
        {
            "D": "create:mechanical_drill",
            "C": "create:andesite_casing",
            "M": "botania:manasteel_ingot",
            "R": "create:rope_pulley",
            "P": "create:fluid_pipe",
            "G": "create:metal_girder"
        }
    )
    event.shaped(
        "createoreexcavation:extractor",
        [
            "MCM",
            "CRP",
            "GDG"
        ],
        {
            "D": "create:hose_pulley",
            "C": "create:andesite_casing",
            "M": "botania:manasteel_ingot",
            "R": "create:rope_pulley",
            "P": "create:mechanical_pump",
            "G": "create:metal_girder"
        }
    )

    event.recipes.createoreexcavation.vein("Desh Vein", "ad_astra:raw_desh")
        .placement(384, 64, 133023984)
        .biomeWhitelist("technologyinthesea:moon_biomes")
        .id("technologyinthesea:desh_vein")

    event.recipes.createoreexcavation.drilling("ad_astra:raw_desh", "technologyinthesea:desh_vein", 1500)
})