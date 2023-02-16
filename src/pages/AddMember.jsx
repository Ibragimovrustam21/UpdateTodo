import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MyButton } from '../components/Button/MyButton'
import { UserContext } from '../context/user.context'
import './addMember.scss'

const defaultValue = {
  name: '',
  phone: '',
  otherPhone: '',
  status: 'o`qimoqda',
  date: '06.02.2023',
  contractNumber: 'ITC-01/1',
  sale: '10%',
  copyDoc: 'ko`rish',
}

export const AddMember = () => {
  const [user, setUser] = useState(defaultValue)
  const { users, setUsers, needChangeUser } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (needChangeUser) setUser(needChangeUser) // agar o`zgartiriladigan user bo`lsa setUser qivoradi
    else setUser(defaultValue) // aks holda defaultUser setUser qilib yuboriladi
  }, [])

  const createNewUser = (e) => {
    e.preventDefault()
    setUsers([
      ...users,
      user
    ]) // yangi userni add qiladi

    setUser(defaultValue) // formani dastlabki holatiga o`tkazadi
  }

  const onChangeHandler = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const setOnChange = () => {
    let updateUsersList = users.map(item => {
      if (item.id === needChangeUser.id) item = user

      return item
    })
    setUsers(updateUsersList) // yangilangan arrayni set qilib yuboradi

    setUser(defaultValue) // formani dastlabki holatiga o`tkazadi
    navigate('/') // asosiy sahifaga route qilib yuboradi
  }

  return (
    <div className='add__member--page'>
      <form onSubmit={createNewUser}>
        <div className='input__box'>
          <label>Name:</label>
          <input
            type='text'
            placeholder='Name...'
            value={user.name}
            onChange={e => onChangeHandler(e)}
            name='name'
          />
        </div>
        <div className='input__box'>
          <label>Phone:</label>
          <input
            type='text'
            placeholder='Phone...'
            value={user.phone}
            onChange={e => onChangeHandler(e)}
            name='phone'
          />
        </div>
        <div className='input__box'>
          <label>Other Phone:</label>
          <input
            type='text'
            placeholder='Other Phone...'
            value={user.otherPhone}
            onChange={e => onChangeHandler(e)}
            name='otherPhone'
          />
        </div>
        <div className='input__box'>
          <label>Status:</label>
          <select
            value={user.status}
            onChange={e => onChangeHandler(e)}
            name='status'
          >
            <option value='o`qimoqda'>O`qimoqda</option>
            <option value='chetlatildi'>Chetlatildi</option>
            <option value='bitirgan'>Bitirgan</option>
          </select>
        </div>
        <div className='btn__group'>
          <MyButton disabled={needChangeUser ? false : true} color={'blue'} type='button' onClick={setOnChange}>
            change user
          </MyButton>
          <MyButton disabled={needChangeUser ? true : false} color={'blue'} type='submit'>
            add member
          </MyButton>
        </div>
      </form>
    </div>
  )
}


