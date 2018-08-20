export const addOrder = (state, val) => ({ orders: [...state.orders , val] })
export const deleteLastOrder = (state,val) => {
    const newOrders = [... state.orders]; 
    newOrders.pop();
    return { 
        orders: newOrders 
    }
} 