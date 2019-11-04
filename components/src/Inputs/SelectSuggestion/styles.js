import styled from 'styled-components';

export const SuggestionsWrapper = styled.div`
    border: 0.5px solid #e5e5e5;
    
    ${(props) => (props.items && props.items > 1 && props.item <= 4)
  && `height: ${props.items * 2}rem;`
  };
    
    ${(props) => (props.items && props.items > 4)
  && `height: 6rem;
    overflow-y: scroll;`
  };
    
    
`;