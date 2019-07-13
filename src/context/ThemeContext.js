import React, { Component, createContext } from 'react';
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  state = {
    isDarkTheme: true,
    dark: { bg: '#333', text: '#ccc' },
    light: { bg: '#ccc', text: '#333' }
  };
  toggleTheme = () => {
    this.setState({ isDarkTheme: !this.state.isDarkTheme });
  };
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
