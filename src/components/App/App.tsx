import classNames from 'classnames'
import React from 'react'

import { LabelContextProvider } from '@koendirkvanesterik/label'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'

import { useLabelData } from './hooks/useLabelData'

export const App: React.FunctionComponent = ({ children }) => {
  /**
   * Use custom hook to get all label data
   */
  const labelData = useLabelData()
  /**
   * Return main component structure
   */
  return (
    <LabelContextProvider data={labelData}>
      <Header />
      <main className={classNames('flex', 'flex-col', 'min-h-screen')}>
        <div className={classNames('flex-auto')}>
          <Container>{children}</Container>
        </div>
        <Footer />
      </main>
    </LabelContextProvider>
  )
}
