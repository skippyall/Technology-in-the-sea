const teamDirections = [
    [100, 0],
    [0, 100],
    [-100, 0],
    [0, -100]
]
ServerEvents.loaded(event => {
    var server = event.getServer()
    if(!server.persistentData.state || server.persistentData.state == "before_start") {
        var world = event.getServer().getLevel(new ResourceLocation("ad_astra", "earth_orbit"))
        var structure = event.getServer().getStructureManager().get(new ResourceLocation("technologyinthesea", "space_station")).get()
        structure.placeInWorld(world, new BlockPos(-34,-1,-34), new BlockPos(-34,-1,-34), new $StructurePlaceSettings(), world.getRandom(), 2)
        event.getServer().persistentData.started = true;
    }
})

PlayerEvents.loggedIn(event => {
    let player = event.getPlayer()
    if(!player.persistentData.state || player.persistentData.state == "before_start") {
        player.persistentData.state = "start_space_station";
        player.teleportTo(new ResourceLocation("ad_astra", "earth_orbit"), 0, 0, 0, 0, 0);
    }
})

PlayerEvents.tick(event => {
    var player = event.getPlayer()
    if(player.persistentData.state == "start_falling") {
        if(player.level.getDimensionKey().getPath() == "ad_astra:earth_orbit") {
            player.setMotionY(-1)
            if(player.getY() < -100) {
                const team = player.persistentData.team
                const direction = teamDirections[team]
                player.teleportTo("minecraft:overworld", direction[0], 600, direction[1], 0, 0)
                player.inventory.clear()
                player.setEquipment("feet", Item.of("create:diving_boots").enchant("binding_curse", 1))
                player.potionEffects.add("water_breathing", 1200)
                player.potionEffects.add("technologyinthesea:sun_protection", 1200)
            }
        } else {
            if(player.onGround()) {
                player.inventory.clear()
                player.persistentData.falling = false;
            }
        }
        
    }
})

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal("start")
        .requires(source => source.hasPermission(2))
        .then(Commands.literal("setstate")
            .then(Commands.literal("player")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .then(Commands.argument("state", Arguments.STRING.create(event))
                        .executes(context => {
                            player = Arguments.PLAYER.getResult(context)
                            state = Arguments.STRING.getResult(context)
                            player.persistentData.state = state;
                            return 0;
                        })
                    )
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