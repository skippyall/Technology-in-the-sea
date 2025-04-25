ServerEvents.recipes(event => {
    createRecipe(event, "create:mixing", 
        [
            Item.of("minecraft:diamond"),
            Item.of("minecraft:quartz")
        ],
        [
            Item.of("ae2:certus_quartz_crystal")
        ]
    )
})