import React, {useState} from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const InputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <div className="campo">
                <input
                    type="text"
                    value={inputValue}
                    onChange={ InputValueChange }
                />
            </div>

        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;