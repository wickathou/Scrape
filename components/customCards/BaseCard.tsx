import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

type BaseCardProps = {
    title?:string,
    description?:string,
    footer?:string,
    children?:React.ReactNode
}

const BaseCard = (props: BaseCardProps) => {
  return (
    <Card>
        <CardHeader>
          <CardTitle>
            {props.title}
          </CardTitle>
          <CardDescription>
            {props.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
            {props.children}
        </CardContent>
        <CardFooter>
            {props.footer}
        </CardFooter>
      </Card>
  )
}

export default BaseCard