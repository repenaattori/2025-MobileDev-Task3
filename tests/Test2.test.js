import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Check header', () => {
    it('Header styles', () => {
        render(<App/>);
        const header = screen.getByTestId('header');    
        expect(header.props.style).styleCheck(JSON.parse(atob(s2)));
    });
    
});

expect.extend({
    styleCheck(v,s){    
        let errors = [];

        for (const key in s) {
            if(v[key] != s[key] ){
                errors.push(`Header is missing the correct ${key} \n`);
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

const s2 = 'eyJmb250U2l6ZSI6MjIsImZvbnRXZWlnaHQiOiJib2xkIiwiY29sb3IiOiIjZmZmZmZmIiwibWFyZ2luQm90dG9tIjoxMH0=';
