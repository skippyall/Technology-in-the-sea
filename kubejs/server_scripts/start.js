ServerEvents.recipes(event => {
    event.shaped(
        "minecraft:cobblestone", 
        [
            "##",
            "##"
        ],
        {
            "#":"minecraft:gravel"
        }
    )

    event.shaped(
        "minecraft:andesite", 
        [
            "GC",
            "CG"
        ],
        {
            "G":"minecraft:gravel",
            "C":"minecraft:cobblestone"
        }
    )

    event.shaped(
        "minecraft:bamboo_block", 
        [
            "SK",
            "KS"
        ],
        {
            "K":"minecraft:dried_kelp",
            "S":"minecraft:sea_pickle"
        }
    )
})