import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Person from './Person.jsx';
import Routes from './routes'
import Person_Data from './Person_Data.jsx';
import {shallow,mount} from 'enzyme';
import NotFoundPage from './notFound.jsx'

describe('<PersonData/>',()=>{
  it('renders div',()=>{
    const editor=shallow(<Person_Data/>);
    expect(editor.find('div.App').length).toEqual(1);
  });


  it('Click btn',()=>{
    const editor=shallow(<Person_Data/>);
    const buttonClick=editor.find('#testBtn');
    buttonClick.simulate('click');
    expect(editor.state().current).toEqual(false);
  });

    it('renders div',()=>{
    const editor=shallow(<Person/>);
    expect(editor.find('div.candidate').length).toEqual(1);
  });
});
  describe("<Routes/>",()=>{
    const wrapper=mount(<Routes/>);
    it("Route testing",()=>{
      expect(wrapper.contains(NotFoundPage).toBe(false))
    })
it("Route testing",()=>{
      expect(wrapper.contains(Person_Data).toBe(true))
    })
})