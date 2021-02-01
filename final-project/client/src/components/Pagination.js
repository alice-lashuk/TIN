import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

function Pagination (props) {
    let t = props.t;
     const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.l/ props.perPage); i++) {
        pageNumbers.push(i);
        
    }
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => props.prevPage(props.current)}>{t('previous.label')}</a>
                </li>
                {pageNumbers.map(num => (
                    <li className="page-item" key={num}>
                        <a onClick={() => props.paginate(num)} href="#" className="page-link">{num}</a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link" href="#" onClick={() => props.nextPage(props.current, props.l)}>{t('next.label')}</a>
                </li>
            </ul>
        </nav>
    )
}

export default withTranslation()(Pagination);