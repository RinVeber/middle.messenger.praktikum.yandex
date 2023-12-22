import store, { type IState, StoreEvents } from './Store'
import type Block from './Block/Block'

const withStore = (withStateToProps: (data: IState) => any) => (Component: typeof Block) => class extends Component {
  constructor(propsWithChildren: any) {
    super({ ...propsWithChildren, ...withStateToProps(store.getState()) })

    store.on(StoreEvents.Update, () => {
      const newProps = withStateToProps(store.getState())

      this.setProps(newProps)
    })
  }
}

export default withStore
