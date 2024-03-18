import axios from 'axios'
import { Dispatch } from 'redux'
import { TodoAction, TodoActionsTypes } from '../../types/todo'

export const fetchTodos = (page: number = 1, limit: number = 10) => {
	return async (dispatch: Dispatch<TodoAction>) => {
		try {
			dispatch({ type: TodoActionsTypes.FETCH_TODOS })
			const response = await axios.get(
				'https://jsonplaceholder.typicode.com/todos',
				{
					params: { _page: page, _limit: limit },
				}
			)
			setTimeout(() => {
				dispatch({
					type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
					payload: response.data,
				})
			}, 1000)
		} catch (error) {
			dispatch({
				type: TodoActionsTypes.FETCH_TODOS_ERROR,
				payload: `${error}`,
			})
		}
	}
}

export const setTodoPage = (page: number): TodoAction => {
	return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page }
}
