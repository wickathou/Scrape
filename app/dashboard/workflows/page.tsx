import { URLForm } from '@/components/forms/URLForm'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

type Props = {
  someProp: string
}

const HomePage = (props: Props) => {
  console.log(props)
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>
            Add URL
          </CardTitle>
          <CardDescription>
            Here you can add the page that will be scraped
          </CardDescription>

        </CardHeader>
        <CardContent>
          <URLForm/>
        </CardContent>
        <CardFooter>
          {/* <Button>Add URL of page to scrape</Button> */}
        </CardFooter>

      </Card>
      <Button>Preview of page</Button>
      <Button>HTML of page</Button>
      <Button>Preview URL base to scrape later</Button>
      <Button>Add fields that need to be scraped</Button>
      <Button>Add prompt for URL base that is the same</Button>
      <Button>Get extracted data</Button>
    </div>
  )
}

export default HomePage