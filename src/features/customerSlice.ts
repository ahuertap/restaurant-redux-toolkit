import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  food: string[];
};

interface CustomerState {
  value: Customer[];
};

interface AddFoodToCustomerPayload {
  id: string;
  food: string;
};

const initialState: CustomerState = {
  value: [],
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    addCostumer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomerPayload>) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    }
  }
});

export const { addCostumer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
