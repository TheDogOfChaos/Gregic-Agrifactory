ServerEvents.recipes(event => {
    // Create
    event.remove({output:"create:steam_engine"})
    event.remove({output:"create:windmill_bearing"})
    event.remove({output:"create:hand_crank"})
    event.remove({output:"create:water_wheel"})
    event.remove({output:"create:large_water_wheel"})

    // Mystical Agriculture 
    event.remove({type: "mysticalagriculture:awakening"})
    event.remove({type: "mysticalagriculture:infusion"})
    event.remove({type: "mysticalagriculture:enchanter"})
    event.remove({type: "mysticalagriculture:soul_extraction"})
    event.remove({type: "mysticalagriculture:soulium_spawner"})
})