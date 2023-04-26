import styled from "styled-components";

export const Container = styled.div`
    width: 100;
    height: 100vh;
`;

export const Content = styled.div`
    margin: 40px 123px;
    overflow-y: scroll;
    height: 77%;
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

    > div {
        display: flex;
        align-items: center;
        gap: 19px;

        margin-top: 25px;

        h1 {
            color: ${({ theme }) => theme.COLORS.WHITE_90};
            font-size: 36px;
            font-weight: 500;
        }
    }

    #details {
        margin: 24px 0 40px;
        display: flex;
        align-items: center;
        gap: 8px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
            border: 1px solid ${({ theme }) => theme.COLORS.GRAY_60};
        }

        svg {
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        span {
            color: ${({ theme }) => theme.COLORS.WHITE_90};
        }
    }

    #sinopseMovie{
        display: flex;
        flex-direction: column;

        font-size: 16px;
        font-weight: 400;
        color: ${({ theme }) => theme.COLORS.WHITE_90};
        text-align: justify;
    }

    #tags{
        display: flex;
        gap: 8px;
        margin: 0 0 40px;
    }
`;