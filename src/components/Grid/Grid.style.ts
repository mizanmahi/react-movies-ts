import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 0 20px;

    h1 {
        color: var(--color-midGrey);
        margin: 20px 0;
        text-align: center;

        @media only screen and (max-width: 45em) {
            font-size: var(--font-large);
            margin: 15px 0;
        }
    }
`;

export const Content = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width: var(--maxWidth);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 2rem;
`;
