import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import { Card } from 'components:/Card'

function Board({ data }) {
    const { cases, todayDeaths, recoverd, deaths, todayCases } = data
    const getValue = (value) => value ? value : <Skeleton variant="text" widht={182}

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValeu(cases)} label="Total de casos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValeu(todayDeaths)} label="obtidos hoje" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValeu(recoverd)} label="Casos hoje" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValeu(cadeathses)} label="Total de mortos" color="#5d78ff" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getByDisplayValeu(todayCases)} label="Total de recuperados" color="#5d78ff" />
            </Grid>
        </Grid>
    )
}

export default memo(Board)