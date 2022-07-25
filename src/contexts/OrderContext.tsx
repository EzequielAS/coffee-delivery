import { useContext, createContext, ReactNode, useReducer, useCallback } from 'react'
import { OrderDetails, orderReducer } from '../reducers/order/reducer'
import { addNewProductAction } from '../reducers/order/actions'
import { INITIAL_ORDER_STATE } from '../reducers/order/utils'
import { ICoffee } from '../@types/coffee'

interface OrderContextType {
	totalProductsAddedToCart: number;
	products: ICoffee[];
	orderDetails: OrderDetails | null;
	handleAddNewProduct: (product: ICoffee) => void;
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

    const totalProductsAddedToCart = products.reduce((prev, current) => {
        return prev + current.quantity
    }, 0)

    const handleAddNewProduct = useCallback((product: ICoffee) => {
        dispatch(addNewProductAction(product))
    }, [])

    return (
        <OrderContext.Provider value={{ 
            totalProductsAddedToCart,
            products,
            orderDetails,
            handleAddNewProduct
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