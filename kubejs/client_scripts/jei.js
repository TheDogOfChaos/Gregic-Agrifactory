JEIEvents.hideItems(event => {//begin the massacre

    // Greate/Create
    if (Platform.isLoaded('greate') && false /*DO NOT SET TO TRUE ATM*/) { // greate
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
})

JEIEvents.addItems(event => {
    // all Mystical Agriculture seeds.
    let maSeeds = Item.getTypeList.filter(id => (id.includes("mysticalagriculture") && id.includes("seeds")))

    let oreSeeds = ['mysticalagriculture:magnetite_ore_seeds']

    maSeeds = maSeeds.filter(item => !maSeeds.includes(item))
    
    maSeeds.forEach(item => {event.hide(item)});
})