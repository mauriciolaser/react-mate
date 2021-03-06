import React from 'react'

export default function Info() {

    return (
        <div className='wrapper-child'>
            <div className='child-column' >
                <div className='child-content'>
                    <div className='info-div' style={{backgroundColor: '#111111', flexWrap: 'wrap', display: 'flex'}}>
                        <div className='info-encuentranos' style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: '300px', minWidth: '300px', width: '45%', flexWrap: 'wrap'}}>
                            <div style={{textAlign:'center', flex:1, maxHeight: 60,}}>
                                <h1 style={{ fontWeight: 'normal', color: 'pink', fontSize: 23}}>
                                    {'ENCUÉNTRANOS'}
                                </h1>
                            </div>
                            <div style={{flex:1, display: 'flex', justifyContent: 'center', maxHeight: 5, marginTop: 10, marginBottom: 10}} >
                                <div style={{ width: '5%', borderBottom: '0.1em solid pink', borderBottomWidth: 'thin'}}>
                                </div>      
                            </div>
                            <div>
                                <h1 style={{ fontSize: 16, fontWeight: 'normal', color: 'pink', whiteSpace: 'pre-line' }}>
                                    {'Museo MATE\nAv. Pedro de Osma 409. Barranco,\nLima, Perú'}
                                </h1>
                                <h1 style={{ fontSize: 16, fontWeight: 'lighter', color: 'pink', whiteSpace: 'pre-line', marginTop: 20 }}>
                                    {'DE MARTES A DOMINGO\n10 AM - 7PM\n+51 200 5400'}
                                </h1>
                            </div>
                            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', maxHeight: 5, marginTop: 30, marginBottom: 20 }} >
                                <div style={{ width: '10%', borderBottom: '0.1em solid pink', borderBottomWidth: 'thin' }}>
                                </div>
                            </div>
                            <div>
                                <h1 style={{ fontSize: 16, fontWeight: 'normal', color: 'pink', whiteSpace: 'pre-line' }}>
                                    {'Larcomar\nMalecón de la reserva 610, Miraflores,\nLima, Perú'}
                                </h1>
                                <h1 style={{ fontSize: 16, fontWeight: 'lighter', color: 'pink', whiteSpace: 'pre-line', marginTop: 20 }}>
                                    {'DE LUNES A DOMINGO\n10 AM - 10PM'}
                                </h1>
                            </div>
        
                        </div>
                        <div className='info-imagen' style={{ display: 'flex', justifyContent:'center', flex: 1, minHeight: '300px', minWidth: '300px', width: '45%'}}>
                            <img style={{ paddingTop: 15, width: '90%', height: '90%' }} alt='Imagen de Tienda' src={process.env.PUBLIC_URL + '/assets/gift.gif'}>
                            </img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
