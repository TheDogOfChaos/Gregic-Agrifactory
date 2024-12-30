// priority: -999
//! THIS RUNS AFTER EVERY OTHER SERVER SCRIPT, TO CATCH ANY STRAGGLERS

ServerEvents.recipes(event => {
    //? Create
    event.remove({output:"create:steam_engine"});
    event.remove({output:"create:windmill_bearing"});
    event.remove({output:"create:hand_crank"});
    event.remove({output:"create:water_wheel"});
    event.remove({output:"create:large_water_wheel"});

    //? The absolute ENTIRITY of Gregtech.
    event.remove({mod:"gtceu"});

    //? Remove recipes for problematic items/blocks
    //! WARNING FOR CONTRIBUTORS:
    //! Even though it's unused, DO NOT remove the 'value' parameter of the lambda!
    //! If you do, JavaScript will treat the 'key' parameter as the **VALUE** of each key,
    //! which WILL cause KubeJS to throw exceptions when you try to run '/kjs reload server_scripts'.
    //! Save yourselves some headaches. Leave 'value' as-is.
    global.problematicBlocksAndItems.forEach((value, key)=>{
        event.remove({output:key})
    });
})