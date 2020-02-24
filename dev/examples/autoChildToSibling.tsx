import * as React from "react"
import { motion, useCycle } from "@framer"
import styled from "styled-components"
import { SyncLayout } from "../../src/components/SyncLayout"

const Container = styled.div`
    width: 200px;
    height: 340px;
    overflow: visible;
    background-color: #f3f3f3;
    border-radius: 20px;
    position: relative;
`

const Small = styled(motion.div)`
    width: 50px;
    height: 50px;
    overflow: visible;
    border-radius: 10px;
    position: absolute;

    ${({ purple }) =>
        purple
            ? `
      background-color: #85f;
      top: 64px;
      left: 124px;
    `
            : `
      background-color: #0099ff;
      top: 15px;
      left: 15px;
    `}
`
const Big = styled(motion.div)`
    width: 148px;
    height: 148px;
    overflow: visible;
    border-radius: 20px;
    position: absolute;

    ${({ purple }) =>
        purple
            ? `
            top: 137px;
            left: 26px;
          background-color: rgba(136, 85, 255, 0.3);
    `
            : `
            top: 97px;
            left: 26px;
          background-color: rgba(0, 153, 255, 0.3);
    `}
`

const Child = () => {
    return (
        <Big auto autoId="big">
            <Small auto autoId="small" />
        </Big>
    )
}

const Sibling = () => {
    return (
        <>
            <Big auto autoId="big" purple />
            <Small auto autoId="small" purple />
        </>
    )
}

export const App = () => {
    const [isOn, toggleOn] = useCycle(false, true)

    return (
        <Container onClick={() => toggleOn()}>
            <SyncLayout>{isOn ? <Child /> : <Sibling />}</SyncLayout>
        </Container>
    )
}
