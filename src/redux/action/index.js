// for adding item to cart
export const addCart = (product) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

// for deleting item from cart
export const delCart = (product) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}
