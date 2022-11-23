import styled from 'styled-components'

export const ModalContainer = styled.div`
    height: 300px;
    width: clamp(15.625rem, 4.8077rem + 57.6923vw, 43.75rem);
    background: #FFFFFF;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    cursor: auto;
    
    position: absolute; 
    z-index: 20;
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    
    margin: auto;

    padding: 32px;
`

export const ModalHeader = styled.div`
    width: 100%;

    display: flex;
`

export const ModalFooter = styled.div`
    width: 100%;

    display: flex;
    justify-content: flex-end;
    gap: 12px;
`

export const ModalTitle = styled.p`
    display: flex;

    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 118% */

    letter-spacing: -0.4px;

    color: #000000;
`

export const OutsideModal = styled.div`
    z-index: 10;
    width: 100%;
    height: 100vw;
    overflow: hidden;
    cursor: pointer;

    position: absolute; 
    z-index: 10;
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    backdrop-filter: blur(4px);
`