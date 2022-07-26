import './styles/App.css'
import { useEffect, useState } from 'react'
import Form from './components/Form/AlgorithmForm'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import TextInput from './components/Input/TextInput'

function App() {
  const [productsList] = useState([])
  const [page, setPage] = useState('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')


  const requestPage = async () => {
    const response = await fetch(page)

    const json = await response.json()
    const { products, nextPage } = json

    setPage(`https://${nextPage}`)

    // console.log(page)
    // console.log(nextPage)
    // console.log(products)

    productsList.push(...products.map((element) => <Product key={Math.random() * 255} productData={element} />))
  }

  useEffect(() => {
    requestPage()
  }, [])

  return (
    <div className="App">
      <Header />

      <section className='form-section' id="ajude-o-algoritmo">
        <Form />
      </section>

      <section className='produtos-section' id='produtos'>
        <Title text='Sua seleção especial' />

        <div className='product-grid'>
          {productsList}
        </div>

        <Button type='secondary' text='Ainda mais produtos aqui!' clickHandler={requestPage} />
      </section>

      <section className='newsletter-section' id='compartilhe'>
        <Title text='Compartilhe a novidade' />

        <p style={{ margin: '50px' }}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

        <form className='newsletter-form'>
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <TextInput label='Nome do seu amigo:' id='' />
            <TextInput label='E-mail:' id='' />
          </div>

          <Button type='secondary' text='Enviar agora' />
        </form>
      </section>

      <Footer />
    </div>
  )
}

export default App
