
class Card {
  constructor({name, description, damage, health}) {
    this.id = Math.floor(Math.random() * 1E6)
    this.name = name
    this.description = description
    this.damage = damage
    this.health = health
  }

  isValid() {
    const isValidName = typeof this.name === 'string' && this.name
    const isValidDescription = typeof this.description === 'string' && this.description
    const isValidDamage = typeof this.damage === 'number' && this.damage
    const isValidHealth = typeof this.health === 'number' && this.health
    return isValidName && isValidDescription && isValidDamage && isValidHealth
  }

  get card() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      damage: this.damage,
      health: this.health,
    }
  }
}

module.exports = Card
