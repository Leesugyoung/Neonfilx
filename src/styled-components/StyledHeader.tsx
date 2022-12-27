import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
  z-index: 998;
  height: 10%;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${props => props.theme.red};
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  font-weight: 500;
  margin-right: 20px;
  font-size: 14;
  color: ${props => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${props => props.theme.white.lighter};
  }
`;

export const ItemCircle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: ${props => props.theme.red};
  border-radius: 5px;
  bottom: -10px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  padding-right: 5px;
  svg {
    height: 25px;
    padding-right: 10px;
  }
`;

export const Input = styled(motion.input)`
  width: 250px;
  transform-origin: right center;
  position: absolute;
  right: 0px;
  padding: 10px;
  padding-left: 40px;
  z-index: -1;
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid ${props => props.theme.white.lighter};
`;
