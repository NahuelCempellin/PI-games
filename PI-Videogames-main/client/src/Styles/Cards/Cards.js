import styled from 'styled-components';


export const CardContainer= styled.div`
height: 230px;
width: 200px;
overflow:hidden;
margin: auto;
padding: 18px 30px;
border-radius:2%;
border: 1px solid black;
transition: all .4s ease-in-out;
box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.3);
text-align:center;
color: #fff;

background: rgb(255,6,242);
background: linear-gradient(0deg, rgba(255,6,242,0.7917542016806722) 0%, rgba(8,8,142,0.604079131652661) 100%);

a{
    text-decoration: none;
    color: #fff;
}
&&:hover{
    height: 330px;
    width: 280px;
    boder-radius: 5px;
    box-shadow: 0px 2px 10px rgba(0,0,0,0.5);
}

.head img {
    position: relative;
    border-radius: 50%;
    display:block;
    height:200px;
    width: 200px;
    boder-top:8px solid #fff;
    border-bottom: 8px solid black;
    object-fit: cover;
    margin: 20px auto;
    transition: all 0.3s ease;
}

.genres h2{
    background-color: black;
    padding: 4px;
    border-radius: 2px;
    border: 1px solid #fff;
}
.genres p{
    background-color: black;
    padding: 3px;
    border-radius: 2px;
    border: 1px solid #fff;
}


`

export const NotFound= styled.p`
color: #fff;
font-size: 50px;
width: 70%;
padding: 20px;
`

export const ContNot= styled.div`
display: flex;
justify-content: center;
flex-direction: row;
width:500px;
background-color: black;
border: 3px solid #fff;
margin-left: 350px;
`

export const SonicW= styled.img`
width:50%;

`