// priority: 999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts

/** A Map of blocks/items that are not functioning as intended.
 * @key The Id of the broken/bugged/problematic block/item.
 * @value A short reason of the issues that the block/item is causing.
 */
global.problematicBlocks = new Map([
    ['forestry:trade_station', 'Its GUI is currently nonfunctional, and §l§nCANNOT§r be closed without opening another GUI such as FTB Quests (ftb chunks/teams do not work as a substitute for this).']
]);
