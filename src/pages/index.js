import Layout from "../components/Layout/Layout"
import Home from "../components/Home/Home"

export default function PizzaShop({pizzas}) {
  return (
    <Layout>
      <Home pizzas={pizzas} />
    </Layout>
  )
}


export const getStaticProps = async ({params}) => {
  const res = await fetch('https://greasy-andys.herokuapp.com/pizza/')
  const pizzas = await res.json()
  
  return {
    props: {
      pizzas
    }
  }
} 


