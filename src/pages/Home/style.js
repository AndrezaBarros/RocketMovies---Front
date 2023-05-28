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

export const Movie = styled.div`
    padding: 32px;
    margin-bottom: 24px;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_0};


    > main {
        display: flex;
        flex-direction: column;
        gap: 15px;

        #identificador {
            width: 217px;
            height: 52px;

            display: flex;
            flex-direction: column;
            gap: 9px;
        }

        h2 {
            color: ${({ theme }) => theme.COLORS.WHITE_90};
            font-family: "Roboto slab";
            font-size: 24px;
            font-weight: 700;

            margin-bottom: -7px;
        }
        
        p {
            color: ${({ theme }) => theme.COLORS.GRAY_40};
            font-size: 16px;
            font-weight: 400;
            font-family: "Roboto";

            overflow: hidden;

            height: 52px;
        }

        #tags {
            display: flex;
            gap: 8px;
        }
    }
`;