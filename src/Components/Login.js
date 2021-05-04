import React from 'react'
import styled from 'styled-components'


const Container = styled.div `
    height: calc( 100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        position: absolute;
        content: "";
        background: url("/images/login-background.jpg");
        background-size: cover;
        background-position: top;
        background-repeat: no-repeat;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.7;
        z-index: -1;
    }

`

const CTA = styled.div `
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;


`
const CTALogoOne = styled.img `

`

const SignUp = styled.a `
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    leter-spacing 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`
const Description= styled.p `
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const CTALogoTwo = styled.img `
    width: 90%;

`

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>
                    Get all there
                </SignUp>
                <Description>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>

        </Container>
    )
}

export default Login
