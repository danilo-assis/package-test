import React from 'react'

import { ExampleComponent } from 'package-test'
import 'package-test/dist/index.css'

const App = () => {
  return (
  <>
  <ExampleComponent text="Create React Library Example 😄" bgColor="theme1"/>
  <ExampleComponent text="Create React Library Example 😄" bgColor="theme2"/>
  </>
  );
}

export default App
