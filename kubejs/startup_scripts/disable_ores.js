WorldgenEvents.remove(event => {
    event.removeOres(props => {props.worldgenLayer = "underground_ores"})
})

console.log("Script was called!");
