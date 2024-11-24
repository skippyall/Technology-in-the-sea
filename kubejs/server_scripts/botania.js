function botaniaRecipe(event, type, input, output, extra) {
    event.custom(
        Object.assign(
            {
                "type": type,
                "ingredients": input,
                "output": output
            },
            extra
        )
    )
}

ServerEvents.recipes(event => {
    event.remove({id:"botania:petal_apothecary/bubbell"})
    botaniaRecipe(
        event,
        "botania:petal_apothecary",
        [
            {
                "tag": "botania:petals/cyan"
            },
            {
                "tag": "botania:petals/cyan"
            },
            {
                "tag": "botania:petals/light_blue"
            },
            {
                "tag": "botania:petals/light_blue"
            },
            {
                "tag": "botania:petals/blue"
            },
            {
                "tag": "botania:petals/blue"
            }
        ],
        {
            "item": "botania:bubbell"
        },
        {
            "reagent": {
                "tag": "botania:seed_apothecary_reagent"
            }
        }
    )
})