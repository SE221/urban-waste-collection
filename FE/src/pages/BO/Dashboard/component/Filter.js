import React from 'react';
import './Filter.css'

export const Filter = ({filter, setFilter}) => {
    return (
        <span>
            <input
                value={filter || ''}
                placeholder={'Search worker here...'}
                onChange={e => setFilter(e.target.value)}
            />
        </span>
    )
};