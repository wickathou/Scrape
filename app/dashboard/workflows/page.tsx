import { Button } from '@/components/ui/button'
import ScrapeWorkflow from '@/components/workflows/ScrapeWorkflow'
import React from 'react'

// type Props = {
//   someProp: string
// }

const Workflows = () => {  
  
  return (
    <div>
      <ScrapeWorkflow/>
      <Button>Add fields that need to be parsed</Button>
      <Button>Add prompt for URL base that is the same</Button>
      <Button>Get extracted data</Button>
    </div>
  )
}

export default Workflows