import { Component } from "react";

type SaudacaoProp = {
  name: string;
  size?: number;
};

export default class Saudacao extends Component<SaudacaoProp> {
  render() {
    const { name, size = 24 } = this.props;
    return <h1 style={{ fontSize: `${size}px` }}>Olá, {name}!</h1>;
  }
}
