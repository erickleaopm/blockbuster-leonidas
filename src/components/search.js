import { Component } from '../lib/react/index.js'

import Form from './form.js'
import Input from './input.js'
import Button from './button.js'
import store from '../store.js'
import { SEARCH_MOVIE, SET_FILTER } from '../actions/index.js'

class Search extends Component {
  handleSubmit = event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const query = formData.get('title')
    if (query) {
      return store.dispatch({
        type: SEARCH_MOVIE,
        payload: query,
      })
    }
    return store.dispatch({
      type: SEARCH_MOVIE,
      payload: 'all',
    })
  }

  render() {
    return Form({
      id: 'search-form',
      onSubmit: this.handleSubmit,
      children: [
        Input({
          placeholder: 'Escribe tu película favorita',
          name: 'title',
          type: 'text',
          title: 'Busca una película',
        }),
        Button(null, 'Buscar'),
      ],
    })
  }
}

export default Search
