import { fireEvent, render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import App from "../App";

describe('Check text inputs', () => {
    it('Text input styles', () => {
        render(<App/>);
        const fname = screen.getByPlaceholderText('First name');    
        const lname = screen.getByPlaceholderText('Last name');

        expect(fname.props.style).styleCheck(JSON.parse(atob(s3)));
        expect(lname.props.style).styleCheck(JSON.parse(atob(s3)));
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

const s3 = ' eyJib3JkZXJXaWR0aCI6MSwiYmFja2dyb3VuZENvbG9yIjoiI2ZmZmZmZiIsIm1hcmdpbkJvdHRvbSI6MTB9';

