const disable_items = [
    "ad_astra:coal_generator",
    "ad_astra:compressor",
    "ae2:vibration_chamber",
    "ae2:charger"
];

ServerEvents.recipes(event => {
    disable_items.forEach((value) => {
        event.remove({output:value});
    });
});