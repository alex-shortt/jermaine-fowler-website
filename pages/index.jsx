import {useEffect} from "react"
import GlobalStyles from "components/GlobalStyles"
import styled from "@emotion/styled"
import Interviews from "components/Interviews";
import Photos from "components/Photos";
import Head from "next/head";

const Container = styled.div`
  width: 100%;
  padding: 50px 25px;
  box-sizing: border-box;
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  
  @media screen and (max-width: 900px) {
    font-size: 2rem;
  }
`

const Logo = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: block;
`


function Page() {
    useEffect(() => {
        console.log(`
created by alex shortt
    https://instagram.com/alexandershortt
        `)
    }, [])

    return <Container>
        <Head>
            <title>Jermaine Fowler</title>
        </Head>
        <GlobalStyles/>
        <Logo src="/jermainefowler-logo.png" />
        <Interviews/>
        <Photos/>
    </Container>
}

export default Page
