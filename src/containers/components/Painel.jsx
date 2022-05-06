import React, { memo } from 'react'
import RefreshIcon from '../../../assets/Imagens/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../components:/Card'
import COUNTRIES from '../../../commons/constantes/countries'
import { CardPanelContentStyled, ItemStyled } from './style'
import Index from 'containers:/Main/Index'

const navigatiorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata}) {
    const { cases, recovered, deaths, todayCases, todayOeaths } = data

    const renderCountries = (country, Index) => {
        <MenuItem key={'country-${index}'} value={country.value}>
        <ItemStyled>
            <div>{country,label}</div>
            <img src={country.flag} alt={'Pais-${country.label}'} />
        </ItemStyled>
        </MenuItem>
    }

    const textCovid19 = 'Pais: ${country}'
    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }
    const shareInfo = () => {
        navigator.share({
            title: 'Dados do Covid19 - ${country}',
            text: textCovid19,
            url: 'https://covid19dio-netlify.app/'
        })
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderShareButton = (
        <div>
            <Button variant="container" color="primary" onClick={copyInfo}>
                Copiar
            </Button>
        </div>
    )
    return (
        <Card>
        <CardPanelContentStyled>
            <div>
                <Typography variant="h5" component="span" color="primary">COVID19</Typography>
                <Typography variant="h6" component="span" color="primary">Painel Coronavirus</Typography>
                <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                <div className="pt-2">
                    <Select onChange={onChange} value={country}>
                        {COUNTRIES.map{renderCountries}}
             </Select>
            </div>
          </div>
          {navigatiorHasShare ? renderShareButton : renderCopyButton}
         </CardPanelContentStyled>
        </Card>
    )
}

export default memo(Panel)