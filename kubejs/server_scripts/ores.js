ServerEvents.recipes(event => {
    event.remove({"id": "create:milling/gravel"})
    createRecipe(
        event,
        "create:milling",
        [
            {
                "item": "minecraft:gravel"
            }
            
        ],
        [
            {
                "item": "create:zinc_nugget",
                "chance": 0.05
            },
            {
                "item": "create:copper_nugget",
                "chance": 0.05
            }
        ],
        {
            "processingTime": 10
        }
    )
})