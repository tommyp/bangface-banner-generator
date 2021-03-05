import Head from 'next/head'
import { useState } from 'react'
import Banner from '../components/banner'

const Text = "type and fuck off"

export default function Home() {
  const [text, setText] = useState(null)

  const onBlur = (e) => {
      e.target.focus();
  }

  const onChange = (e) => {
    console.log(e)
    setText(e.target.value)
  }

  return (
   <>
    <Banner text={text || Text}/>
    <input type="text" onChange={onChange} autofocus="true" onBlur={onBlur} />
   </>
  )
}
