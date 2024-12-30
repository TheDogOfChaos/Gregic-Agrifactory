// priority: 999
//! This script loads first before ALL other startup scripts
// put your util or patches here so that you can access them at other scripts

/** A Map of blocks/items that are not functioning as intended.
 * @key The Id of the broken/bugged/problematic block/item.
 * @value A short reason of the issues that the block/item is causing. MUST be an Array.
 */
global.problematicBlocksAndItems = new Map([
    [
        'forestry:trade_station', 
        [
            "The Trade Station's GUI is",
            "currently COMPLETELY nonfunctional",
            "and §l§nCANNOT§r be closed without",
            "opening FTB Quests's GUI.",
            "(or force-closing the game)"
        ]
    ]
]);
