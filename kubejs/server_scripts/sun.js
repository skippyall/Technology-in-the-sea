// priority: 0

const SUN_DAMAGE_KEY = $ResourceKey.create(new ResourceLocation("minecraft", "damage_type"), new ResourceLocation("technologyinthesea","sun"))
const OVERWORLD_KEY = new ResourceLocation("minecraft", "overworld")

PlayerEvents.tick(event => {
    if(event.getLevel().getDimensionKey().location() == OVERWORLD_KEY) {
        let player = event.getPlayer();
        let light = event.getLevel().getBrightness("sky", new BlockPos(player.getBlockX(), player.getBlockY(), player.getBlockZ())) - event.getLevel().getSkyDarken();
        if(light > 10) {
            let ingredient = Ingredient.of("#ad_astra:space_suit_items").or(Ingredient.of("#ad_astra:netherite_space_suit_items"))
            let pass = true
            player.getArmorSlots().forEach(item => {
                if(!(ingredient.test(item) || item.hasEnchantment("technologyinthesea:sun_protection", 1))) {
                    pass = false;
                }
            })
            if(!pass && !player.hasEffect("technologyinthesea:sun_protection")) {
                player.attack(event.getLevel().damageSources().source(SUN_DAMAGE_KEY), 2);
            }
        }
    }
});