ServerEvents.recipes(event => {
    event.remove({output: "create_new_age:copper_wire"})
    event.remove({output: "create_new_age:overcharged_iron_wire"})
    event.remove({output: "create_new_age:overcharged_golden_wire"})

    event.shapeless(
        "create_new_age:copper_wire", 
        ["createaddition:copper_spool"]
    )
    event.shapeless(
        "create_new_age:overcharged_golden_wire", 
        ["createaddition:gold_spool"]
    )
    event.shaped(
        "create_new_age:overcharged_iron_wire",
        [
            " W ",
            "WSW",
            " W "
        ], {
            "W": "createaddition:iron_wire",
            "S": "createaddition:spool"
        }
    )

    createRecipe(event, "createaddition:rolling", 
        [
            Item.of("create_new_age:overcharged_diamond")
        ],
        [
            Item.of("technologyinthesea:diamond_wire")
        ]
    )
    event.shaped(
        "create_new_age:overcharged_diamond_wire",
        [
            " W ",
            "WSW",
            " W "
        ], {
            "W": "technologyinthesea:diamond_wire",
            "S": "createaddition:spool"
        }
    )
})