import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;

    #title_button {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 40px 0 30px;
        padding: 0 123px;
        
        h1 {
            font-size: 32px;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.WHITE_100};
        }

        #addMovie {
            width: 207px;
            margin: 0;
        }
    }
`;

export const Content = styled.div`
    overflow-y: auto;
    width: 83%;
    height: 66%;
    margin: 0 auto;
    padding-right: 10px;

    &::-webkit-scrollbar{
        width: 8px;
    }

    &::-webkit-scrollbar-track{
        margin-bottom: 360px;
    }

    &::-webkit-scrollbar-thumb{
        background-color: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    #movieList {
        display: flex;
        flex-direction: column;
        gap: 24px;
    };
`;