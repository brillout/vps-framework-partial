import React from 'react'
import './Test.css'

export { Test }

function Test(props: any) {
  return <div {...props} className={'test'} />
}
