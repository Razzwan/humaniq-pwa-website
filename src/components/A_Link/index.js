import React from 'react';
import * as T from "prop-types";
import {Link} from 'react-router'
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('A_Link')

const A_Link = ({children, block, mod, disabled, ...props}) => {
  mod = disabled || mod
  return (
    <Link className={cn({block, mod, disabled})} {...props}>{children}</Link>
  )
}

A_Link.propTypes = {
  children: T.any.isRequired
};

export default A_Link