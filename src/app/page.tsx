"use client"
import Image from 'next/image'
import styles from './page.module.css'
import DataFetch from './components/DataFetch'
import DataForm from './components/form/DataForm'
import { useAddUser } from './hooks/create/useAddUser'

export default function Home() {
  const {mutate,isLoading,isSuccess}= useAddUser();

  const handleSubmit=(values:any)=>{
    mutate({
      ...values
    })
  }
  return (
    <main className={styles.main}>
      <DataForm  onSubmit={handleSubmit} />
      <DataFetch />
    </main>
  );
}
