import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderStaff(props) {
  const luong = (
    props.staff.salaryScale * 3000000 +
    props.staff.overTime * 200000
  ).toFixed(0);
  return (
    <Card className='col-lg-3 col-md-5 m-1'>
      <CardTitle className='m-2'>{props.staff.name}</CardTitle>
      <CardBody>
        <CardText>Mã Nhân Viên: {props.staff.id}</CardText>
        <CardText>Hệ Số Lương: {props.staff.salaryScale}</CardText>
        <CardText>Số Ngày Làm Thêm: {props.staff.overTime}</CardText>
        <CardText className='bg-light p-2 shadow'>Lương: {luong}</CardText>
      </CardBody>
    </Card>
  );
}

function Salary(props) {
  console.log(props);
  const staff = props.staffs.map(staff => {
    return <RenderStaff staff={staff} />;
  });
  return (
    <div className='container'>
      <div className='row mt-2'>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/nhanvien'>Nhân Viên</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className='row'>{staff}</div>
    </div>
  );
}

export default Salary;
