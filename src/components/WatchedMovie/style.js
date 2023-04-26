import styled from "styled-components";

export const Container = styled.div`
    padding: 32px;

    border-radius: 16px;
    background-color: ${({ theme }) => theme.COLORS.PINK_0};


    > main {
        display: flex;
        flex-direction: column;
        gap: 15px;

        h2 {
            color: ${({ theme }) => theme.COLORS.WHITE_90};
            font-size: 24px;
            font-weight: bold;

            margin-bottom: -7px;
        }
        
        p {
            color: ${({ theme }) => theme.COLORS.GRAY_40};
            font-size: 16px;
            font-weight: 400;

            overflow: hidden;

            height: 52px;
        }

        #tags {
            display: flex;
            gap: 8px;
        }
    } 
`;