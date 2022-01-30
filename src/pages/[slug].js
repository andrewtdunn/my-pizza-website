import React from 'react'
import styles from '../styles/Pizza.module.css'
import Head from 'next/head'
import Link from 'next/link'

export default function Pizza({pizza, otherPizzas}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{pizza.name}</title>
      </Head>
      <div className={styles.pizzaWrapperLeft}>
        <img src={pizza.image} alt={pizza.name} className={styles.pizzaImage} />
      </div>
      <div className={styles.pizzaWrapperRight}>
        <div className={styles.pizzaInfo}>
          <p className={styles.pizzaTitle}>{pizza.name}</p>
          <p className={styles.pizzaDescription}>{pizza.description}</p>
          <p className={styles.pizzaPrice}>€ {pizza.price}</p>
          <p className={styles.pizzaToppings}>{pizza.toppings.map(topping=> topping).join(", ")}</p>
        </div>
        <div className={styles.otherPizzasWrapper}>
          {otherPizzas.map(otherPizza => {
            return (
              <div className={styles.otherPizzas} key={otherPizza.id}>
                <Link href={`/${otherPizza.slug}`}>
                  <a>
                    <img src={otherPizza.image} alt={otherPizza.name} />
                    <p>{otherPizza.name}</p>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {

  const pizzas = [
    { 
      id: '1',
      name: 'Cheese Pizza',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
      slug: 'pizza-roma',
      toppings: [
        'mozzarella cheese', 'arugula', 'prusciotto'
      ],
      image:  "https://images.unsplash.com/photo-1584782930656-e2bc1e803fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80",
      price: 12.99
    }
  ]

  const paths = pizzas.map(
    pizza => ({
      params: { slug: `${pizza.slug}`}
    })
  );
  return {
    paths,
    fallback: false,
  }
  
}

export const getStaticProps = async ({params}) => {
  const pizzas = [
    { 
      id: '1',
      name: 'Cheese Pizza',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
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
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et semper libero.',
      slug: 'pizza-roma',
      toppings: [
        'mozzarella cheese', 'arugula', 'prusciotto'
      ],
      image:  "https://images.unsplash.com/photo-1584782930656-e2bc1e803fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1662&q=80",
      price: 12.99
    }
  ]

  const pizza = pizzas.filter(pizza => pizza.slug.includes(params.slug))
  const otherPizzas = pizzas.filter(pizza => pizza.slug !== params.slug)

  return {
    props: {
      pizza: pizza[0],
      otherPizzas: otherPizzas.sort(() => Math.random() - Math.random()).slice(0, 3)
    }
  }
} 
