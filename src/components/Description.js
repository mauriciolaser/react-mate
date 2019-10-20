import React from 'react'


export default function Description() {

    const MainDescription = 'Bodega MATE es una plataforma de arte, moda y diseño con la visión de poner en valor la herencia latinoamericana.';
    const SecondaryDescription = 'Con casi 60 marcas y 11 países de la región, Bodega MATE tiene como objetivo ayudar a que el museo MATE alcance la autosostenibilidad continue con su misión educativa y cultural como espacio de exhibiciones y como catalizador de la industria creativa local.';

    return (
        <div style={{ width: '100%', backgroundColor: '#111111', display: 'flex', justifyContent: 'center'}}>
            <div className='App-description' style={{ display: 'flex', flexDirection: 'column', color: 'pink', maxWidth: 1100, backgroundColor: '#111111', height: '100%', marginTop: 0, alignItems: 'center'}}>
    
                <div style={{width: '75%'}}>
                    <h3 style={{ flex: 1, padding: 10, whiteSpace: 'pre-line', fontWeight: 'bold'}}>
                            {MainDescription}
                    </h3>
                    <h5 style={{ flex: 1, padding: 10, whiteSpace: 'pre-line', fontWeight: 'bold' }}>
                        {SecondaryDescription}
                    </h5>
                </div>
    
            </div>
        </div>
    )
}
