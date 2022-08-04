import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text, bgColor }) => {
  return <div className={styles[bgColor]}>Example Component: {text}</div>
}
