import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import InputText from '../../components/InputText';
// import Checkbox from '../../components/Checkbox';
import Tag, { TagType } from '../../components/Tag';
import ReminderItem from '../../components/RemindItem';
import useReminders from '../../hooks/useReminders';
import { changeHandler, submitTask } from './functions';

function WorkReminder () {
  const [tags, setTags] = useState<TagType[]>([]);
  const [tagInput, setTagInput] = useState<string>("");
  const [task, setTask] = useState<string>("");

  const { reminders, isLoading } = useReminders();

  useEffect(() => {
    console.log("Taco!");
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.reminderList}>
        {
          // reminderItems
        }
      </ul>
      <div className={styles.newReminder}>
        <h2>New Reminder</h2>
        <form>
          <InputText
            label="Task"
            onChange={changeHandler(setTask)}
            value={task}
          />
          <div className={styles.tagsWrapper}>
            {
              // tags
            }
          </div>
          <InputText
            label="Tags"
            onChange={changeHandler(setTagInput)}
            value={tagInput}
          />
          <button type="button" onClick={submitTask}>submit</button>
        </form>
      </div>
    </div>
  )
}

export default WorkReminder;
