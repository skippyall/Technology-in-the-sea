ServerEvents.recipes(event => {
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
                "chance": 0.15
            },
            {
                "item": "create:copper_nugget",
                "chance": 0.15
            }
        ]
    )
    createRecipe(
        event,
        "create:mixing",
        [
            {
                "item": "minecraft:dried_kelp",
            },
            {
                "item": "minecraft:dried_kelp",
            },
            {
                "item": "minecraft:andesite",
            }
        ],
        [
            {
                "item": "minecraft:tuff"
            }
        ]
    )
})