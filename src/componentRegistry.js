import Button from './components/Button/Button.jsx'
import withExtra from './components/withExtra'

function mountComponent(Component) {
  return withExtra(Component)
}

const MountedButton = mountComponent(Button)

export {MountedButton as Button}
