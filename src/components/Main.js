import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import StaffList from './StaffList';
import StaffDetail from './StaffDetail';
import Dept from './Dept';
import { STAFFS, DEPARTMENTS } from '../shared/staffs';
import { Switch, Route } from 'react-router-dom';

function Main() {
  const [staff, setStaff] = useState({
    staffs: STAFFS,
    dept: DEPARTMENTS,
  });

  const StaffWithId = ({ match }) => {
    return (
      <StaffDetail
        staffId={staff.staffs.find(
          nv => nv.id === parseInt(match.params.IdNhanvien, 10)
        )}
      />
    );
  };
  return (
    <div>
      <Header />
      <Switch>
        <Route
          exact
          path='/nhanvien'
          component={() => <StaffList staffs={staff.staffs} />}
        />
        <Route path='/nhanvien/:IdNhanvien' component={StaffWithId} />
        <Route path='/phongban' component={() => <Dept dept={staff.dept} />} />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;
