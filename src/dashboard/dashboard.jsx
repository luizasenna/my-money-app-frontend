import React, { Component } from "react";
import { connect } from "react-redux";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
  render() {
   //   const credit = this.props.summary.credit
    const { credit, debt } = this.props.summary;
 
    console.log(credit);

    return (
      <div>
        <ContentHeader title="Dashboard" small="Versão 1.0" />
        <Content>
          <Row>
            <ValueBox
              cols="12 4"
              color="green"
              icon="bank"
              value={`${credit}`}
              text="Total de Créditos"
            />
            <ValueBox
              cols="12 4"
              color="red"
              icon="credit-card"
              value={`${debt}`}
              text="Total de Débitos"
            />
            <ValueBox
              cols="12 4"
              color="blue"
              icon="money"
              value={`${credit - debt}`}
              text="Valor Consolidado"
            />
          </Row>
        </Content>
      </div>
    );
  }
}

const mapStateToProps = state => ({ summary: state.dashboard.summary });
// console.log(mapStateToProps())
export default connect(mapStateToProps)(Dashboard);
