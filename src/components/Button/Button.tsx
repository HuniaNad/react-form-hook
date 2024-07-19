import React from 'react'

type ButtonProps = {
    title: string;
    type: string;
};

const Button = ({title, type} : ButtonProps) => {
  return (
    <>
        {type === "submit" 
            ? <button type="submit" className="btn btn-primary">{title}</button>
            : <button type="button" className="btn btn-primary">{title}</button>
        }
    </>
  )
}

export default Button
