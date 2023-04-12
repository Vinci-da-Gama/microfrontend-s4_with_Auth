import React, { useRef, useEffect, useLayoutEffect } from 'react'

import { mount } from 'marketing/MarketingMiniApp'

// console.log('5 -- just have a look mount func: ', mount)

const MarketingMiniApp = () => {
  const mktMa = useRef(null)

  useEffect(() => {
    mount(mktMa.current)
    // return () => {};
  })

  return (
    <div ref={mktMa} />
  )
}

export default MarketingMiniApp
