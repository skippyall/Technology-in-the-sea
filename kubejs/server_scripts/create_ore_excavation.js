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
    event.shaped(
        "createoreexcavation:vein_finder",
        [
            "  M",
            " S ",
            "S  "
        ],
        {
            "S": "minecraft:stick",
            "M": "botania:manasteel_ingot"
        }
    )
    event.shapeless(
        "createoreexcavation:vein_atlas",
        [
            "minecraft:book",
            "minecraft:iron_ingot"
        ]
    )
    event.shaped(
        "createoreexcavation:sample_drill",
        [
            "C",
            "D"
        ],
        {
            "C": "minecraft:chest",
            "D": "create:mechanical_drill"
        }
    )

    event.remove("createoreexcavation:ore_vein_type/water")
})