import styled from "styled-components";

export const Spinner = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 20px auto;
    border-radius: 50%;
    border: 5px solid var(--color-lightGrey);
    border-top: 5px solid var(--color-midGrey);
    animation: animateSpinner .8s linear infinite;

    @keyframes animateSpinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`