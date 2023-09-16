import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    color: ${({theme}) => theme.COLORS.GRAY_300};

    margin-bottom: .8rem;
    padding-left: 1.2rem;
    border-radius: 1rem;

    gap: 1.6rem;


    > input {
        height: 5.6rem;
        width: 100%;
        color: ${({theme}) => theme.COLORS.WHITE};
        background: transparent;
        border: none;

        &:placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_300};
        }

    }
`