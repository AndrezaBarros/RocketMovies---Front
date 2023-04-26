import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > h2 {
        color: ${({ theme }) => theme.COLORS.GRAY_40};
        font-size: 20px;
        font-weight: 400;

        margin-bottom: 24px;
    }

    > div {
        display: flex;
        gap: 24px;
        width: 100%;
        padding: 16px;
        
        border-radius: 8px;
        background-color: ${({ theme }) => theme.COLORS.BLACK_90};
    }

`;