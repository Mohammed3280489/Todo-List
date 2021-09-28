import React , {useRef } from 'react';
import classes from './add-task.module.css';
import { Form , Button , Input  }  from 'antd';
import { useDispatch  } from 'react-redux';
import {tasksAction} from '../store/task-slice';
import 'antd/dist/antd.css';
const Addtask = (props) => {
  
    const Dispatch = useDispatch();
    const inputRef = useRef();

    const sendTasksHandler = () => {
        const s = new Date(); 
        let year =s.toLocaleString('en-us', {year: 'numeric'});
        let month = s.toLocaleString('en-us', { month: 'long' });
        let day = s.toLocaleString( 'en-us' , { day: 'numeric' });
        let timeZone = s.toLocaleString( 'en-us' , { timeZone: 'UTC' });
        
        let time = timeZone.split(',');
        const Description = inputRef.current.props.value ;
    
        const task = {
            id : Math.random() * Math.random(),
            date :{
              year ,
              month ,
              day ,
              time:time[1].trim()
            } ,
            Description ,
            isCompleted:false,
            isCancled : false
        }
        Dispatch(tasksAction.add({task}))
        props.showFormHandler();
    }


 
 
    const CancledFormHandler = ()=>{
        props.showFormHandler();
    }


    return  (
    <>
       <div className={classes.content}>
           <div className={classes.container}>
           <div className="row">
    <Form   layout="inline" className={classes.addTaskForm}  >
       
          <div className="col-12 col-md-8 col-lg-9">
      <Form.Item
        name="Type Any Task "
        
      >
        <Input  placeholder='Type Any Task ....'  className={classes.input_form} ref={inputRef}/>
      </Form.Item>
      </div>
      
      <div className="col-xs-4 col-sm-2 col-md-1 col-lg-1">
      <Button type="primary" danger ghost className={classes.buttne_danger} onClick={CancledFormHandler}> 
        Cancel
      </Button>
      </div>

      <div className="col-xs-4 col-sm-2 col-md-1 col-lg-1"> 
    
      <Button type="primary"  danger ghost className={classes.buttne_done} onClick={sendTasksHandler} >
      Done
     </Button> 
           </div>
         </Form>
       </div>
      </div>
    </div>
    </>
    )
}

export default Addtask ;