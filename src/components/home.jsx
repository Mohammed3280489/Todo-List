import React , {useState} from 'react';
import classes from './home.module.css';
import { Row  , Col} from 'antd';
import Cover from './cover';
import Lists from './list-task';
import Addtask from './add-task';
import Editetask from './Edite-task';
let task_id ;

const Home = () => {
  const [addTaskForm , setShowForm ]   = useState(false);
  const [editeTaskForm , setEditeTask] = useState(false);

  

  const showTaskForm = ()=> {
      setShowForm ((prev)=> {return !prev});
  }

  const showEditeForm = (id)=> {
    setEditeTask ((prev)=> {return !prev});
    task_id =id;
  }
    return (
        <>
          <div  className={ addTaskForm && classes.overlay } >
              <div className={classes.container}>
              <div className={classes.content}>
              <Row  gutter={{xs:32 , sm:32}}  className={classes.home}>
                  <Col  span = {24} className ={classes.home_h3}>Todo List</Col>
              </Row>
                <Cover className={classes.Cover}><Lists showFormHandler = {showTaskForm} showEditTask={showEditeForm} taskForm={addTaskForm}></Lists></Cover>
               
               </div>
             </div>
          </div>
         {addTaskForm && <Addtask showFormHandler ={showTaskForm}></Addtask>}
         {editeTaskForm && <Editetask showFormHandler ={showEditeForm} id ={task_id}></Editetask>}   
       
       


        </>
    );
}

export default Home ;