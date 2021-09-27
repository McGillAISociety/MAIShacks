import React from 'react';
import styles from '../../styles/Button.module.scss';

// TODO: add an href prop so links can be opened sans JS?
export default function Button({ onClick, children, expand, disabled }) {
    return <button className={`card-border ${styles['button']}
                    ${expand && styles['expand']}
                    ${disabled ? styles['disabled'] : 'hover-brighten hover-grow-small'}`}
                    onClick={() => { if (!disabled) onClick() }}
            >
        {children}
    </button>
}