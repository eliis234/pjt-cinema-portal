import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { loginUser } from "../../redux/reducer/action";
import { CreateUser } from "../../services/userService";
import { connect } from "react-redux";
import * as _ from 'lodash';

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function ModalSignUp(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const dataSubmit = {
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP08",
    maLoaiNguoiDung: "KhachHang",
    hoTen: ""
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChangeInput = e => {
    let target = e.target;
    let { value, name } = target;
    dataSubmit[name] = value;
  };

  const submited = e => {
    handleClose();
    e.preventDefault();
    CreateUser(dataSubmit).then(res => {
      console.log(res);
      alert('Vui Long Dang Nhap Tai Khoan')
      let btn = document.getElementById("btnLoginUser");
      btn.click();
    }).catch(error => {
      console.log(error);
      let tb = _.get(error, 'response.data', 'Tài khoản này đã tồn tại')
      alert(tb)
    })
  };

  return (
    <div className="cm-modal-login-cpm text-dark">
      <button
        id="btnSignUp"
        type="button"
        onClick={handleOpen}
        className="sign-btn"
      >
        Đăng ký
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" className="text-dark">
              Transition modal
            </h2>
            <form className="text-dark">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Tài khoản</label>
                <input
                  type="input"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  name="taiKhoan"
                  onChange={onChangeInput}
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="matKhau"
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Email</label>
                <input
                  type="input"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="email"
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Số điện thoại</label>
                <input
                  type="input"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="soDt"
                  onChange={onChangeInput}
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Họ tên</label>
                <input
                  type="input"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="hoTen"
                  onChange={onChangeInput}
                />
              </div>
              
              <button className="btn btn-primary" onClick={handleClose}>
                Cancel
              </button>
              <button className="btn btn-primary" onClick={submited}>
                Submit
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default connect()(ModalSignUp);
