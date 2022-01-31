import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const pizzas = [
    { 
      id: '1',
      name: 'Cheese Pizza',
      slug: 'cheese-pizza',
      toppings: [
        'mozzarella cheese'
      ],
      image:  "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80",
      price: 9.99
    },
    { 
      id: '2',
      name: 'Hawaiian Pizza',
      slug: 'hawaiian-pizza',
      toppings: [
        'mozzarella cheese', 'pineapple', 'ham'
      ],
      image:  "https://images.unsplash.com/photo-1597715469889-dd75fe4a1765?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      price: 9.99
    },
    { 
      id: '3',
      name: 'Pizza Vito',
      slug: 'pizza-vito',
      toppings: [
        'mozzarella cheese', 'prusciotto', 'olives'
      ],
      image:  "https://images.unsplash.com/photo-1571407921708-4202261ea9e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80",
      price: 14.99
    },
    { 
      id: '4',
      name: 'Veggie Pizza',
      slug: 'veggie-pizza',
      toppings: [
        'mozzarella cheese', 'green olives', 'sundried tomatoes'
      ],
      image:  "https://images.unsplash.com/photo-1576458088443-04a19bb13da6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      price: 10.99
    },
    { 
      id: '5',
      name: 'Pizza Bolognese',
      slug: 'pizza-bolognese',
      toppings: [
        'mozzarella cheese', 'sausage', 'pepperoni'
      ],
      image:  "https://images.unsplash.com/photo-1590083745251-4fdb0b285c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1155&q=80",
      price: 12.99
    },
    { 
      id: '6',
      name: 'Roma Pizza',
      slug: 'pizza-roma',
      toppings: [
        'mozzarella cheese', 'arugula', 'prusciotto'
      ],
      image:  "https://images.unsplash.com/photo-1584782930656-e2bc1e803fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80",
      price: 12.99
    }
  ]

  const [keyword, setKeyword] = useState('')

  const filteredPizzas = pizzas.filter(
    pizza => 
    pizza.name.toLowerCase().includes(keyword) || pizza.toppings.includes(keyword))

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase())
  }


  return (
    <div>
      <div className={styles.searchWrapper}>
        <input placeholder='Search for pizza or toppings...' className={styles.searchBar} onChange={onInputChange} />
      </div>
      <div className={styles.pizzaContainer}>
        {filteredPizzas.length < 1 ? 
          (
            <div className={styles.nopeContainer}>
              There is no pizza or topping with &apos;{keyword}&apos;.
            </div>
          ) 
          :
          (
              filteredPizzas.map(pizza => {
                return (
                  <div className={styles.pizzaItem} key={pizza.id}>
                    <Link href={`/${pizza.slug}`}>
                      <a className={styles.pizzaImageBox}>
                        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage}/>
                      </a>
                    </Link>
                    <div className={styles.pizzaText}>
                      <p className={styles.pizzaHeader}>{pizza.name}</p>
                      <p className={styles.pizzaToppings}>{pizza.toppings.map(topping => topping).join(", ")}</p>
                      <p className={styles.pizzaPrice}>€ {pizza.price}</p>
                    </div>
                  </div>
                )
              })
          )  
            
        }
      </div>
    </div>
  )
}

