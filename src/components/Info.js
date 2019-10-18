import React from 'react'

export default function Info() {
    
    return (
        <div className='App-info' style={{ display:'flex', width: '100%', backgroundColor: '#111111', flex: 1, justifyContent: 'center', marginBottom: 80, minHeight: 560}}>
            <div className='info-div' style={{ backgroundColor: '#111111', maxWidth: 1280, display: 'flex', flexDirection: 'row', flex: 1, flexWrap: 'wrap', marginTop: 15, marginBottom: 30}}>
                <div className='encuentranos-div' style={{ display: 'flex', flexDirection: 'column', flex: 1, height: 514, width: 514, flexWrap: 'wrap'}}>
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
                <div style={{ flex: 1, height: 514, width: 514}}>
                    <img style={{marginTop:15, height: 500}} alt='cuadrado' src={'https://format-com-cld-res.cloudinary.com/image/private/s--s-rdlOd9--/c_crop,h_776,w_776,x_0,y_0/c_fill,g_center,h_570,w_570/a_auto,fl_keep_iptc.progressive.apng/v1/0d5e06c9bb29470768de8884e488f6fb/Captura_de_pantalla_2019-10-10_a_las_4_34_16_p_m_.png'}>
                    </img>
                </div>
            </div>
        </div>
    )
}
