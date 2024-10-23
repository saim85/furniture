import { createSlice } from "@reduxjs/toolkit";

 export const cartslice = createSlice({
    name : 'cart' ,
    initialState:{
        items:[],
        totalQuantity:0,
        totalAmount : 0
    },

    reducers:{
        addtocart(state , action){
          const newitem = action.payload
          const existingItem = state.items.find((item)=> item.id === newitem.id );
          if(existingItem){
            existingItem.totalQuantity += 1;
            existingItem.totalAmount += newitem.price;
          }

          else {
            console.log(state, 'state');
            
           state.items.push({
            id:newitem.id,
             name:newitem.name,
            price:newitem.price,
            // image:newitem.image['0'],
            quantity:1,
           }
           );
            
           state.totalQuantity += 1,
           state.totalAmount += newitem.price
          }
        }
    }
})


export const { addtocart } = cartslice.actions;

export default cartslice.reducer;