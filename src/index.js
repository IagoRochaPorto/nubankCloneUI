import React from 'react'

import Routes from './routes'
import { StatusBar } from 'react-native'

export default () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
        <Routes />
    </>
)