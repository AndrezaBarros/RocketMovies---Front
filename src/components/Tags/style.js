import styled from "styled-components";

export const Container = styled.div`
    height: 24px;
    padding: 5px 16px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_70};
    border-radius: 8px;

    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.WHITE_80};
`;