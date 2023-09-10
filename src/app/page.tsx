"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DataFetch from './components/DataFetch'
import DataForm from './components/form/DataForm'

export default function Home() {
  return (
    <main className={styles.main}>
      <DataForm initialValues={undefined} onSubmit={()=>{}} loading={true}/>
      <DataFetch/>
    </main>
  )
}
