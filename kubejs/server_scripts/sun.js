// priority: 0
const $ResourceKey = Java.loadClass(`net.minecraft.resources.ResourceKey`)

PlayerEvents.tick(event => {
    let player = event.getPlayer();
    let light = event.getLevel().getBrightness("sky", new BlockPos(player.getBlockX(), player.getBlockY(), player.getBlockZ()));
    if(light > 10) {
        player.attack(event.getLevel().damageSources().source($ResourceKey.create(new ResourceLocation("minecraft", "damage_type"), new ResourceLocation("technologyinthesea","sun"))), 4);
    }
});