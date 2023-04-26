import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    height: 116px;

    padding: 24px 123px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_60};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 24px;
        font-weight: bold;
    }

    > #input {
        width: 630px;
        height: 56px;
    }
`;

export const Profile = styled.div`
    display:flex;
    gap: 9px;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;

        width: 110px;

        h2 {
            font-size: 14px;
            font-weight: bold;
            color: ${({ theme }) => theme.COLORS.WHITE_90};
        }

        button {
            width: 26px;
            margin: 0;
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_50};
        }
    }

    > img {
        width: 64px;
        border-radius: 50%;
        border: 1.5px solid ${({ theme }) => theme.COLORS.GRAY_60};;
    }
`;