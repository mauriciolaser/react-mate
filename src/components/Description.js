import React from 'react'


export default function Description() {

    const MainDescription = 'Bodega MATE es una plataforma de arte, moda y diseño con la visión de poner en valor la herencia latinoamericana.';
    const SecondaryDescription = 'Con casi 60 marcas y 11 países de la región, Bodega MATE tiene como objetivo ayudar a que el museo MATE alcance la autosostenibilidad continue con su misión educativa y cultural como espacio de exhibiciones y como catalizador de la industria creativa local.';

    return (
        <div className='wrapper-child' >
            <div className='child-column'>
                <div className='child-content' >
                    <div className='content-text'>
                        <h3 style={{ flex: 1, padding: 10, whiteSpace: 'pre-line', fontWeight: 'bold'}}>
                                {MainDescription}
                        </h3>
                        <h5 style={{ flex: 1, padding: 10, whiteSpace: 'pre-line', fontWeight: 'bold' }}>
                            {SecondaryDescription}
                        </h5>
                    </div>
                </div>
    
            </div>
        </div>
    )
}
