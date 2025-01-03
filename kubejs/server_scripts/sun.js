// priority: 0


const SUN_DAMAGE_KEY = $ResourceKey.create(new ResourceLocation("minecraft", "damage_type"), new ResourceLocation("technologyinthesea","sun"))
const OVERWORLD_KEY = new ResourceLocation("minecraft", "overworld")

PlayerEvents.tick(event => {
    if(event.getLevel().getDimensionKey().location() == OVERWORLD_KEY) {
        let player = event.getPlayer();
        let light = event.getLevel().getBrightness("sky", new BlockPos(player.getBlockX(), player.getBlockY(), player.getBlockZ())) - event.getLevel().getSkyDarken();
        if(light > 10) {
            player.attack(event.getLevel().damageSources().source(SUN_DAMAGE_KEY), 2);
        }
    }
});