import styled from "styled-components"

const Back = () => {
  return (
    <Main>
        <div>
        <div className="main">
            <div className="top">
                <h1>Winter </h1>
                <h1>Collection 2023</h1>
                <p>Stay Cozy and Stylish with Our Winter Clothing Collection</p>
                <button>SHOP NOW</button>
            </div>
            <div>
                <img src="/images/here.avif" alt="no imagw"></img>
            </div>
            
        </div>

        </div>
        
       
            
    </Main>
  )
}

export default Back

const Main=styled.div`
.main{
    background-color: whitesmoke;
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
   
}

img{
   height: 400px;
   width: 800px;
   
}

    .top{
        //background-color: yellow;//
        width: 60%;
        padding-top: 90px;
        text-align: center;
        margin-left: 200px;

        h1{
        font-weight: 800;
        font-size: 3.5rem;
    }

    button{
        background-color: goldenrod;
        font-size: 1.5rem;
        border: 1px solid black;
        margin-top: 20px;

        &:hover{
            background-color: tomato;
        }
    }

    }

   
`;