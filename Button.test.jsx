import React from "react";
import { shallow } from "enzyme";
import Button1 from "./Button1";

// mock function to use for prop
const testClick = jest.fn();

// component instance to test
const wrapper = shallow( <Button1 label="Test Label" click={ testClick } /> );

describe( "Button1", () => {
  it( "should render without errors", () => {
    expect( wrapper.find( "span" ).text() ).toEqual( "Test Label" );
  } );

  it( "should handle click events", () => {
    wrapper.find( "button1" ).simulate( "click" );
    expect( testClick.mock.calls.length ).toEqual( 1 );
  } );
} );
