import React, { memo, useState, useCallback, useEffect } from 'react'
import api from '../../api'
import Board from './components/Board'
import Panel from './components/style'
import { ContainerStyle} from './style'

function Main() {
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAT = new Date().toLocaleDateString()

    const getCovidData = useCallback((country) => {
        api.getCountry(country)
        .then(data => setData(data))
    }, ())

    useEffect(() => {
        getCovidData(country)
 }, [getCovidData])

    const handleChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyle>
        <div classNane="ab.2">
            <Panel 
                data={data}
                updateAT={updateAT}
                onChange={handleChange}
                country={country}
                getCovidData={getCovidData}
            />
        </div>
        <Board data={data} />

        </ContainerStyle>
    )                       
}

export default memo(Main)