ItemEvents.modification(event => {
    event.modify('gtceu:wrought_iron_ingot', item => {
      item.maxStackSize = 64
      item.fireResistant = true
      item.rarity = "UNCOMMON"
    })
    event.modify('minecraft:iron_ingot', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
      })
    event.modify('gtceu:charcoal_dust', item => {
        item.maxStackSize = 64
        item.fireResistant = true
        item.rarity = "UNCOMMON"
      })
    // Adding stack size to lumisene bottles
    event.modify('supplementaries:lumisene_bottle', item => {
        item.maxStackSize = 64
      })
  })