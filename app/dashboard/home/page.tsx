import React from 'react'

type Props = {
    someProp:string
}

const HomePage = (props: Props) => {
    console.log(props)
  return (
    <div>HomePage</div>
  )
}

export default HomePage