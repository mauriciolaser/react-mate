import React from 'react'


export default function Description() {

    const MainDescription = 'Bodega MATE es una plataforma de arte, moda\ny diseño con la visión de poner en valor la \nherencia latinoamericana.';
    const SecondaryDescription = 'Con casi 60 marcas y 11 países de la región, Bodega MATE tiene como\nobjetivo ayudar a que el museo MATE alcance la autosostenibilidad\ncontinue con su misión educativa y cultural como espacio de exhibiciones y como catalizador de la industria creativa local.';

    return (
        <div style={{ width: '100%', backgroundColor: '#111111', display: 'flex', justifyContent: 'center'}}>
            <div className='App-description' style={{ display: 'flex', flexDirection: 'column', color: 'pink', maxWidth: 1100, backgroundColor: '#111111', height: '100%', marginTop: 0, alignItems: 'stretch'}}>
    
                <h2 style={{ flex: 1, padding: 10, whiteSpace: 'pre-line', fontWeight: 'bold'}}>
                        {MainDescription}
                </h2>
                <h1 style={{ flex: 1, padding: 10, fontSize: 22, whiteSpace: 'pre-line', fontWeight: 'bold' }}>
                    {SecondaryDescription}
                </h1>
    
            </div>
        </div>
    )
}
