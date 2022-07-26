import React from 'react'
import Button from '../Button/Button'
import RadioInput from '../Input/RadioInput'
import TextInput from '../Input/TextInput'
import style from './Form.module.css'

const Form = () => {
  const { sectionContent, text, algoForm, radioBtnContainer } = style

  return (
    <div className={sectionContent}>
      <div className={text}>
        <h2 style={{ marginBottom: '1.5em' }}>Ajude o algorítimo a ser mais certeiro</h2>

        <p style={{ fontSize: '14px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend.<br />
          <br />

          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
        </p>

      </div>

      <form className={algoForm}>
        <TextInput label='Seu nome:' id='inputName' />
        <TextInput label='E-mail:' id='inputEmail' />
        <TextInput label='CPF:' id='inputCPF' />

        <div className={radioBtnContainer}>
          <RadioInput value='Masculino' />
          <RadioInput value='Femenino' />
        </div>

        <Button type='secondary' text='Enviar' />
      </form>
    </div>

  )
}

export default Form