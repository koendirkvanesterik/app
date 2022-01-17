import { LabelContextProvider } from '@koendirkvanesterik/label'
import classNames from 'classnames'
import { Container } from 'components/Container'
import { Drawer } from 'components/Drawer'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import React from 'react'
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
      <main className={classNames('flex', 'flex-col', 'min-h-screen')}>
        <Header />
        <div className={classNames('flex-auto')}>
          <Container>{children}</Container>
        </div>
        <Footer />
        <Drawer />
      </main>
    </LabelContextProvider>
  )
}
