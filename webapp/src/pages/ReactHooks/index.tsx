import React, { useEffect, useState } from 'react'
import { Card, Button, Space } from 'antd'
import { PageContainer } from '@ant-design/pro-layout'

function Index () {
  const [count, setCount] = useState(0)
  const [num, setNum] = useState(0)

  const init = () => {
    console.log('init')
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {}, [count])

  const AddCount = () => {
    setCount(count + 1)
  }

  const SubCount = () => {
    setCount(count - 1)
  }

  const ResetCount = () => {
    setCount(0)
  }

  const AddNum = () => {
    setNum(num + 1)
  }

  return (
    <PageContainer content="Hooks体验">
      <Card>
        <p>count: {count}</p>
        <Space>
          <Button type="primary" onClick={AddCount}>
            Count + 1
          </Button>
          <Button type="primary" onClick={SubCount}>
            Count - 1
          </Button>
          <Button type="primary" onClick={ResetCount}>
            重置
          </Button>
        </Space>
      </Card>
      <Card style={{ marginTop: 15 }}>
        <p>num: {num}</p>
        <Space>
          <Button type="primary" onClick={AddNum}>
            Num + 1
          </Button>
        </Space>
      </Card>
    </PageContainer>
  )
}

export default Index
