import React from 'react'

import { ExampleComponent } from 'package-test'
import 'package-test/dist/index.css'

const App = () => {
  return (
  <>
  <ExampleComponent text="Create React Library Example 😄" bgColor="red"/>
  <ExampleComponent text="Create React Library Example 😄" bgColor="blue"/>
  </>
  );
}

export default App
