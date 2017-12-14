import { combineReducers } from 'redux';
import notes from './notes';
import nextId from './nextId';
import filter from './filter';
import editStatus from './editStatus';

const rootReducer = combineReducers({
  notes,
  nextId,
  filter,
  editStatus,
});

export default rootReducer;
