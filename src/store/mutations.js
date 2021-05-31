export default {
    // mutations 中的每个方法尽可能完成的事件单一一点
    addCounter(state, payload) {
        payload.count += 1

    },
    addToCart(state, payload) {
        // 购物车选中状态，模型发生改变，界面跟着发生改变
        payload.checked = true
        state.cartList.push(payload)

    }


}