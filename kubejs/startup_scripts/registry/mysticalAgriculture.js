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

    registerCrop('magnetiteOre', CropTier.ONE, CropType.RESOURCE, CropTextures.ROCK_CROP_TEXTURES, 0x9d9d9d, 'gtceu:raw_magnetite', "Magnetite")
})