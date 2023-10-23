import { useState } from 'react'
import styled from 'styled-components'
function Add ({postData}){

    const Wrapper =styled.div`
    border-radius: 15px;
    height: 90px;
    width: 1000px;
    margin:0 auto;
    background-color: rgba(35, 79, 190, 0.768);
    justify-content: space-between;
    align-items: center;
    display: flex;

    form {

        justify-content: space-between;
        align-items: center;
        display: flex;
        width:650px;
        margin:0px 0px 0px 0px;
    }
    button{
        width:150px;
        height:35px;
        background-color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size:18px;
        color:black;
        border:none;
        border-radius:10px;


    }
    button :hover{
        cursor:pointer;
    }
    input{
        width:250px;
        height:30px;
        border:none;
        border-radius:10px;
        margin: 0px 30px 0px 12px;
    }
    `

    return (
        <>
        <Wrapper>
            <form onSubmit={(e)=>postData(e,'https://fullstack-first-server.vercel.app/')}>
                <input type="text" name='name'/>
                <input type="tel" name="salary" />
                <button type='submit'> Додати </button>
            </form>

        </Wrapper>
        </>
    )
}
export default Add