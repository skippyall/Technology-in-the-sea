

WorldgenEvents.remove(event => {
    
    event.removeOres(props => {
        console.log("Script was called!")
        props.worldgenLayer ="underground_ores"
        props.blocks = '/.+ore/'
    })
})


