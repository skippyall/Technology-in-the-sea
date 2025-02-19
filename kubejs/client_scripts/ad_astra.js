Ponder.tags(event => {
    event.createTag("technologyinthesea:ad_astra", "ad_astra:tier_1_rocket", "Ad Astra", "To the stars")
})

Ponder.registry(event => {
    event
        .create("ad_astra:tier_1_rocket")
        .scene(
            "scene_1",
            "Description",
            (scene, util) => {
                scene.showStructure()
                scene.idle(10)

                const rocketLink = scene.world.createEntity("ad_astra:tier_1_rocket", [2.5, 1, 2.5])
                scene.world.modifyEntity(rocketLink, rocket => {
                    rocket.initiateLaunchSequence()
                })
            }
        )
})