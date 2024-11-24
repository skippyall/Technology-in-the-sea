ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event
    event.register(Commands.literal("spawnstart")
        .executes(context => {
            context.getSource().getLevel()
        })
    )
})