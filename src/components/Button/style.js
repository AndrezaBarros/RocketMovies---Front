import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    margin-top: 24px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border: none;
    border-radius: 10px;

    color: ${({ theme }) => theme.COLORS.GRAY_70};
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    &:disabled {
        opacity: 0.5;
    }

`;