import React from 'react'
// This function takes a component...
const withExtra = (WrappedComponent) => (props) => {
  // ...and returns another component...
  return (
      <WrappedComponent  {...props} message={'injected'}/>
  )
}

export default withExtra