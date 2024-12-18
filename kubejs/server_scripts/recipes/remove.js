// priority: -999
//! THIS RUNS AFTER EVERY OTHER SERVER SCRIPT, TO CATCH ANY STRAGGLERS

ServerEvents.recipes(event => {
    // Create
    event.remove({output:"create:steam_engine"});
    event.remove({output:"create:windmill_bearing"});
    event.remove({output:"create:hand_crank"});
    event.remove({output:"create:water_wheel"});
    event.remove({output:"create:large_water_wheel"});

    // The absolute ENTIRITY of Gregtech.
    event.remove({mod:"gtceu"});
})