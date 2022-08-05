import React, { useState } from 'react';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  InputGroup,
  Input,
  Button,
  Breadcrumb,
  Form,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
  Col,
  FormFeedback,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

function RenderStaff({ staff }) {
  return (
    <Card className='mt-1'>
      <Link to={`/nhanvien/${staff.id}`}>
        <CardBody className='border border-warning'>
          <CardImg src={staff.image} alt={staff.name} />
          <CardTitle className='text-center mt-3'>{staff.name}</CardTitle>
        </CardBody>
      </Link>
    </Card>
  );
}

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
const isNumber = val => !isNaN(Number(val));
class StaffList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '/assets/images/girl.jpg',
      keywords: '',
      isModalOpen: false,
    };
    this.onSearch = this.onSearch.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSearch = event => {
    event.preventDefault();
    this.setState({ keywords: event.target.searchName.value });
  };

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleSubmit = value => {
    this.toggleModal();
    // lấy dữ liệu tạo nhân viên mới
    const newStaff = {
      name: value.name,
      doB: value.doB,
      salaryScale: value.salaryScale,
      startDate: value.startDate,
      department: value.department,
      annualLeave: value.annualLeave,
      overTime: value.overTime,
      image: this.state.image,
    };
    // thêm nhân viên mới vào hàm onAdd callback
    this.props.onAdd(newStaff);
  };
  // map từng phần tử từ props để render
  staffList = props =>
    props
      .filter(staff => {
        return staff.name
          .toUpperCase()
          .includes(this.state.keywords.toUpperCase());
      })
      .map(staff => {
        return (
          <div key={staff.id} className='col-lg-2 col-md-4 col-6'>
            <RenderStaff staff={staff} />
          </div>
        );
      });

  render() {
    return (
      <div className='container mt-2'>
        <div className='row mt-2'>
          <div className='col-lg-5 col-md-4 col-sm-4'>
            <Breadcrumb>
              <h6>Danh Sách Nhân Viên</h6>
            </Breadcrumb>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-4 mb-2'>
            <Button color='primary' onClick={this.toggleModal}>
              Thêm Nhân Viên
            </Button>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader>Thêm Nhân Viên Mới</ModalHeader>
            <ModalBody>
              <LocalForm onSubmit={value => this.handleSubmit(value)}>
                <FormGroup row>
                  <Label htmlFor='name' className='col-4'>
                    Họ và Tên
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.name'
                      id='name'
                      name='name'
                      className='form-control'
                      validators={{
                        required,
                        minLength: minLength(3),
                        maxLength: maxLength(30),
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.name'
                      show='touched'
                      messages={{
                        minLength: 'Tên nhân viên phải nhiều hơn 3 kí tự',
                        maxLength: 'Tên nhân viên phải ít hơn 10 kí tự',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='doB' className='col-4'>
                    Ngày sinh
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.doB'
                      id='doB'
                      name='doB'
                      type='date'
                      className='form-control'
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.doB'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập ngày sinh của nhân viên',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='startDate' className='col-4'>
                    Ngày vào công ty
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.startDate'
                      id='startDate'
                      name='startDate'
                      type='date'
                      className='form-control'
                      validators={{
                        required,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.startDate'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập ngày vào công ty',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='department' className='col-4'>
                    Phòng Ban
                  </Label>
                  <Col className='col-8 '>
                    <Control.select
                      model='.department'
                      id='department'
                      name='department'
                      className='form-control'
                      defaultValue='Sale'
                      validators={{
                        required,
                      }}
                    >
                      <option>Sale</option>
                      <option>HR</option>
                      <option>Marketing</option>
                      <option>IT</option>
                      <option>Finance</option>
                    </Control.select>
                    <Errors
                      className='text-danger'
                      model='.department'
                      show='touched'
                      messages={{
                        required: 'Vui lòng chọn phòng ban',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='salaryScale' className='col-4'>
                    Hệ số lương
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.salaryScale'
                      id='salaryScale'
                      name='salaryScale'
                      className='form-control'
                      defaultValue='1'
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.salaryScale'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập hệ số lương',
                        isNumber: 'Chỉ nhập số',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='annualLeave' className='col-4'>
                    Số ngày nghỉ còn lại
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.annualLeave'
                      id='annualLeave'
                      name='annualLeave'
                      className='form-control'
                      defaultValue='0'
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.annualLeave'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập ngày phép còn lại',
                        isNumber: 'Chỉ nhập số',
                      }}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label htmlFor='overTime' className='col-4'>
                    Số giờ làm thêm
                  </Label>
                  <Col className='col-8 '>
                    <Control.text
                      model='.overTime'
                      id='overTime'
                      name='overTime'
                      className='form-control'
                      defaultValue='0'
                      validators={{
                        required,
                        isNumber,
                      }}
                    />
                    <Errors
                      className='text-danger'
                      model='.overTime'
                      show='touched'
                      messages={{
                        required: 'Vui lòng nhập số giờ làm thêm',
                        isNumber: 'Chỉ nhập số',
                      }}
                    />
                  </Col>
                </FormGroup>

                <Button type='submit' value='submit' color='primary'>
                  Thêm
                </Button>
              </LocalForm>
            </ModalBody>
          </Modal>
          <div className='col-lg-4 col-md-4 col-sm-4'>
            <Form className='row' type='submit' onSubmit={this.onSearch}>
              <Input
                className='col-lg-6 col-md-7 col-sm-6'
                placeholder='Tìm nhân viên'
                name='searchName'
              />
              <Button
                className='col-lg-4 col-md-5 col-sm-6'
                type='submit'
                color='primary'
              >
                <i className='fa fa-search' aria-hidden='true'></i>
                Tìm Kiếm
              </Button>
            </Form>
          </div>
        </div>
        <div className='row'>
          {this.staffList(this.props.staffs).length > 0 ? (
            this.staffList(this.props.staffs)
          ) : (
            <h4 style={{ marginLeft: '27%', color: 'red', marginBottom: '5%' }}>
              Không tìm thấy kết quả phù hợp
            </h4>
          )}
        </div>
      </div>
    );
  }
}

export default StaffList;
