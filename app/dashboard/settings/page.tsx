import React from 'react'

type Props = {
    someProp:string
}

const HomePage = (props: Props) => {
    console.log(props)
  return (
    <div>Settings page</div>
  )
}

export default HomePage