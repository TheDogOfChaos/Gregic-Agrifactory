ItemEvents.tooltip(event => {
    global.problematicBlocksAndItems.forEach((value, key, map)=>{
        console.log(map, key, value)
        event.add(key, Text.red(value))
    });
})