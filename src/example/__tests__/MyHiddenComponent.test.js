import { render, screen } from '@testing-library/react';
import { createGlobalStyle } from 'styled-components';
import MyHiddenComponent from '../MyHiddenComponent';

// It seems that the order of rules returned by `forEachMatchingSheetRuleOfElement` 
// and the fact I create the GlobalStyle here put the light on the bug
const GlobalStyle = createGlobalStyle`
    html, body {
        height: 100%;
    }

    * {
        margin-bottom: 10px;
    }
`;

test('Test which fails', () => {
    render(<div><GlobalStyle /><MyHiddenComponent>Hidden text</MyHiddenComponent></div>);

    // Both will failed because the visibility returned is the default one (ie visible) :(
    expect(screen.getByText('Hidden text')).toHaveStyle({ visibility: 'hidden'});
    expect(screen.getByText('Hidden text')).not.toBeVisible();
});