import { 
  useContext, 
  createContext, 
  ReactNode, 
  useReducer, 
  useCallback 
} from 'react'
import { OrderDetails, orderReducer } from '../reducers/order/reducer'
import { 
  addProductAction, 
  decrementProductAction, 
  incrementProductAction, 
  removeProductAction 
} from '../reducers/order/actions'
import { INITIAL_ORDER_STATE } from '../reducers/order/utils'
import { ICoffee } from '../@types/coffee'

interface OrderContextType {
	products: ICoffee[];
	orderDetails: OrderDetails | null;
	handleAddNewProduct: (product: ICoffee) => void;
	handleRemoveProduct: (id: number) => void;
	handleIncrementProduct: (id: number) => void;
	handleDecrementProduct: (id: number) => void;
}

interface OrderContextProviderProps {
    children: ReactNode
}

const OrderContext = createContext({} as OrderContextType);

export const OrderProvider = ({ children }: OrderContextProviderProps) => {
  const [orderState, dispatch] = useReducer(
      orderReducer,
      INITIAL_ORDER_STATE
  )

  const { products, orderDetails } = orderState

  const handleAddNewProduct = useCallback((product: ICoffee) => {
    dispatch(addProductAction(product))
  }, [])

  const handleRemoveProduct = useCallback((id: number) => {
    dispatch(removeProductAction(id))
  }, [])

  const handleIncrementProduct = useCallback((id: number) => {
    dispatch(incrementProductAction(id))
  }, [])

  const handleDecrementProduct = useCallback((id: number) => {
    dispatch(decrementProductAction(id))
  }, [])

  return (
      <OrderContext.Provider value={{ 
          products,
          orderDetails,
          handleAddNewProduct,
          handleRemoveProduct,
          handleIncrementProduct,
          handleDecrementProduct
      }}>
          {children}
      </OrderContext.Provider>
  );
}

export function useOrderContext() {
  const context = useContext(OrderContext);

  if (!context) {
      throw new Error('useOrderContext must be used within an OrderProvider');
  }

  return context;
}