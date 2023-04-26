import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;

    width: 200px;
    margin: 0;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_90};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_90}` : "none"};
    border-radius: 10px;

    > button {
        border: none;
        background: none;
        display: flex;
        align-items: center;
        
        svg {
            width: 22px;
            height: 24px;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > input {
        width: 100%;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_90};
        }
    }
`;