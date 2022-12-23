import React from 'react'

const ReactVideoContext = React.createContext({
  isDark: true,
  activeNavbar: 'Home',
  changeTheme: () => {},
  changeActiveNavbar: () => {},
})

export default ReactVideoContext
