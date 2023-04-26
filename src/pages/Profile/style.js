import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    > header {
        width: 100%;
        height: 144px;
        padding: 64px 144px;

        background-color: ${({ theme }) => theme.COLORS.PINK_0};

        button {
            margin: 0;
        }
    }

`;

export const Form = styled.form`
    width: 340px;
    margin: 0 auto;

    > div:nth-child(3) {
        margin-bottom: 24px;
    }
`;

export const Avatar = styled.div`
    position: relative;
    width: 186px;
    height: 186px;

    margin: -90px auto 32px;

    > img {
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label {
        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 7px;
        right: 7px;

        background-color: ${({ theme }) => theme.COLORS.PINK};
        color: ${({ theme }) => theme.COLORS.GRAY_70};
        border-radius: 50%;

        input {
            display: none;
        }

        &:hover{
            transform: scale(1.1);
            transition: transform 0.3s;

            cursor: pointer;
        }
    }


`;