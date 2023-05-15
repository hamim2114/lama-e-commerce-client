import styled from "styled-components";
import {mobile} from "../responsive";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginFail, loginStart, loginSuccess } from "../redux/userSlice";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Links = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
  const [input, setInput] = useState({});
  const {loading} = useSelector(state => state.user)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setInput({...input, [e.target.name]: e.target.value})
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      dispatch(loginStart())
      const res = await axios.post('/auth/signin', {...input})
      dispatch(loginSuccess(res.data))
      navigate('/')
    } catch (error) {
      dispatch(loginFail())
      console.log(error.response.data)
    }
  }
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input required onChange={handleChange} name="username" placeholder="username" />
          <Input required type="password" onChange={handleChange} name="password" placeholder="password" />
          <Button onClick={handleSubmit}>{loading ? 'LOADING..' : 'LOGIN'}</Button>
          <Link style={{textDecoration: 'none', margin: '5px 0px', fontSize: '12px'}}>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Links><Link style={{textDecoration: 'none', margin: '5px 0px', fontSize: '12px'}} to='/register'>CREATE A NEW ACCOUNT</Link></Links>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
