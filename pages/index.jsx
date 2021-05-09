import {useEffect} from "react"
import GlobalStyles from "components/GlobalStyles"
import styled from "@emotion/styled"
import Interviews from "components/Interviews";
import Head from "next/head";

const Container = styled.div`
  width: 100%;
  padding: 50px 25px;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
`

const Background = styled.div`
  z-index: -1;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://assets.mediated.world/jermaine/somber.jpg");
  background-size: cover;
  background-position: center center;
  filter: brightness(0.7);
`

const Logo = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
  filter: invert(1);
  mix-blend-mode: difference;
`


function Page() {
    useEffect(() => {
        console.log(`
created by alex shortt
    https://instagram.com/alexandershortt
        `)
    }, [])

    return (
    <>
        <Container>
            <Head>
                <title>Jermaine Fowler</title>
            </Head>
            <GlobalStyles/>
            <Logo src="/jermainefowler-logo.png" />
            <Interviews/>
        </Container>
        <Background />
    </>)

}

export default Page
