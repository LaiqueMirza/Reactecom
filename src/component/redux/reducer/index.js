import { combineReducers } from 'redux';
import cartCount from './cartCount';
import selectedSize from './selectedSize';
import searchValue from './searchValue';

const allReducers = combineReducers({
    cartCount,
    selectedSize,
    searchValue
})

export default allReducers;