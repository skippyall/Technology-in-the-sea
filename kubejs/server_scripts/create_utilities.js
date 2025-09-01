//priority: 0
ServerEvents.recipes(event => {
    event.remove({output: "createutilities:void_steel_ingot"})
    event.recipes.createoreexcavation.vein("Void Steel Vein", "createutilities:void_steel_ingot")
        .placement(8, 128, 65087256)
        .biomeWhitelist("minecraft:is_overworld")
        .id("technologyinthesea:void_steel_vein")

    event.recipes.createoreexcavation.drilling("createutilities:void_steel_ingot", "technologyinthesea:void_steel_vein", 2000)
        .fluid(Fluid.of("technologyinthesea:void_essence", FluidAmounts.BUCKET * 0.05))
})