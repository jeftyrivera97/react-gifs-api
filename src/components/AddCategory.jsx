import { useState } from "react"
import PropTypes from 'prop-types'


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) {
            return;
        }
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)} >
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}

