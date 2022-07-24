import React from 'react';
import { Card, CardImg, CardTitle, CardBody } from 'reactstrap';

function StaffList(props) {
  console.log(props.staffs);
  const staffList = props.staffs.map(staff => {
    return (
      <div key={staff.id} className='col-lg-2 col-md-4 col-sm-6 mt-1'>
        <Card>
          <CardBody className='border border-warning'>
            <CardImg src={staff.image} alt={staff.name} />
            <CardTitle className='text-center mt-4'>{staff.name}</CardTitle>
          </CardBody>
        </Card>
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='row'>{staffList}</div>
    </div>
  );
}

export default StaffList;
