import React from 'react'
import styled from 'styled-components'

export const Card = (props) => {
    return (
        <>

            <CardContainer>
                <div>

                    <h1>{props.user.name}</h1>
                    <h2>{props.user.company.name}</h2>
                    <p>{props.user.company.catchPhrase}</p>
                </div>

            </CardContainer>

        </>
    )
}

const CardContainer = styled.article`
width:200px;
display: flex;
flex-direction:column;
color:#607d8b;
border: solid 1px black;
margin: 3px;
h1{
font-size:1.5rem;
}
h2{
font-size:1.1rem;
}
p{
    color:black;
}
`;