import React from 'react'
import { View } from 'react-native'
import { GridCholqij } from '../Layout/GridCholqij'
import { NawalCard } from './NawalCard'
import { getImage } from '../../utils'

export const Lunations = ({lunations}) => {
  return (
    <View style={{ paddingVertical: 20 }}>
          {Object.keys(lunations).length ? (
            <>
             <GridCholqij>
                <NawalCard
                  imageSource={() =>
                    getImage(lunations.cargador.nawal)
                  } 
                  nawalName={lunations.cargador.nawal}
                  title={`nawal Cargador`}
                  day={lunations.cargador.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.nawal.nawal)}
                  nawalName={lunations.nawal.nawal}
                  title={`Nawal fecha`}
                  day={lunations.nawal.energy}
                />
                <NawalCard
                  imageSource={() =>
                    getImage(lunations.haab.month)
                  }
                  nawalName={lunations.haab.month}
                  title={`Día año Solar`}
                  day={lunations.haab.numberDay}
                />
              </GridCholqij>

              
              <GridCholqij>
                <NawalCard
                  imageSource={() =>
                    getImage(lunations.engendramientoAuxIzq.nawal)
                  } 
                  nawalName={lunations.engendramientoAuxIzq.nawal}
                  title={`aux engend. izq`}
                  day={lunations.engendramientoAuxIzq.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.engendramiento.nawal)}
                  nawalName={lunations.engendramiento.nawal}
                  title={`Engendramiento`}
                  day={lunations.engendramiento.energy}
                />
                <NawalCard
                  imageSource={() =>
                    getImage(lunations.engendramientoAuxDer.nawal)
                  }
                  nawalName={lunations.engendramientoAuxDer.nawal}
                  title={`aux engend. der`}
                  day={lunations.engendramientoAuxDer.energy}
                />
              </GridCholqij>
              {/* middle row */}
              <GridCholqij>
                <NawalCard
                  imageSource={() => getImage(lunations.auxIz.nawal)}
                  nawalName={lunations.auxIz.nawal}
                  title={`aux izq`}
                  day={lunations.auxIz.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.nawal.nawal)}
                  nawalName={lunations.nawal.nawal}
                  title={`Nawal fecha`}
                  day={lunations.nawal.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.auxDer.nawal)}
                  nawalName={lunations.auxDer.nawal}
                  title={`aux der`}
                  day={lunations.auxDer.energy}
                />
              </GridCholqij>
              {/* destiny row */}
              <GridCholqij>
                <NawalCard
                  imageSource={() => getImage(lunations.destinoAuxIzq.nawal)}
                  nawalName={lunations.destinoAuxIzq.nawal}
                  title={`aux dest. izq`}
                  day={lunations.destinoAuxIzq.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.destino.nawal)}
                  nawalName={lunations.destino.nawal}
                  title={`destino`}
                  day={lunations.destino.energy}
                />
                <NawalCard
                  imageSource={() => getImage(lunations.destinoAuxDer.nawal)}
                  nawalName={lunations.destinoAuxDer.nawal}
                  title={`aux dest. der`}
                  day={lunations.destinoAuxDer.energy}
                />
              </GridCholqij>
            </>
          ) : (
            <></>
          )}
        </View>
  )
}
