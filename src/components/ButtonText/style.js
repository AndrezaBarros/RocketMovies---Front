import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    color: ${({ theme }) => theme.COLORS.PINK};

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;