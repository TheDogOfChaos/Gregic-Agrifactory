PlayerEvents.loggedIn( event => {
    if(!event.player.stages.has('starting_kit')){
        event.player.stages.add('starting_kit');
        event.player.give()
    }
})