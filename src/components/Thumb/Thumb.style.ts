import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 720px;
    object-fit: cover;
    border-radius: 15px;
    transition: all .3s;
    animation: animateThumb .5s;
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0,0,0,0.25);

    &:hover {
        opacity: .8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 100%;
        }
    }
`;

