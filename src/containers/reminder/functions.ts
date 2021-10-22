import {
  Dispatch,
  SetStateAction,
  MouseEventHandler,
  ChangeEventHandler,
} from 'react'

type setStateType<T = any> = Dispatch<SetStateAction<T>>

export const trigger = (setState: setStateType<boolean>): MouseEventHandler<HTMLButtonElement> => {
  return (e) => {
    setState((state) => !state);
  }
}

export const changeHandler = (setState: setStateType<string>): ChangeEventHandler<HTMLInputElement> => {
  return (e) => {
    setState(e.target.value);
  }
}

export const submitTask: MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault();
  alert('submit!')
}

