import styled from 'styled-components';
import MyButton from './lib/MyButton';
import SvgIcon from './lib/SvgIcon';

function App() {
    return (
        <Wrapper>
            <SvgIcon
                iconName="./react"
                svgProp={{
                    className: 'logo',
                    width: 100,
                    height: 100,
                    fill: '#61dafb',
                }}
            />
            <MyButton>Click me</MyButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
`;

export default App;
