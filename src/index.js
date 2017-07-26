import React from 'react';
import styled from 'styled-components';

/**
 * Display error messages.
 */
class MyComponent extends React.Component {
  /**
   * create instance.
   * @param {object} props - The prop passed from parent.
   */
  constructor(props) {
    super(props);
    // Create a Title component that'll render an <h1> tag with some styles
	const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: palevioletred;
`;

    // Create a Wrapper component that'll render a <section> tag with some styles
	const Wrapper = styled.section`
	padding: 4em;
	background: papayawhip;
`;
  }
  /**
   * Render the component.
   */

  render() {
    return (
      <Wrapper>
		<Title>
			Hello World, this is my first styled component!
		</Title>
	</Wrapper>
    );
  }
}

/**
 * propType validation.
 */
export default MyComponent;
