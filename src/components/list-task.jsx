import React from 'react';
import { List } from 'antd';
import 'antd/dist/antd.css';
import classes from './list-task.module.css';
import {DeleteFilled , PlusCircleFilled , EditFilled , CloseOutlined, CheckOutlined} from '@ant-design/icons';
import { useSelector , useDispatch } from 'react-redux';
import {tasksAction} from '../store/task-slice'
const Lists = (props) => {

      const item = useSelector((state)=> state.tasks.tasks)
      const Dispatch = useDispatch();
  
      

   const onAddTaskHandler = ()=> {
      props.showFormHandler();
   }

   const checkTaskHandler = (id) => {
        Dispatch(tasksAction.check({id}));
      
   }
  
   const cancleTaskHandler =(id) => {
       Dispatch(tasksAction.cancle({id}));
   }
   
   const deleteTaskHandler = (id) => {
       Dispatch(tasksAction.remove({id}))
   }
  
   const editeTaskHandler = (id) => {
      props.showEditTask(id);
   }
    return (
       <>
      
         <List
    itemLayout="horizontal"
    dataSource={item}
    
    renderItem={item => ( 
        
      <List.Item className = {`${item.isCompleted ? classes.task_Completed : item.isCancled  ? classes.task_Cancled : classes.task_active}`}>
        <List.Item.Meta
        
          title={<p  className={item.isCompleted || item.isCancled ? classes.p_notActive : classes.p_Active}>{`${item.date.month }  ${item.date.day}th, ${item.date.year}  ${item.date.time}`} </p>} 
          description={<p className={item.isCompleted || item.isCancled ? classes.p_discription_notactive : classes.p_discription_active }>{item.Description}</p>}
        />
          <DeleteFilled   className={item.isCompleted || item.isCancled ? classes.Delete_Icon_cancled: classes.Delete_Icon } onClick={()=> {deleteTaskHandler(item.id)}}  />

         {(!item.isCompleted && !item.isCancled ) && <EditFilled     className={classes.Edite_Icon} onClick={()=>editeTaskHandler(item.id)}/>}
         {(!item.isCompleted && !item.isCancled ) && <CloseOutlined  className={classes.Delete_Icon}  onClick={()=> {cancleTaskHandler(item.id)}} />}
         {(!item.isCompleted && !item.isCancled ) &&   <CheckOutlined  className={classes.checked_Icon} onClick={()=> {checkTaskHandler(item.id)}}  />}

        
      </List.Item>

    )}
  />
   <div className = {classes.plus_icon}>
        <PlusCircleFilled style={{color:'#1de90f' , padding : '10px'}} onClick={onAddTaskHandler} />
    </div>

       </>
    );
     
}
export default Lists ; 