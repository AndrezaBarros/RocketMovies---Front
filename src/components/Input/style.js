import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.GRAY_90};
    color: ${({ theme }) => theme.COLORS.GRAY_50};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 14px;

        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: transparent;
        border: 0;

        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_50};;
        }
    };

    > svg {
        margin-left: 16px;
    }
`;