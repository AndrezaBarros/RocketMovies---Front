import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;
    padding: 19px 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_90};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    border-radius: 10px;
    border: none;
    resize: none;

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.GRAY_50};
    }
`;