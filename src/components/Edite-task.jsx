import React , {useRef } from 'react';
import classes from './add-task.module.css';
import { Form , Button , Input  }  from 'antd';
import { useDispatch  } from 'react-redux';
import {tasksAction} from '../store/task-slice';
import 'antd/dist/antd.css';
const Editetask = (props) => {
  
    const Dispatch = useDispatch();
    const inputRef = useRef();

 
    const EditeTasksHandler = (id)=> {
        Dispatch(tasksAction.edit({id , dis:inputRef.current.props.value }))
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
        name="Edite Your Task"
        
      >
        <Input  placeholder='Edite Your Task ....'  className={classes.input_form} ref={inputRef}/>
      </Form.Item>
      </div>
      
      <div className="col-xs-4 col-sm-2 col-md-1 col-lg-1">
      <Button type="primary" danger ghost className={classes.buttne_danger} onClick={CancledFormHandler}> 
        Cancel
      </Button>
      </div>

      <div className="col-xs-4 col-sm-2 col-md-1 col-lg-1"> 
    
      <Button type="primary"  danger ghost className={classes.buttne_done} onClick={()=>EditeTasksHandler(props.id)} >
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

export default Editetask ;