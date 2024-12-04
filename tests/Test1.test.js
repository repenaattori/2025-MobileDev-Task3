import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Check view', () => {
    it('View styles', () => {
        render(<App/>);
        const view = screen.getByTestId('view');    
        expect(view.props.style).styleCheck(JSON.parse(atob(s1)));
    });
});

expect.extend({
    styleCheck(v,s){    
        let errors = [];

        for (const key in s) {
            if(v[key] != s[key] ){
                errors.push(`View is missing the correct ${key} \n`);
            }
        }

        let msg = '';
        errors.forEach(e => msg = msg.concat('',e));

        return{
            message: () => msg,
            pass: errors.length == 0
        }
    }
})


const s1 = 'eyJhbGlnbkl0ZW1zIjoic3RyZXRjaCIsIm1hcmdpbiI6NDAsImJvcmRlcldpZHRoIjoxLCJwYWRkaW5nIjoxMCwiYmFja2dyb3VuZENvbG9yIjoiIzcwNjc1RSJ9';



