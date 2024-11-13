JEIEvents.hideItems(event => {//begin the massacre

    //* Greate/Create
    if (false) { // greate is borked rn, wait until next release
        event.hide(/greate:large_.*_cogwheel/)
        event.hide(/greate:large_.*_.*_cogwheel/)
        event.hide(/greate:large_.*_.*_.*_cogwheel/)

        event.hide(/greate:.*_crushing_wheel/)
        event.hide(/greate:.*_.*_crushing_wheel/)
        event.hide(/greate:.*_.*_.*_crushing_wheel/)

        event.hide(/greate:.*_encased_fan/)
        event.hide(/greate:.*_.*_encased_fan/)
        event.hide(/greate:.*_.*_.*_encased_fan/)

        event.hide(/greate:.*_mechanical_press/)
        event.hide(/greate:.*_.*_mechanical_press/)
        event.hide(/greate:.*_.*_.*_mechanical_press/)

        event.hide(/greate:.*_mechanical_mixer/)
        event.hide(/greate:.*_.*_mechanical_mixer/)
        event.hide(/greate:.*_.*_.*_mechanical_mixer/)

        event.hide(/greate:.*_millstone/)
        event.hide(/greate:.*_.*_millstone/)
        event.hide(/greate:.*_.*_.*_millstone/)

        event.hide(/greate:.*_mechanical_saw/)
        event.hide(/greate:.*_.*_mechanical_saw/)
        event.hide(/greate:.*_.*_.*_mechanical_saw/)
    }
    event.hide(['create:water_wheel', 'create:large_water_wheel', 'create:hand_crank', 'create:steam_engine', 'create:windmill_bearing']) //NoMoRPM

    //* Mystical Agriculture
    // all Mystical Agriculture seeds.
    let maSeeds = Item.getTypeList.filter(id => (id.includes("mysticalagriculture") && id.includes("seeds")))

    // Ore seeds created in startup_scripts\registry\mysticalAgriculture.js
    // this array will be expanded over time as new ore seeds are added
    let oreSeeds = ['mysticalagriculture:magnetite_ore_seeds']

    // we want to keep the ore seeds, so filter them out of maSeeds
    maSeeds = maSeeds.filter(item => !oreSeeds.includes(item))

    // KILL EM ALL!!
    maSeeds.forEach(item => {event.hide(item)});
})

JEIEvents.addItems(event => {
    
})