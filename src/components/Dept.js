import React from 'react';
import { Card, CardText, CardTitle, CardBody } from 'reactstrap';

function RenderDept(props) {
  return (
    <Card className='mt-3 mb-3'>
      <CardTitle className='m-2'>{props.dept.name}</CardTitle>
      <CardBody>
        <CardText>Số Lượng Nhân Viên: {props.dept.numberOfStaff}</CardText>
      </CardBody>
    </Card>
  );
}

const Dept = props => {
  console.log(props.dept);
  const departments = props.dept.map(dept => {
    return (
      <div className='col-lg-4 col-md-5' key={dept.id}>
        <RenderDept dept={dept} />
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{departments}</div>
    </div>
  );
};

export default Dept;
