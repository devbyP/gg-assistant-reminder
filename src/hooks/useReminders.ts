import { useState, useEffect } from 'react';
import { ReminderItemType } from '../components/RemindItem';
import { apiFetch } from '../app/apiFetch';

function useReminders () {
  const [data, setData] = useState<ReminderItemType[]>([])
  const [isLoading, setLoading] = useState<boolean>()

  const addReminder = () => {

  }

  const checkedReminder = (index: number) => {
    
  }

  useEffect(() => {
    setLoading(true);
    apiFetch('/').then((data) => {
      setData(data)
    })
  }, []);
  
  return { reminders: data, isLoading }
}

export default useReminders;
