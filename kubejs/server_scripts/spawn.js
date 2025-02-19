ServerEvents.loaded(event => {
    console.log("Hi")
    if(!event.getServer().persistentData.started) {
        var world = event.getServer().getLevel(new ResourceLocation("ad_astra", "earth_orbit"))
        //var structure = event.getServer().registryAccess().registryOrThrow(new ResourceLocation("minecraft", "structure")).get(new $ResourceKey(new ResourceLocation("minecraft", "structure"), new ResourceLocation("technologyinthesea", "start")))
        var structure = event.getServer().getStructureManager().get(new ResourceLocation("technologyinthesea", "space_station")).get()
        structure.placeInWorld(world, new BlockPos(-34,-1,-34), new BlockPos(-34,-1,-34), new $StructurePlaceSettings(), world.getRandom(), 2)
        event.getServer().persistentData.started = true;
    }
})

PlayerEvents.loggedIn(event => {
    if(!event.player.persistentData.started) {
        event.player.persistentData.started = true;
        event.getPlayer().teleportTo(new ResourceLocation("ad_astra", "earth_orbit"), 0, 0, 0, 0, 0);
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal("start")
        .requires(source => source.hasPermission(2))
        .then(Commands.literal("reset")
            .then(Commands.literal("player")
                .then(Commands.argument("player", Arguments.PLAYER)
                    .executes(context => {
                        player = Arguments.PLAYER.getResult(context)
                        player.playerOrException.persistentData.started = false;
                        return 0;
                    })
                )
            )
            .then(Commands.literal("world")
                .executes(context => {
                    context.getSource().getServer().persistentData.started = false;
                    return 0;
                })
            )
        )
        
    )
})