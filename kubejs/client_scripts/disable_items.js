const disable_items = [
    "wormhole:coal_generator",
    "ad_astra:coal_generator"
];

REIEvents.hide("item", event => {
    disable_items.forEach(value => {
        event.hide(value);
    });
});