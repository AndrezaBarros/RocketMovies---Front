import styled from "styled-components";
import backgroundImg from "../../assets/Group_15.png"

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;
`;

export const Form = styled.form`
    padding: 0 135px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 48px;
    }

    > p {
        color: ${({ theme }) => theme.COLORS.GRAY_30};
        font-size: 14px;

        margin-bottom: 48px;
    }

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE_90};
        font-size: 24px;

        margin-bottom: 48px;
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;
