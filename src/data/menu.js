/**
 * Menu data – 5 selectable sections. Update names/prices from menu board photos as needed.
 */

export const MENU_SECTION_IDS = {
  HOT_BOX: 'hot-box',
  PIZZA: 'pizza',
  BASKETS: 'baskets',
  DRINKS: 'drinks',
  CONVENIENCE: 'convenience',
}

export const menuSections = [
  {
    id: 'hot-box',
    name: 'Hot Box Food',
    type: 'hot-box',
    items: [
      { name: 'Hot box selections', description: 'Rotating hot items' },
      { name: 'Chicken tenders', description: 'Crispy tenders' },
      { name: 'Hot wings', description: 'Spicy or mild' },
      { name: 'Croissant sandwich', description: 'Flaky croissant with hot fillings' },
    ],
  },
  {
    id: 'pizza',
    name: 'Pizza (Hunts Brothers)',
    type: 'pizza',
    heroImageKey: 'huntsPizza',
    menuImageKey: 'pizzaMenu',
    sizes: ['Slice', 'Small', 'Medium', 'Large', 'XL'],
    toppings: ['Pepperoni', 'Sausage', 'Bacon', 'Mushrooms', 'Onion', 'Green pepper', 'Black olives', 'Jalapeños', 'Extra cheese'],
    specialty: ['Cheese', 'Pepperoni', 'Supreme', 'Meat Lovers', 'Hawaiian', 'Veggie'],
  },
  {
    id: 'baskets',
    name: 'Baskets',
    type: 'baskets',
    items: [
      { name: 'Chicken Basket', label: 'Served hot & ready', imageKey: 'chickenBasket' },
      { name: 'Quesadilla Basket', label: 'Served hot & ready', imageKey: 'quesadillaBasket' },
    ],
  },
  {
    id: 'drinks',
    name: 'Drinks',
    type: 'drinks',
    groups: [
      { name: 'Fountain Drinks', items: ['Multiple sizes', 'Cups available at counter'] },
      { name: 'Energy Drinks', items: ['Assorted brands', 'Cans and bottles'] },
      { name: 'Beer', items: ['Beer cooler selection', 'ID required'] },
    ],
  },
  {
    id: 'convenience',
    name: 'Convenience Items',
    type: 'convenience',
    items: [
      { name: 'Snacks & candy' },
      { name: 'Chips' },
      { name: 'Milk, bread & basics' },
      { name: 'Everyday drive-thru convenience' },
    ],
  },
]
