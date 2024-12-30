ItemEvents.tooltip(event => {
    // Denote broken stuff.
    global.problematicBlocksAndItems.forEach((value, key)=>{
        event.addAdvanced(key, (itemStack, isAdvanced, text) => {
            if(!event.shift) {
                text.add(1, Text.red(`This ${itemStack.isBlock?"block":"item"} is currently broken.`))
                text.add(2, Text.red("Hold SHIFT for more details."))
            } else {
                value.forEach((item, index) =>{
                    text.add(index + 1, Text.red(item))
                })
            }
        })
    });
})