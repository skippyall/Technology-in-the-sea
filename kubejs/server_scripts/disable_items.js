const disable_items = [
    "wormhole:coal_generator",
    "ad_astra:coal_generator"
];

ServerEvents.recipes(event => {
    disable_items.forEach((value) => {
        event.remove({output:value});
    });
});

