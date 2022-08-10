import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';
import { Loading } from './Loading';
import { FadeTransform } from 'react-animation-components';

function RenderDept(props) {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.2) translateY(30%)',
      }}
    >
      <Card className='mt-3 mb-3'>
        <CardTitle className='m-2 ml-3'>{props.dept.name}</CardTitle>
        <CardBody>
          <CardText>Số Lượng Nhân Viên: {props.dept.numberOfStaff}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  );
}

const Dept = props => {
  if (props.dept.isLoading) {
    return (
      <div className='container '>
        <div className='row'>
          <Loading />
        </div>
      </div>
    );
  } else if (props.dept.errMess) {
    return (
      <div className='container'>
        <div className='row mt-2'>
          <h3 style={{ color: 'red' }}>{props.dept.errMess}</h3>
        </div>
      </div>
    );
  } else {
    // map từng phần tử trong props
    const departments = props.dept.dept.map(dept => {
      return (
        <div className='col-lg-4 col-md-5' key={dept.id}>
          {/* truyền từng phần tử vào RenderDept để render */}
          <RenderDept dept={dept} />
        </div>
      );
    });
    return (
      <div className='container'>
        <div className='row'>{departments}</div>
      </div>
    );
  }
};

export default Dept;
