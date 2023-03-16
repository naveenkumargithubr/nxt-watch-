import React from 'react'

const ReactVideoContext = React.createContext({
  isDark: true,
  activeNav: 'HOME',
  changeTheme: () => {},
  listOfSavedVideos: [],
  addSavedVideo: () => {},
  removeSavedVideo: () => {},
  changeActiveNav: () => {},
})
export default ReactVideoContext
