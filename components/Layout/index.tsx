import clsx from 'clsx'
import { Inter } from 'next/font/google'

import { Menu } from '@/components/Menu'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

type ContainerProps = {
  className?: string
  children: React.ReactNode
  navigation: { name: string; href: string }[]
}

export function Layout(props: ContainerProps) {
  const { className, children, navigation, ...rest } = props

  return (
    <div className={clsx(`${inter.variable} font-sans`, className)} {...rest}>
      <Menu navigation={navigation} />
      {children}
    </div>
  )
}
