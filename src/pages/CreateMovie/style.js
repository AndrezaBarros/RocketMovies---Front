import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const Content = styled.div`
    margin: 40px 120px;
    padding-right: 24px;
    overflow-y: scroll;
    height: 77%;

    &::-webkit-scrollbar{
        width: 8px;
        padding-right: 5px;
    }

    &::-webkit-scrollbar-track{
        margin-bottom: 480px;
    }

    &::-webkit-scrollbar-thumb{
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    > h2 {
        margin: 24px 0 30px;

        font-size: 36px;
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE_90};
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;

    > #input {
        margin: 0;

        display: flex;
        gap: 40px;
        justify-content: space-between;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_50};
        }
    }
    
    #buttons {
        display: flex;
        gap: 40px;

        button {
            margin: 0;

            &:first-child {
                background-color: ${({ theme }) => theme.COLORS.BLACK_90};
                color: ${({ theme }) => theme.COLORS.PINK};
            } 
        }

           
    }   

`;