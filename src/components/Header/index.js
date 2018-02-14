import React from 'react'
import Link from 'gatsby-link'
import logo from "./logo.png"
import styled from "styled-components"

const HeaderLogoTitle = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
h1, h3 { 
  margin-left: 5px;
}
h1 {
  margin-bottom:0;
   }
   
h3 {
  color: #59be6b;
}
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: left;
  flex-flow: column;
  align-self: center;
`

const HeaderAddress = styled.div`
margin: 10px;
display: flex;
justify-content: flex-end;
flex-direction: column;
h4 {
  margin-bottom: 0.1rem;
}
`;




const Header = () => (
    <div
        style={{
            background: 'white',
            marginBottom: '1.45rem',
        }}
    >
        <div
            style={{
                display: 'flex',
                'justify-content': 'space-between',
                'align-items': 'center',
                margin: '0 auto',
                maxWidth: 960,
                padding: '1.45rem 1.0875rem',
            }}
        >
            <HeaderLogoTitle>
                <img src={logo} alt="Logo"/>
                <Link
                    to="/"
                    style={{
                        color: '#295c33',
                        textDecoration: 'none',
                    }}
                >
                    <HeaderTitle>
                        <h1>Bowen Dental Care</h1>
                        <h1>General Dentistry</h1>
                        <h3>Healthy Mouth, Healthy Body</h3>
                    </HeaderTitle>
                </Link>
            </HeaderLogoTitle>
            <HeaderAddress>
                <h4>760-781-3360</h4>
                <h4>202 South Juniper St.</h4>
                <h4>Escondido, CA 92025</h4>
            </HeaderAddress>
        </div>
    </div>
);

export default Header
