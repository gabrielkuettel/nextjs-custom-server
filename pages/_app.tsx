import React from 'react'
import type { AppProps } from 'next/app'
import { Layout } from '@/components/Layout'

import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
