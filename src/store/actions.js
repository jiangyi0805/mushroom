export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            // 查找之前数组中是否有该数据
            let oldProduct = context.state.cartList.find(function(item) {
                    return item.iid === payload.iid
                })
                //  判断oldProduct是否有值
            if (oldProduct) { //数量加+1
                // oldProduct.count += 1

                context.commit('addCounter', oldProduct)
                resolve("当前商品数量+1")
            } else { //添加新商品
                payload.count = 1
                    // state.cartList.push(payload)
                    // context.state.cartList.push(payload)
                context.commit('addToCart', payload)
                resolve("添加了新商品")

            }


        })

    }
}