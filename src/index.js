import React from 'react'
import styles from './styles.scss'
import DummyComponent from './components/DummyComponent'
import SmartComponent from './components/SmartComponent'

const ExampleComponent = ({ text, bgColor }) => {
  return (
    <div className={styles[bgColor]}>
      Example Component: {text}
      <DummyComponent />
      <SmartComponent />
    </div>
  )
}

export { ExampleComponent, DummyComponent, SmartComponent }
export default { ExampleComponent, DummyComponent, SmartComponent }
