import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Check button', () => {
    it('Button styles', () => {
        render(<App/>);
        const button = screen.getByText('SUBMIT');    
        expect(button.props.style).styleCheck(JSON.parse(atob(s4)));
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

const s4 = 'eyJiYWNrZ3JvdW5kQ29sb3IiOiIjRjA5RTUxIiwidGV4dEFsaWduIjoiY2VudGVyIiwiYm9yZGVyV2lkdGgiOjEsInBhZGRpbmciOjEwLCJmb250V2VpZ2h0IjoiYm9sZCJ9 ';
