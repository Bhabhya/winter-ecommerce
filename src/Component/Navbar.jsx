
import styled from "styled-components"



const Navbar = () => {
  return (
   
    <Nav>
        <div className="logo">
        <img src="/images/logo.webp" alt="logo"></img>
        <p>SHOPPER</p>
        </div>

        <div className="list">
            <ul>
                <li>SHOP</li>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KID</li>
            </ul>
          
        </div>
        <div className="box">
        <div >
        <button className="btn">Login</button>
        </div>
        <div className="cart">
        <img src="/images/cart.jpg" className="cart"></img>
        </div>
        </div>

    </Nav>
  )
}

export default Navbar

const Nav= styled.div`
//background-color: orange;//
margin-top: 20px;
display: flex;
justify-content: space-between;
box-shadow: 0px 1px 1px -2px black;
position: fixed;
width: 100%;

.logo img{
    width: 100px;
    height: 50px;
    margin-left: 20px;
}

 .logo p{
    color: black;
    font-size: 20px;
    font-weight: 900;
    margin-left: 20px;
}

.list ul{
    //background-color: yellow;//
    display: flex;
    list-style: none;
    gap: 25px;
    font-weight: 500;
    font-size: 1.2rem;
}

.list li{
    &:hover{
        background-color: whitesmoke;
        cursor: pointer;
        text-decoration: underline solid crimson;
    }
}

.btn{
background-color: whitesmoke;
color: black;
font-size: 20px;
border: 1px solid black ;
border-radius: 24px;
cursor: pointer;

&:active{
    background-color: #ca455f;
}
}

.box{
    display: flex;
    gap: 12px;
    margin: 10px 10px;
}

.cart img{
    margin-right: 40px;
    color: transparent;
    height: 50px;
    width: 80px;
}
`;
