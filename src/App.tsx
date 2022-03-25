import React from 'react'

import reactLogoPNG from './assets/images/react.png'
import reactLogoJPG from './assets/images/react.jpg'

import reactLogo, {
  ReactComponent as ReactLogo,
} from './assets/images/react.svg'

export const App: React.FC = () => {
  return (
    <div>
      <h1>Wellcome to React with webpack</h1>
      <img src={reactLogoPNG} alt="Logo React PNG" style={{ width: '150px' }} />
      <img src={reactLogoJPG} alt="Logo React JPG" style={{ width: '150px' }} />
      <img
        src={reactLogo}
        alt="Logo React SVG URL"
        style={{ width: '150px' }}
      />
      <div style={{ width: '150px', display: 'inline-block' }}>
        <ReactLogo />
      </div>
    </div>
  )
}

export default App
