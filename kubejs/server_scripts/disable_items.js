const disable_items = [
    "ad_astra:coal_generator",
    "ae2:vibration_chamber"
];

ServerEvents.recipes(event => {
    disable_items.forEach((value) => {
        event.remove({output:value});
    });
});