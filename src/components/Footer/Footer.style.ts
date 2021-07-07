import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--color-darkGrey);
    margin-top: 50px;
    height: 250px;
    padding: 0 20px;
`;
export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-gap: 20px;
    justify-content: center;
    align-content: center;
    justify-items: center;

    img {
        width: 200px;
    }
`;