BlockEvents.farmlandTrampled(event => {
    if(event.player.feetArmorItem == 'kubejs:anti_trample_boots'){
        event.cancel()
    }
})