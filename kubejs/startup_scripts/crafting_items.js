const items = [
    "crushed_dirty_desh",
    "crushed_clean_desh"
]

StartupEvents.registry("item", event => {
    for(const item of items) {
        event.create("technologyinthesea:" + item)
    }
    
})