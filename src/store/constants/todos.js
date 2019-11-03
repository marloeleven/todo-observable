import { defineAction } from 'redux-define';

export default defineAction('TODOS', ['FETCH', 'SUCCESS', 'ERROR', 'RETRY']);
