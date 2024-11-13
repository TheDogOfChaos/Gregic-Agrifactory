MysticalAgricultureStartupEvents.crop(event=>{
    /**
     * Registers a new crop with Mystical Agriculture.
     *
     * @param {string} cropName
     * @param {CropTier_} cropTier
     * @param {CropType_} cropType
     * @param {CropTextures_} cropTextures
     * @param {int} cropColour
     * @param {string} cropIngredient
     * @param {string} displayName
     */
    function registerCrop(cropName, cropTier, cropType, cropTextures, cropColour, cropIngredient, displayName){
        event.registry.register(new Crop(
            `kubejs:${cropName}`,
            cropTier,
            cropType,
            cropTextures,
            cropColour,
            cropIngredient
        ).setDisplayName(Text.ofString(displayName)))
        
    }

    registerCrop('coal_ore', CropTier.ONE, CropType.RESOURCE, CropTextures.ROCK_CROP_TEXTURES, 0x393e41, 'gtceu:raw_coal', "Coal Ore")
    registerCrop('iron_ore', CropTier.ONE, CropType.RESOURCE, CropTextures.ROCK_CROP_TEXTURES, 0xfedec8, 'minecraft:raw_iron', "Iron Ore")
    registerCrop('copper_ore', CropTier.ONE, CropType.RESOURCE, CropTextures.ROCK_CROP_TEXTURES, 0xe97a52, 'minecraft:raw_copper', "Copper Ore")
    registerCrop('magnetite_ore', CropTier.TWO, CropType.RESOURCE, CropTextures.ROCK_CROP_TEXTURES, 0x9d9d9d, 'gtceu:raw_magnetite', "Magnetite")

})