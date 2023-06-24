'use client'

import { Provider as StateProvider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider} from "@chakra-ui/next-js";
import React from "react";

export interface ProvidersProps {
    children: React.ReactNode
}

export default function Providers(props: ProvidersProps) {
    const { children } = props
  return (
      <ChakraProvider>
        <CacheProvider>
          {children}
        </CacheProvider>
      </ChakraProvider>
  )
}