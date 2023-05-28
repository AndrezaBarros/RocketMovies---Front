import styled from "styled-components";

export const Container = styled.div`
    width: 84px;

    display: flex;
    gap: 6px;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        width: 12px;
    }
`;